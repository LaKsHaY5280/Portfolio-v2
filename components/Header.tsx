"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import envelop from "@/assets/envelop.png";
import Image from "next/image";
import { Social } from "@/lib/types/types";

type props = {
  socials: Social[];
};

const Header = ({ socials }: props) => {
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
          {socials.map((item) => (
            <SocialIcon
              key={item._id}
              url={item.url}
              target="_blank"
              fgColor="gray"
              bgColor="transparent"
            />
          ))}
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
