"use client";

import { motion } from "framer-motion";
import Expcard from "./shared/Expcard";
import { useEffect, useRef, useState } from "react";
import { Experience } from "@/lib/types/types";

type props = {
  experiences: Experience[];
};

const Experiences = ({ experiences }: props) => {
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
      className=" relative flex justify-center items-center max-md:flex-col max-md:text-center max-w-full mx-auto md:px-10 pt-20  h-screen"
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
      <h3 className=" headtext">Experience</h3>
      <motion.div
        // ref={ref}
        // drag="x"
        // dragConstraints={{
        //   right: 0,
        //   left: -width,
        // }}
        className=" w-full flex space-x-5 p-10 p-y-0 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 overflow-x-scroll scrollbar-thumb-secondary/80"
      >
        {experiences.map((exp) => (
          <Expcard key={exp._id} exp={exp} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Experiences;
