"use client";

import { motion } from "framer-motion";
import React from "react";

import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4">
          Available for new opportunities
        </div>

        <div className="text-4xl md:text-7xl font-bold dark:text-white text-center tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">
            Dhruv Mochi
          </span>
        </div>

        <div className="font-light text-base md:text-xl dark:text-neutral-200 py-4 max-w-3xl text-center">
          I am a Full-Stack Developer dedicated to building scalable, user-centric web applications, seamlessly bridging the gap between elegant front-end design and robust back-end architecture.
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto z-50 relative">
          {/* Primary Button */}
          <a 
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center group relative gap-2 rounded-full w-full sm:w-auto font-semibold text-base px-8 h-14 bg-black dark:bg-white text-white dark:text-black overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-300 border-none"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
            
            <span className="relative flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
              <Download className="h-5 w-5" />
              Download Resume
            </span>
          </a>

          {/* Secondary Button */}
          <a 
            href="#contact"
            className="inline-flex items-center justify-center group gap-2 rounded-full w-full sm:w-auto font-semibold text-base px-8 h-14 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 hover:-translate-y-1 shadow-sm transition-all duration-300 text-black dark:text-white"
          >
            <Mail className="h-5 w-5 group-hover:text-purple-500 transition-colors" />
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
