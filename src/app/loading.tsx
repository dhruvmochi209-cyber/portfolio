"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Background glow */}
        <div className="absolute w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        
        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="relative w-16 h-16"
        >
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-neutral-200 dark:border-white/10" />
          
          {/* Inner spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500" />
        </motion.div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-widest uppercase"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
