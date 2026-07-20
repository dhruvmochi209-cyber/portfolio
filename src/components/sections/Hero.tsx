"use client";

import { motion } from "framer-motion";
import React from "react";
import { Mail, Download } from "lucide-react";
import { LightBackground } from "@/components/ui/light-background";

export function Hero() {
  return (
    <LightBackground className="min-h-screen flex items-center justify-center pt-24">
      {/* Main Content (Text and Buttons) */}
      <motion.div
        initial={{ opacity: 0.0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 z-20 pointer-events-auto"
      >
        <div className="inline-flex items-center rounded-full border border-blue-200/60 px-3 py-1 text-sm font-semibold text-blue-700 bg-blue-50 backdrop-blur-md mb-4 gap-2 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
          Available for new opportunities
        </div>

        <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-slate-800 text-center tracking-tight font-serif">
          Hi, I'm <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Dhruv Mochi
          </span>
        </div>

        <div className="font-light text-base md:text-xl text-slate-600 py-4 max-w-3xl text-center leading-relaxed">
          I am a Full-Stack Developer dedicated to building scalable, user-centric web applications, seamlessly bridging the gap between elegant front-end design and robust back-end architecture.
        </div>

        <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto">
          {/* Primary Button */}
          <a 
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center group relative gap-2 rounded-full w-full sm:w-auto font-semibold text-base px-8 h-14 bg-blue-600 text-white overflow-hidden shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300 border-none"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative flex items-center gap-2 z-10 transition-colors duration-300">
              <Download className="h-5 w-5" />
              Download Resume
            </span>
          </a>

          {/* Secondary Button */}
          <a 
            href="#contact"
            className="inline-flex items-center justify-center group relative gap-2 rounded-full w-full sm:w-auto font-semibold text-base px-8 h-14 bg-white/80 backdrop-blur-md border border-slate-200 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300 transition-all duration-300 text-slate-700 overflow-hidden"
          >
            <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 z-10 transition-colors duration-300">
              <Mail className="h-5 w-5" />
              Contact Me
            </span>
          </a>
        </div>
      </motion.div>
    </LightBackground>
  );
}
