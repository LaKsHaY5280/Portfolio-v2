"use client";

import { motion } from "framer-motion";
import ProjCard from "./shared/ProjCard";

const Projects = () => {
  return (
    <motion.div
      className=" relative flex justify-evenly items-center max-md:flex-col max-md:text-center max-w-full mx-auto overflow-hidden z-0 h-screen"
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
      <div className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        <ProjCard />
        <ProjCard />
        <ProjCard />
        <ProjCard />
      </div>
      <div className=" w-full absolute top-[30%] bg-secondary/10 left-0 h-[300px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
