import { useEffect } from "react";
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);               

  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
