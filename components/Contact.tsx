"use client";

import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactForm from "./shared/ContactForm";
import { PageInfo } from "@/lib/types/types";
import { urlFor } from "@/lib/utils/configSanity";

type props = {
  pageinfo: PageInfo[];
};

const Contact = ({ pageinfo }: props) => {
  return (
    <motion.div
      className=" relative flex justify-center items-center max-md:flex-col max-md:text-center max-w-7xl px-10 mx-auto overflow-hidden z-0 h-screen"
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
      <h3 className=" absolute top-24 tracking-[20px] text-gray-500 text-2xl uppercase ">
        Contact me
      </h3>
      <div className=" flex flex-col space-y-10 mt-20">
        <h4 className=" text-xl md:text-4xl font-semibold text-center">
          <span className=" animated_underline">
            Intrested in building something extraordinary
          </span>
        </h4>
        <div className=" space-y-10 text-lg">
          <div className=" flex justify-center items-center space-x-5">
            <PhoneIcon className=" text-secondary h-7 w-7 animate-pulse" />
            <p className=" md:text-2xl">+91 {pageinfo[0]?.phoneNumber}</p>
          </div>
          <div className=" flex justify-center items-center space-x-5">
            <EnvelopeIcon className=" text-secondary h-7 w-7 animate-pulse" />
            <p className=" md:text-2xl"> {pageinfo[0]?.email}</p>
          </div>
          <div className=" flex justify-center items-center space-x-5">
            <MapPinIcon className=" text-secondary h-7 w-7 animate-pulse" />
            <p className=" md:text-2xl"> {pageinfo[0]?.address}</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
