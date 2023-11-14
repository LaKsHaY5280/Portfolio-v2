"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/lib/types/types";
import { urlFor } from "@/lib/utils/configSanity";

type props = {
  exp: Experience;
};

const Expcard = ({ exp }: props) => {
  return (
    <article className=" md:max-w-md flex justify-center items-center flex-col rounded-l md:space-y-7 flex-shrink-0 md:w-[600px] xl:w-[900px] snap-center bg-[#292929] overflow-hidden cursor-pointer duration-200 transition-opacity opacity-50 hover:opacity-100 h-full w-full ">
      <motion.div
        className=" w-20 h-20 rounded-full xl:w-[100px] xl:h-[110px] object-cover object-center"
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
          src={urlFor(exp?.companyImage).url()}
          alt="CuraHunt"
          className=" w-full h-full rounded-full xl:w-[100px] xl:h-[110px] object-cover object-center"
          width={100}
          height={110}
        />
      </motion.div>
      <div className=" px-0 md:px-10">
        <h4 className=" md:text-4xl font-light">{exp?.jobTitle}</h4>
        <p className=" font-bold md:text-2xl mt-1">{exp?.company}</p>
        <div className=" flex items-center justify-center space-x-2 my-2 mx">
          {exp?.technologies?.map((tech, i) => {
            return (
              <Image
                key={tech._id}
                src={urlFor(tech.image).url()}
                alt={tech.title}
                className=" h-7 w-7 rounded-full"
                width={30}
                height={30}
              />
            );
          })}
        </div>
        <p className=" py-5 text-gray-300 uppercase text-sm">
          {new Date(exp?.dateStarted).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}{" "}
          -{" "}
          {exp.isCurrentlyWorkingHere
            ? "Present"
            : new Date(exp?.dateEnded).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
        </p>
        <ul className=" list-disc space-y-4 ml-5 text-xs md:text-lg">
          {exp?.points?.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Expcard;
