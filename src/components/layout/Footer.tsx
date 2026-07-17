"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export function Footer() {
  return (
    <footer className="relative w-full bg-white dark:bg-black text-black dark:text-white overflow-hidden py-12 px-6 md:px-12 border-t border-neutral-200 dark:border-white/10">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-neutral-300 dark:via-white/20 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-16">
          <div className="flex flex-col gap-6 max-w-md">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
              Ready to build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">extraordinary?</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg font-medium mt-2">
              Whether you have a project in mind or just want to chat, I'm always open to new opportunities.
            </p>
            <a
              href="mailto:dhruvmochi209@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 mt-2 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all w-fit"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24 w-full lg:w-auto mt-8 lg:mt-0">
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest">Navigation</h3>
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-semibold text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 group w-fit">
                  {item}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 dark:text-blue-400" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest">Socials</h3>
              <div className="flex gap-4">
                {[
                  { name: "GitHub", href: "https://github.com/dhruvmochi209-cyber", icon: GithubIcon },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/dhruv-mochi-5aaa92406/", icon: LinkedinIcon },
                  { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.name} href={social.href} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                      <Icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400 text-sm md:text-base font-medium">
          <p className="text-center">© {new Date().getFullYear()} Dhruv Mochi. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
