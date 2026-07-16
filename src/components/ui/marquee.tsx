"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeItem {
  name: string;
  icon?: React.ElementType;
}

interface MarqueeProps {
  items: (string | MarqueeItem)[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: MarqueeProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return 20;
      case "normal":
        return 40;
      case "slow":
        return 60;
      default:
        return 40;
    }
  };

  const normalizedItems = items.map(item => 
    typeof item === "string" ? { name: item } : item
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <motion.ul
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: getSpeed(),
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : {}}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap"
        )}
      >
        {/* Render items twice for infinite loop effect */}
        {[...normalizedItems, ...normalizedItems].map((item, idx) => (
          <li
            key={item.name + idx}
            className="w-[180px] md:w-[220px] flex items-center justify-center gap-3 relative rounded-2xl border border-neutral-200 dark:border-white/10 flex-shrink-0 px-6 py-4 bg-white/50 dark:bg-white/5 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow group"
          >
            {item.icon && <item.icon className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500 transition-colors" />}
            <span className="relative z-20 text-sm md:text-lg font-bold text-neutral-800 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white transition-colors">
              {item.name}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
