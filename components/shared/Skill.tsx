"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/lib/types/types";
import { urlFor } from "@/lib/utils/configSanity";

type prop = {
  dirl?: boolean;
  skills: Skill;
};

const Skilled = ({ dirl, skills }: prop) => {

  const screenWidth = window.innerWidth;
  let initialX;

  if (screenWidth <= 400) {
    initialX = 60;
  } else if (screenWidth <= 600) {
    initialX = 100;
  } else if (screenWidth <= 900) {
    initialX = 150;
  } else {
    initialX = 200;
  }
  return (
    <div className=" group relative cursor-pointer flex justify-center items-center ">
      <motion.img
        initial={{
          x: dirl ? -initialX : initialX,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        // viewport={{ once: true }}
        className=" rounded object-cover filter group-hover:grayscale transition duration-300 ease-in-out flex justify-center items-center"
        src={urlFor(skills?.image).url()}
        alt={skills.title}
        width={50}
        height={50}
      />

      <div className=" absolute opacity-0 w-full h-full  group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/70 xl:w-20 xl:h-20 rounded">
        <div className=" flex justify-center items-center h-full">
          <p className=" md:text-3xl font-bold text-black opacity-100">
            {skills?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skilled;
