"use client";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className=" relative flex justify-evenly items-center max-md:flex-col max-md:text-center max-w-full mx-auto md:px-10 pt-20 overflow-hidden h-screen"
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
      <h3 className=" absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase">
        Projects
      </h3>
      <div></div>
    </motion.div>
  );
};

export default Projects;
