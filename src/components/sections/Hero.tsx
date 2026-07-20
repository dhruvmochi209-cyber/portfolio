"use client";

import { motion } from "framer-motion";
import React from "react";

import { Mail, Download } from "lucide-react";

// Reusable Dot Grid SVG
const DotGrid = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle fill="#cbd5e1" cx="2" cy="2" r="1.5"></circle>
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>
);

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#fafbfc]">
      
      {/* 1. Large Soft Gradients */}
      <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[60%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[70%] rounded-full bg-purple-400/15 blur-[120px] pointer-events-none z-0" />

      {/* 2. Fluid SVG Shapes (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none opacity-80 h-full">
        {/* Deepest blue layer */}
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none" className="absolute bottom-0 left-[-10%] w-[120%] h-[80%] text-blue-500/20">
          <path d="M0,800 L0,300 C200,450 400,600 700,450 C900,350 1100,200 1200,300 L1200,800 Z" fill="currentColor"></path>
        </svg>
        {/* Soft purple/blue layer */}
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none" className="absolute bottom-0 left-[-5%] w-[110%] h-[60%] text-indigo-400/20">
          <path d="M0,800 L0,400 C300,500 500,650 800,500 C1000,400 1150,300 1200,400 L1200,800 Z" fill="currentColor"></path>
        </svg>
        {/* Lightest top layer */}
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-[100%] h-[40%] text-blue-300/30">
          <path d="M0,800 L0,500 C300,600 600,700 900,500 C1050,400 1150,450 1200,550 L1200,800 Z" fill="currentColor"></path>
        </svg>
        {/* Right side climbing shape */}
        <svg viewBox="0 0 1200 800" preserveAspectRatio="none" className="absolute bottom-0 right-0 w-[50%] h-[70%] text-blue-200/40">
           <path d="M1200,800 L1200,200 C1000,100 900,400 600,600 C400,750 200,750 0,800 Z" fill="currentColor"></path>
        </svg>
      </div>

      {/* 3. Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Top Left Shape */}
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-white rounded-full opacity-60 shadow-[0_0_50px_rgba(0,0,0,0.02)]" />
        
        {/* Top Right Curved Line and Dot */}
        <svg className="absolute top-[-10%] right-[-5%] w-[500px] h-[400px] overflow-visible">
           <path d="M100,-50 C150,150 300,250 550,200" fill="none" stroke="#a5b4fc" strokeWidth="1.5" />
           <circle cx="285" cy="140" r="6" fill="#818cf8" />
        </svg>

        {/* Scattered Dot Grids */}
        <DotGrid className="absolute top-[10%] left-[5%]" />
        <DotGrid className="absolute top-[15%] right-[10%]" />
        <DotGrid className="absolute bottom-[15%] right-[5%]" />

        {/* Diagonal Thin Lines (Right) */}
        <div className="absolute top-[60%] right-[20%] flex gap-2 rotate-45 opacity-40">
           <div className="w-[1px] h-12 bg-indigo-400"></div>
           <div className="w-[1px] h-12 bg-indigo-400"></div>
           <div className="w-[1px] h-12 bg-indigo-400"></div>
           <div className="w-[1px] h-12 bg-indigo-400"></div>
        </div>

        {/* Small Floating Sphere (Left) */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] left-[15%] w-8 h-8 rounded-full bg-gradient-to-br from-indigo-200 to-purple-300 shadow-lg shadow-purple-500/20"
        />

        {/* Thin flowing lines on bottom left */}
        <svg className="absolute bottom-[10%] left-[5%] w-[600px] h-[300px] overflow-visible opacity-50">
           <path d="M-50,200 C150,300 300,100 650,250" fill="none" stroke="#fff" strokeWidth="1" />
           <path d="M0,250 C200,250 400,150 600,300" fill="none" stroke="#fff" strokeWidth="1" />
        </svg>
      </div>

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
    </section>
  );
}
