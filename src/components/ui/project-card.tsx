"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectType {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  isFeatured?: boolean;
}

interface ProjectCardProps {
  project: ProjectType;
  delay?: number;
  className?: string;
}

export function ProjectCard({ project, delay = 0, className }: ProjectCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const Content = () => (
    <div className={cn("flex flex-col h-full z-10", project.isFeatured ? "p-8 md:p-12 md:w-1/2" : "p-6 sm:p-8")}>
      
      {/* Featured Badge */}
      {project.isFeatured && (
        <div className="flex items-center gap-2 mb-6 w-fit px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest shadow-sm">
          <Star className="w-3.5 h-3.5 fill-blue-600 dark:fill-blue-400" />
          Featured Project
        </div>
      )}

      {/* Title & Description */}
      <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3">
        {project.title}
      </h3>
      <p className="text-base text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
        {project.description}
      </p>

      {/* Features List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
        {project.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-300 border border-neutral-200/50 dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] border-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
              <span className="relative flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-white/5 text-black dark:text-white font-semibold text-sm border border-neutral-200 dark:border-white/10 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:border-transparent overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-gradient" />
              <span className="relative flex items-center gap-2 z-10 group-hover:text-white transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                Source
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const Mockup = () => (
    <div className={cn(
      "relative flex items-center justify-center p-6 lg:p-12 z-10 overflow-hidden",
      project.isFeatured ? "md:w-1/2 bg-neutral-50 dark:bg-neutral-900/30" : "w-full bg-neutral-50 dark:bg-neutral-900/30 border-b border-neutral-200 dark:border-white/5"
    )}>
      {/* Decorative Glow inside mockup container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[60px]" />

      {/* Browser Mockup Window */}
      <div className="relative w-full max-w-[500px] aspect-[16/10] rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
        {/* Browser Top Bar */}
        <div className="w-full h-6 sm:h-8 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-3 gap-1.5 shrink-0">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400" />
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
        </div>
        
        {/* Browser Content (Image Placeholder for now) */}
        <div className="w-full h-full bg-neutral-50 dark:bg-neutral-950 flex flex-col items-center justify-center text-neutral-400 text-sm">
          {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-contain object-top bg-neutral-100 dark:bg-neutral-900" />
          ) : (
             <div className="flex flex-col items-center justify-center opacity-50">
               <ExternalLink className="w-8 h-8 mb-2" />
               <span>Preview Application</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm",
        project.isFeatured ? "md:flex-row col-span-1 md:col-span-2 lg:col-span-3" : "col-span-1 md:col-span-1",
        className
      )}
    >
      {/* Magic Spotlight Hover Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.05), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(59,130,246,.15), transparent 40%)`,
        }}
      />

      {/* Layout Logic */}
      {project.isFeatured ? (
        <>
          <Content />
          <Mockup />
        </>
      ) : (
        <>
          <Mockup />
          <Content />
        </>
      )}
    </motion.div>
  );
}
