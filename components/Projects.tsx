"use client";

import { motion } from "framer-motion";
import ProjCard from "./shared/ProjCard";
import { Project } from "@/lib/types/types";

type props = {
  projects: Project[];
};

const Projects = ({ projects }: props) => {
  return (
    <motion.div
      className=" relative flex justify-evenly items-center max-md:flex-col max-md:text-center max-w-full mx-auto overflow-hidden z-0 h-screen "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
    >
      <h3 className=" absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase ">
        Projects
      </h3>
      <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80">
        {projects.map((project, i) => (
          <ProjCard key={project._id} i={i} project={project} />
        ))}
      </div>
      <div className=" w-full absolute top-[30%] bg-secondary/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
