"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ProjectCard, ProjectType } from "@/components/ui/project-card";


const projects: ProjectType[] = [
  {
    title: "CodeNexus (Blog App)",
    description: "A modern engineering blogging platform where users can securely publish, read, and manage technical articles.",
    features: [
      "Google OAuth",
      "Bcrypt Password Hashing",
      "Helmet Security",
      "Rate Limiting",
      "CRUD Operations"
    ],
    techStack: [
      "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Framer Motion"
    ],
    githubUrl: "https://github.com/dhruvmochi209-cyber/blog-app",
    liveUrl: "https://blog-app-sigma-ashen.vercel.app/",
    imageUrl: "/projects/blogapp.png",
    isFeatured: true
  },
  {
    title: "OrganMatch++",
    description: "A full-stack healthcare platform that securely connects organ donors, recipients, hospitals, and administrators through role-based dashboards and intelligent matching workflows.",
    features: [
      "Role-based Authentication",
      "OTP Email Verification",
      "Google Gemini AI Chatbot",
      "Medical Document Verification",
      "Organ Matching Workflow",
      "Secure File Upload"
    ],
    techStack: [
      "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Google Gemini API"
    ],
    githubUrl: "https://github.com/dhruvmochi209-cyber/organ-match",
    liveUrl: "REPLACE_WITH_YOUR_LIVE_LINK_HERE",
    imageUrl: "/projects/organmatch.png",
    isFeatured: true
  },
  {
    title: "TheCraftHouse",
    description: "A modern luxury frontend web application for a premium handmade shop. The platform features a stunning dark-themed UI with smooth scroll animations, an interactive custom cursor, and elegantly showcases specialized services like hand embroidery, bespoke bridal handwork, and artisanal detailing.",
    features: [
      "Premium Dark Theme UI",
      "Interactive Custom Cursor",
      "Smooth Scroll Animations",
      "Luxury Services Showcase",
      "Responsive Image Gallery",
      "Modern Responsive Design"
    ],
    techStack: [
      "React.js", "Vite", "Tailwind CSS", "Framer Motion", "Lucide React"
    ],
    githubUrl: "https://github.com/dhruvmochi209-cyber/thecrafthouse",
    liveUrl: "https://the-crafthouse.vercel.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnJCKEg1S92iRf5-n-5jjxFfd8vlu54CHsuilio7QhyBPUKlNs7pjgkS4Lwoo_aem_3UWajzFw9ecSabFBwNJNlg",
    imageUrl: "/projects/crafthouse.png",
    isFeatured: true
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full relative overflow-hidden py-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10 px-4 mb-16">
          
          {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] mx-auto"
        >
          <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Selected Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-6 text-center mx-auto"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >
          A selection of my best work in full-stack web development, showcasing complex architecture, beautiful interfaces, and real-world problem solving.
        </motion.p>
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto px-4 z-10 relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>

    </section>
  );
}
