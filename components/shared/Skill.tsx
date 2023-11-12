"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import html from "@/assets/html.svg";

type prop = {
  dirl?: boolean;
};

const Skill = ({ dirl }: prop) => {
  return (
    <div className=" group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: dirl ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      >
        <Image
          src={html}
          alt="html"
          className=" rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
        />
      </motion.div>
      <div className=" absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/70 w-24 h-24 xl:w-32 xl:h-32 rounded-full">
        <div className=" flex justify-center items-center h-full">
          <p className=" text-3xl font-bold text-black opacity-100">95%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
