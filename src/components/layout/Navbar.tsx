"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-6 inset-x-0 mx-auto z-50 flex justify-center px-4"
    >
      <div className="flex items-center gap-1 md:gap-2 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-sm">
        {navItems.map((item, idx) => (
          <Link
            key={item.name}
            href={item.link}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => setActiveIndex(idx)}
            className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium transition-colors"
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
    </motion.div>
  );
}
