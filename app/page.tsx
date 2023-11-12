import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className=" bg-[#242424] text-white h-screen snap-y snap-mandatory  overflow-y-scroll z-0">
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
    </main>
  );
}
