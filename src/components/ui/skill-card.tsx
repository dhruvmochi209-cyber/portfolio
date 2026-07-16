"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: string[];
  className?: string;
  delay?: number;
}

export function SkillCard({ title, icon: Icon, skills, className, delay = 0 }: SkillCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-neutral-950/50 p-6 sm:p-8 backdrop-blur-sm group",
        className
      )}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.08), transparent 40%)`,
        }}
      />
      
      {/* Glow on top of the card border for dark mode */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,.15), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-8">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white dark:bg-white/5 text-black dark:text-white shadow-sm border border-neutral-200 dark:border-white/10 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-200 dark:group-hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Icon className="h-6 w-6 relative z-10" />
          </motion.div>
          <h3 className="text-xl font-bold text-black dark:text-white tracking-tight">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2.5 + (index % 3) * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              className="px-3 py-1.5 text-sm font-medium rounded-xl bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default shadow-[0_4px_14px_0_rgba(0,0,0,0.02)] hover:shadow-[0_4px_14px_0_rgba(59,130,246,0.1)] relative z-20 group-hover:z-30"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
