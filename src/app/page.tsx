import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-white">
      <Navbar />

      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
