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
          src={urlFor(exp?.companyImage).url()}
          alt="CuraHunt"
          className=" w-full h-full rounded-full xl:w-[100px] xl:h-[110px] object-cover object-center"
          width={100}
          height={110}
        />
      </motion.div>
      <div className=" px-0 md:px-10">
        <h4 className=" text-4xl font-light">{exp?.jobTitle}</h4>
        <p className=" font-bold text-2xl mt-1">{exp?.company}</p>
        <div className=" flex space-x-2 my-2">
          {exp?.technologies?.map((tech, i) => {
            return (
              <Image
                key={tech._id}
                src={urlFor(tech.image).url()}
                alt={tech.title}
                className=" h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
            );
          })}
        </div>
        <p className=" py-5 text-gray-300 uppercase">
          {/* {exp?.DateStarted} - {exp?.DateEnded} */}
          {new Date(exp?.dateStarted).toDateString()} -{" "}
          {exp.isCurrentlyWorkingHere
            ? "Present"
            : new Date(exp?.dateEnded).toDateString()}
        </p>
        <ul className=" list-disc space-y-4 ml-5 text-lg">
          {exp?.points?.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Expcard;
