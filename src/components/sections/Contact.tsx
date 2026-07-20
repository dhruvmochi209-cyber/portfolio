"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, FileText, Send, User } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { LightBackground } from "@/components/ui/light-background";

export function Contact() {
  return (
    <LightBackground className="w-full relative overflow-hidden py-24" id="contact">
      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Section Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/60 shadow-sm mx-auto"
          >
            <Send className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">together.</span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout */}
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[10rem]">

          {/* Main Contact Action */}
          <BentoGridItem
            title="Let's Talk"
            description="Have a specific project in mind or just want to say hi? I'm always open to discussing new opportunities."
            titleClassName="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            descriptionClassName="text-lg text-slate-600"
            className="md:col-span-2 md:row-span-2 relative overflow-hidden group bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-sm"
            icon={<Send className="w-6 h-6 text-blue-500 mb-2" />}
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="mt-6 relative z-50">
              <a href="mailto:dhruvmochi209@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <Mail className="w-5 h-5" />
                Email Me Directly
              </a>
            </div>
          </BentoGridItem>
          {/* Contact Details / Globe */}
          <BentoGridItem
            title="Contact Details"
            titleClassName="text-2xl font-bold mb-4 text-slate-800"
            description={
              <div className="flex flex-col gap-4 mt-6 text-base md:text-lg font-semibold text-slate-700">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <User className="w-5 h-5" />
                  </div>
                  <span>Dhruv A Mochi</span>
                </div>
                <div className="flex items-center gap-4 group relative z-20">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+919313984566" className="hover:text-blue-600 transition-colors">
                    +91 9313984566
                  </a>
                </div>
                <div className="flex items-center gap-4 group relative z-50">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:dhruvmochi209@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors truncate">
                    dhruvmochi209@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Ahmedabad, India</span>
                </div>
              </div>
            }
            className="md:col-span-1 md:row-span-2 relative overflow-hidden bg-white border border-slate-200"
          >
            <div className="absolute inset-0 z-0 top-40 flex items-center justify-center opacity-30 pointer-events-none">
              <Globe />
            </div>
          </BentoGridItem>

          {/* Resume */}
          <BentoGridItem
            title="Resume"
            description="Download my CV"
            className="md:col-span-3 md:row-span-1 group relative cursor-pointer bg-white border border-slate-200"
            icon={<FileText className="w-4 h-4 text-slate-500" />}
            titleClassName="text-slate-800"
            descriptionClassName="text-slate-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="absolute inset-0 z-10" aria-label="Resume" />
            <div className="absolute right-4 bottom-4 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white text-purple-600 transition-colors">
              <FileText className="w-4 h-4" />
            </div>
          </BentoGridItem>

        </BentoGrid>
      </div>
    </LightBackground>
  );
}
