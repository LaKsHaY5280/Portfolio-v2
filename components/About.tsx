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
      <h3 className=" absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase">
        About
      </h3>
      <motion.div
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
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
        <h4 className=" text-2xl md:text-3xl font-semibold ">
          <span className="animated_underline">
            Chronicle of the self: A glimpse within
          </span>
        </h4>
        <div className=" text-secondary text-lg md:text-xl font-semibold pb-3 max-[500px]:text-base">
          Lakshay Goyal - Web Developer
        </div>
        <span className="md:text-lg font-semibold py-3 max-[500px]:text-sm ">
          Unleashing Digital Marvels
        </span>
        <p className=" md:text-lg text-sm py-1 max-[500px]:text-sm pt-3 ">
          Greetings! I am
          <span className="animated_underline font-bold text-secondary">
            {" "}
            Lakshay Goyal
          </span>
          {pageinfo[0]?.backgroundInformation}
        </p>
        <span className="md:text-xl font-semibold py-3 max-[500px]:text-base">
          Experience and Expertise
        </span>
        <p className=" md:text-lg text-sm py-1 max-[500px]:text-sm pt-3 ">
          Unlocking the Web's Potential: Since 2019, I have immersed myself in
          the world of web development, embracing cutting-edge technologies. My
          expertise lies in <span className="highlight">HTML5</span>,{" "}
          <span className="highlight">CSS3</span>,{" "}
          <span className="highlight">JavaScript</span>,{" "}
          <span className="highlight">React.js</span>,{" "}
          <span className="highlight">Node.js</span>,{" "}
          <span className="highlight">MongoDB</span>,{" "}
          <span className="highlight">Express.js</span>
          ,and <span className="highlight">NEXT.js</span>, enabling me to bring
          websites to life with seamless performance across all devices.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
