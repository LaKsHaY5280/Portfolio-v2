import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" bg-[#242424] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80">
      <Header />

      <section id="hero" className=" pt-10 snap-start">
        <Hero />
      </section>

      <section id="about" className=" snap-center">
        <About />
      </section>

      <section id="experience" className=" snap-center">
        <Experience />
      </section>

      <section id="skills" className=" snap-center">
        <Skills />
      </section>

      <section id="projects" className=" snap-center">
        <Projects />
      </section>

      <section id="contact" className=" snap-center">
        <Contact />
      </section>

      <Link href="#hero">
        <Footer />
      </Link>
    </main>
  );
}
