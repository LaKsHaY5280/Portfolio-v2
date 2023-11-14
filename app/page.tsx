import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import {
  getPageInfo,
  getExperience,
  getSkills,
  getProjects,
  getSocials,
} from "@/lib/action";
import Link from "next/link";

export default async function Home() {
  const pageInfo = await getPageInfo();
  const experience = await getExperience();
  const skills = await getSkills();
  const projects = await getProjects();
  const social = await getSocials();

  // console.log(pageInfo);
  // console.log(experience);
  // console.log(skills);
  // console.log(projects);
  // console.log(social);

  return (
    <main className=" font-Coves bg-[#242424] text-white h-screen snap-y snap-mandatory  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80">
      <Header socials={social} />

      <section id="hero" className=" pt-10 snap-start">
        <Hero pageinfo={pageInfo} />
      </section>

      <section id="about" className=" snap-center">
        <About pageinfo={pageInfo} />
      </section>

      <section id="experience" className=" snap-center">
        <Experience experiences={experience} />
      </section>

      <section id="skills" className=" snap-center">
        <Skills skills={skills} />
      </section>

      <section id="projects" className=" snap-center">
        <Projects projects={projects} />
      </section>

      <section id="contact" className=" snap-center">
        <Contact pageinfo={pageInfo} />
      </section>

      <Link href="#hero">
        <Footer />
      </Link>
    </main>
  );
}
