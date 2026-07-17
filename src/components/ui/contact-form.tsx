"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call for EmailJS / Resend / Formspree
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form Submitted:", data);
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    setIsSubmitting(false);
    reset();
  };

  const InputField = ({ label, name, type = "text", error, isTextArea = false }: any) => {
    return (
      <div className="relative mb-6">
        {isTextArea ? (
          <textarea
            {...register(name)}
            id={name}
            placeholder=" "
            rows={4}
            disabled={isSubmitting}
            className={cn(
              "peer block w-full px-4 pt-6 pb-2 text-sm text-neutral-900 dark:text-neutral-100 bg-transparent rounded-xl border appearance-none focus:outline-none focus:ring-0 transition-colors disabled:opacity-50 resize-none",
              error 
                ? "border-red-500 focus:border-red-500" 
                : "border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
            )}
          />
        ) : (
          <input
            {...register(name)}
            type={type}
            id={name}
            placeholder=" "
            disabled={isSubmitting}
            className={cn(
              "peer block w-full px-4 pt-6 pb-2 text-sm text-neutral-900 dark:text-neutral-100 bg-transparent rounded-xl border appearance-none focus:outline-none focus:ring-0 transition-colors disabled:opacity-50",
              error 
                ? "border-red-500 focus:border-red-500" 
                : "border-neutral-300 dark:border-neutral-700 focus:border-blue-500 dark:focus:border-blue-400"
            )}
          />
        )}
        
        <label
          htmlFor={name}
          className={cn(
            "absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3",
            error ? "text-red-500" : "text-neutral-500 dark:text-neutral-400 peer-focus:text-blue-600 dark:peer-focus:text-blue-400"
          )}
        >
          {label}
        </label>
        
        {error && (
          <motion.p 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-red-500 mt-1 ml-1 absolute -bottom-5 left-0"
          >
            {error}
          </motion.p>
        )}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl shadow-xl relative overflow-hidden"
    >
      {/* Decorative Gradient Blob */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="relative z-10 mb-8">
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Send me a message</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Have a specific project in mind or just want to say hi? Fill out the form below and let's talk.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-2">
        <InputField label="Full Name" name="name" error={errors.name?.message} />
        <InputField label="Email Address" name="email" type="email" error={errors.email?.message} />
        <InputField label="Subject" name="subject" error={errors.subject?.message} />
        <InputField label="Message" name="message" isTextArea error={errors.message?.message} />

        <button
          type="submit"
          disabled={isSubmitting}
          className="group relative mt-4 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] border-none"
        >
          {/* Button Hover Glow / Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
          
          <span className="relative flex items-center justify-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </span>
        </button>
      </form>
    </motion.div>
  );
}
