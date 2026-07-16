import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/sections/Skills").then(mod => mod.Skills));
const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => mod.Projects));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => mod.Contact));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
