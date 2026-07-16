"use client";

import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "@/components/ui/skill-card";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Layout, Server, Database, Wrench, Bot, Sparkles } from "lucide-react";

const frontendSkills = [
  "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
  "HTML5", "CSS3", "Tailwind CSS",
  "Shadcn UI", "Ant Design", "Radix UI"
];

const backendSkills = [
  "Node.js", "Express.js", "REST APIs", "JWT Authentication"
];

const databaseSkills = [
  "MongoDB", "MySQL"
];

const toolSkills = [
  "Git", "GitHub", "Vercel", "Render", "Postman", "Thunder Client"
];

const aiSkills = [
  "Google Gemini", "Claude", "Antigravity AI", "21st.dev"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative overflow-hidden bg-neutral-50 dark:bg-black">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-600/10 rounded-[100%] blur-[100px] pointer-events-none" />

      {/* Interactive Background Cloud */}
      <div className="absolute inset-0 w-full h-full opacity-40 dark:opacity-50 z-0 flex items-center justify-center pointer-events-auto overflow-hidden scale-150 md:scale-[2]">
        <IconCloud iconSlugs={[
          "typescript", "javascript", "react", "nextdotjs", "html5", "css3",
          "tailwindcss", "nodedotjs", "express", "mongodb", "mysql", "git",
          "github", "vercel", "render", "postman", "antdesign",
          "jsonwebtokens", "prisma", "redux"
        ]} />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10 px-4 mb-16">

        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] mx-auto"
        >
          <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Tech Arsenal
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black dark:text-white mb-6 text-center mx-auto"
        >
          My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
        >

        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 z-10 relative">
        <SkillCard
          title="Frontend Engineering"
          icon={Layout}
          skills={frontendSkills}
          className="md:col-span-2"
          delay={0.1}
        />
        <SkillCard
          title="Backend Architecture"
          icon={Server}
          skills={backendSkills}
          className="md:col-span-1"
          delay={0.2}
        />
        <SkillCard
          title="Database Management"
          icon={Database}
          skills={databaseSkills}
          className="md:col-span-1"
          delay={0.3}
        />
        <SkillCard
          title="DevOps & Tools"
          icon={Wrench}
          skills={toolSkills}
          className="md:col-span-1"
          delay={0.4}
        />
        <SkillCard
          title="AI & Automation"
          icon={Bot}
          skills={aiSkills}
          className="md:col-span-1"
          delay={0.5}
        />
      </div>

      {/* Bottom Padding */}
      <div className="h-10"></div>

    </section>
  );
}
