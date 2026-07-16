"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Mail, ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  },
  {
    name: "Email",
    href: "mailto:hello@dhruvmochi.com",
    icon: () => <Mail className="w-5 h-5" />
  },
];

const techBadges = [
  "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#home') {
        scrollToTop();
      }
    }
  };

  return (
    <footer className="relative w-full bg-white dark:bg-black overflow-hidden pt-16 pb-8 border-t border-neutral-200 dark:border-white/10">

      {/* Top Border Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[40px] bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">

          {/* Column 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Dhruv <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500">Mochi</span>
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed max-w-sm">
              "Building scalable, modern and user-focused web experiences."
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="group flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 w-fit transition-colors"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Socials & Back to top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-semibold text-neutral-900 dark:text-white">Connect</h4>

              <button
                onClick={scrollToTop}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-white/5 border border-transparent hover:border-blue-500/30 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500 group-hover:-translate-y-1 transition-all" />
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors w-fit pr-4"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors">
                      <Icon />
                    </div>
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition-colors">
                      {social.name}
                    </span>
                    <ExternalLink className="w-3 h-3 text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-200 dark:via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} Dhruv Mochi. All Rights Reserved.
          </p>


        </div>

      </div>
    </footer>
  );
}
