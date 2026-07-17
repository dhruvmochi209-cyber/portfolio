"use client";

import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export function AnimatedText({ text, className, highlightWords = [] }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <div className={cn("inline-block", className)}>
      {words.map((word, idx) => {
        // Remove punctuation for highlight checking
        const cleanWord = word.replace(/[.,]/g, "");
        const isHighlight = highlightWords.includes(cleanWord);
        
        return (
          <span
            key={idx}
            className={cn(
              "inline-block mr-1",
              isHighlight && "text-black dark:text-white font-semibold"
            )}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
