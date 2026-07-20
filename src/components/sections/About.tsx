"use client";

import { motion } from "framer-motion";
import React from "react";
import { Sparkles } from "lucide-react";

import { AnimatedText } from "@/components/ui/animated-text";
import { Timeline } from "@/components/ui/timeline";
import { LightBackground } from "@/components/ui/light-background";

export function About() {
  const bioText = "I'm Dhruv Mochi, a passionate Full Stack Developer from Gujarat, India. I enjoy turning ideas into real-world web applications using modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript. I continuously explore new technologies such as AI tools, Shadcn UI, and modern frontend architectures to improve my skills and build better user experiences.";

  const highlights = ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript"];

  const timelineData = [
    {
      title: "About Me",
      content: (
        <div>
          <AnimatedText
            text={bioText}
            highlightWords={highlights}
            className="text-base md:text-lg font-light leading-relaxed text-slate-700"
          />
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <p className="text-slate-800 text-xl font-bold mb-2">
            Master of Science (CA & IT)
          </p>
          <p className="text-indigo-600 font-semibold text-sm mb-4">
            Hemchandracharya North Gujarat University, Patan
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Completed my post-graduation with a strong foundation in computer applications, software engineering, and modern information technology practices.
          </p>
        </div>
      ),
    },
    {
      title: "Recent Experience",
      content: (
        <div>
          <p className="text-slate-800 text-xl font-bold mb-2">
            MERN Stack Developer Intern
          </p>
          <p className="text-blue-600 font-semibold text-sm mb-4">
            Technical Core Engineer • 6 Months • Ahmedabad, Gujarat
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Successfully completed an intensive 6-month MERN Stack developer internship. Contributed to building scalable, high-performance web applications by designing RESTful APIs, optimizing MongoDB schemas, and developing responsive frontend interfaces with React.js and Tailwind CSS. Collaborated with cross-functional teams to integrate secure authentication, payment gateways, and real-time features.
          </p>
        </div>
      ),
    }
  ];

  return (
    <LightBackground className="w-full relative overflow-hidden py-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10 px-4">

        {/* Highlighted Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200/60 shadow-sm mx-auto"
        >
          <Sparkles className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            About Me
          </span>
        </motion.div>

        {/* Timeline Section */}
        <Timeline data={timelineData} />
      </div>
    </LightBackground>
  );
}
