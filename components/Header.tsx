"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className=" w-full flex justify-between items-center mx-auto z-20 pt-2 fixed">
      <div className=" w-full max-w-7xl flex justify-between items-center mx-auto z-20 ">
        <motion.div
          className=" flex justify-center items-center"
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* Social Handels */}
          <SocialIcon
            url="https://github.com/LaKsHaY5280"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/akuma._.lakshay"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/lakshay-goyal-2a03a4270"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://x.com/Lakshay43075971?t=DdYs-Pgglu3BYdsbPlnbGQ&s=08"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-center pr-6 md:pr-9"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <SocialIcon
            className=" cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className=" max-md:hidden uppercase text-sm text-gray-400">
            Get in Touch
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
