"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/#about" },
  { name: "Skills", link: "/#skills" },
  { name: "Projects", link: "/#projects" },
  { name: "Contact", link: "/#contact" },
];

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm pointer-events-auto">
        {navItems.map((item, idx) => (
          <Link
            key={item.name}
            href={item.link}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(idx)}
            className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            <span
              className={cn(
                "relative z-10",
                activeIndex === idx || hoveredIndex === idx
                  ? "text-black dark:text-white"
                  : "text-neutral-600 dark:text-neutral-400"
              )}
            >
              {item.name}
            </span>

            {/* Hover Indicator */}
            {hoveredIndex === idx && (
              <motion.div
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute inset-0 bg-neutral-200/50 dark:bg-white/10 rounded-full z-0"
              />
            )}

            {/* Active Indicator */}
            {activeIndex === idx && (
              <motion.div
                layoutId="activeBackground"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                className="absolute inset-0 border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 rounded-full shadow-sm z-0"
              />
            )}
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col w-full max-w-sm pointer-events-auto">
        <div className="flex items-center justify-between w-full px-5 py-3 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm">
          <span className="font-bold text-sm tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Portfolio
          </span>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
               initial={{ opacity: 0, y: -10, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -10, scale: 0.95 }}
               transition={{ duration: 0.2 }}
               className="flex flex-col mt-2 p-3 gap-1 w-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-xl overflow-hidden"
            >
              {navItems.map((item, idx) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => {
                    setActiveIndex(idx);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between",
                    activeIndex === idx 
                      ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400" 
                      : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                  )}
                >
                  {item.name}
                  {activeIndex === idx && (
                    <motion.div layoutId="mobileActive" className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
