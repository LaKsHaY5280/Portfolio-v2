"use client";

import { motion } from "framer-motion";
import Skilled from "./shared/Skill";
import { Skill } from "@/lib/types/types";

type props = {
  skills: Skill[];
};

const Skills = ({ skills }: props) => {
  return (
    <motion.div
      className=" relative flex justify-evenly items-center max-xl:flex-col max-md:text-center max-w-[2000px] mx-auto xl:px-10 pt-20 xl:space-y-0 min-h-screen"
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
      <h3 className=" headtext">Skills</h3>
      <h3 className=" absolute top-36 tracking-[3px] text-gray-500 text-xs md:text-xl uppercase">
        Hover over a skill to see the current profieciency
      </h3>
      <div className=" w-full h-80 grid grid-cols-4 px-5 gap-2 md:gap-5">
        {skills?.slice(0, skills.length / 2).map((item) => (
          <Skilled key={item._id} skills={item} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((item) => (
          <Skilled key={item._id} skills={item} dirl />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills
