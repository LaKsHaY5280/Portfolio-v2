"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import envelop from "@/assets/envelop.png";
import Image from "next/image";

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
        <Link href="#contact">
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
            <Image
              src={envelop}
              alt="envelop"
              className=" h-8 w-8 cursor-pointer mr-2"
            />
            <p className=" max-md:hidden uppercase text-sm text-gray-400">
              Get in Touch
            </p>
          </motion.div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
