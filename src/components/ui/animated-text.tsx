"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export function AnimatedText({ text, className, highlightWords = [] }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.03,
          },
        },
      }}
      className={cn("inline-block", className)}
    >
      {words.map((word, idx) => {
        // Remove punctuation for highlight checking
        const cleanWord = word.replace(/[.,]/g, "");
        const isHighlight = highlightWords.includes(cleanWord);
        
        return (
          <motion.span
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
              "inline-block mr-1",
              isHighlight && "text-black dark:text-white font-semibold"
            )}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
}
