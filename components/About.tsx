"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "@/lib/types/types";
import { urlFor } from "@/lib/utils/configSanity";

type props = {
  pageinfo: PageInfo[];
};

const About = ({ pageinfo }: props) => {
  return (
    <motion.div
      className=" relative flex justify-evenly items-center max-md:flex-col max-md:text-center max-w-7xl mx-auto md:px-10 pt-20  h-screen"
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
      <h3 className=" headtext">About</h3>
      <motion.div
        className=" -mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={urlFor(pageinfo[0]?.profilePic).url()}
          alt="profile"
          className=" w-full h-full -mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
          width={400}
          height={500}
        />
      </motion.div>
      <div className=" px-5 pt-10 md:px-10">
        <h4 className=" text-xl md:text-3xl font-semibold ">
          <span className="animated_underline">
            Chronicle of the self: A glimpse within
          </span>
        </h4>
        <div className=" text-secondary text-lg md:text-xl font-semibold pb-3 max-[500px]:text-base">
          Lakshay Goyal - Web Developer
        </div>
        <p className=" md:text-lg text-xs py-1pt-3 ">
          Greetings! I am
          <span className="animated_underline font-bold text-secondary">
            {" "}
            Lakshay Goyal,{" "}
          </span>
          {pageinfo[0]?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
