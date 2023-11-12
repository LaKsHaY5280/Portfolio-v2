"use client";

import { motion } from "framer-motion";
import Expcard from "./shared/Expcard";

const Experience = () => {
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
        Experience
      </h3>
      <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
      </div>
    </motion.div>
  );
};

export default Experience;
