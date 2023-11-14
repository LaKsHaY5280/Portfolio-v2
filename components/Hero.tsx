"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./shared/BackgroundCircle";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "@/lib/types/types";
import { urlFor } from "@/lib/utils/configSanity";

type props = {
  pageinfo: PageInfo[];
};

const Hero = ({ pageinfo }: props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, my name is ${pageinfo[0]?.name}`,
      "A builder of spectacular websites",
      "Someone who crafts captivating digital experiences",
      "Unleashing Digital Marvels",
    ],
    loop: 5,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-screen flex justify-center items-center flex-col space-y-8 max-md:-mt-5 text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={urlFor(pageinfo[0]?.heroImage).url()}
        alt="profile"
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
        priority
        width={128}
        height={128}
      />
      <div className=" z-30">
        <h2 className=" text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageinfo[0]?.role}
        </h2>
        <h1 className=" text-xl lg:text-5xl font-semibold px-10">
          <span className=" mr-2">
            {text}
            <Cursor cursorColor="#F7Ab0A" />
          </span>
        </h1>
        <div className=" pt-5 z-30">
          <Link href="#about">
            <button className="herobutton">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="herobutton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
