"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  href?: string;
  isCopyable?: boolean;
  delay?: number;
  className?: string;
}

export function SocialCard({
  title,
  value,
  icon: Icon,
  href,
  isCopyable,
  delay = 0,
  className
}: SocialCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (isCopyable) {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const CardContent = (
    <div className={cn(
      "group relative flex items-center justify-between p-5 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-500/30 dark:hover:border-blue-500/30",
      className
    )}>
      
      {/* Background Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex items-center gap-4 relative z-10">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 group-hover:scale-110 group-hover:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-500/20 transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-0.5">{title}</p>
          <p className="text-base font-bold text-neutral-800 dark:text-neutral-200">{value}</p>
        </div>
      </div>

      <div className="relative z-10 text-neutral-400 group-hover:text-blue-500 transition-colors">
        {isCopyable ? (
          <button 
            onClick={handleCopy}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
          </button>
        ) : (
          <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}
