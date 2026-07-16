"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, FileText, Send } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";
import { SocialCard } from "@/components/ui/social-card";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function Contact() {
  return (
    <section id="contact" className="w-full relative overflow-hidden">
      <AuroraBackground className="h-auto py-24 w-full" showRadialGradient={true}>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-sm mx-auto"
          >
            <Send className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Get in Touch
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">together.</span>
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Left: Contact Form (Spans 3 cols on large screens) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Right: Contact Details & Socials (Spans 2 cols on large screens) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            
            <SocialCard 
              title="Email Address"
              value="hello@dhruvmochi.com"
              icon={Mail}
              isCopyable
              delay={0.2}
            />
            
            <SocialCard 
              title="Phone Number"
              value="+91 98765 43210"
              icon={Phone}
              isCopyable
              delay={0.3}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 mt-2">
              <SocialCard 
                title="Location"
                value="Ahmedabad, India"
                icon={MapPin}
                delay={0.4}
              />
              <SocialCard 
                title="LinkedIn"
                value="Connect with me"
                icon={() => (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                )}
                href="https://linkedin.com"
                delay={0.5}
              />
              {/* Github SVG directly wrapped in a component or standard SVG. Using a generic FileText for Resume for now */}
              <SocialCard 
                title="Resume"
                value="Download PDF"
                icon={FileText}
                href="/resume.pdf"
                delay={0.6}
              />
              <SocialCard 
                title="GitHub"
                value="View Repositories"
                icon={() => (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                )}
                href="https://github.com"
                delay={0.7}
              />
            </div>

          </div>

        </div>
        </div>
      </AuroraBackground>
    </section>
  );
}
