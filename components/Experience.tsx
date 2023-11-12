"use client";

import { motion } from "framer-motion";
import Expcard from "./shared/Expcard";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref?.current?.scrollWidth && !ref?.current?.offsetWidth) {
      return;
    }
    setWidth(ref?.current?.scrollWidth - ref?.current?.offsetWidth);
  }, []);

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
      <motion.div
        ref={ref}
        drag="x"
        dragConstraints={{
          right: 0,
          left: -width,
        }}
        className=" w-full flex space-x-5  p-10 pl-0 snap-x snap-mandatory"
      >
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
        <Expcard />
      </motion.div>
    </motion.div>
  );
};

export default Experience;
