"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CuraHunt from "@/assets/CuraHunt.svg";
import html from "@/assets/html.svg";
import css from "@/assets/css.svg";
import js from "@/assets/javascript.svg";
import ts from "@/assets/typescript.svg";

const Expcard = () => {
  return (
    <article className=" max-w-sm flex justify-center items-center flex-col rounded-l space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] overflow-hidden cursor-pointer duration-200 transition-opacity opacity-50 hover:opacity-100 ">
      <motion.div
        className=" w-32 h-32 rounded-full xl:w-[100px] xl:h-[110px] object-cover object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={CuraHunt}
          alt="CuraHunt"
          className=" w-full h-full rounded-full xl:w-[100px] xl:h-[110px] object-cover object-center"
        />
      </motion.div>
      <div className=" px-0 md:px-10">
        <h4 className=" text-4xl font-light">Back-End Developer</h4>
        <p className=" font-bold text-2xl mt-1">CuraHunt</p>
        <div className=" flex space-x-2 my-2">
          <Image src={html} alt="html" className=" h-10 w-10 rounded-full" />
          <Image src={css} alt="css" className=" h-10 w-10 rounded-full" />
          <Image src={js} alt="js" className=" h-10 w-10 rounded-full" />
          <Image src={ts} alt="ts" className=" h-10 w-10 rounded-full" />
        </div>
        <p className=" py-5 text-gray-300 uppercase">Started - Ended</p>
        <ul className=" list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default Expcard;
