"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./shared/BackgroundCircle";
import Image from "next/image";
import pp from "@/assets/pp.jpeg";
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Lakshay Goyal",
      "A builder of spectacular websites",
      "Someone who crafts captivating digital experiences",
      "Unleashing Digital Marvels",
    ],
    loop: 5,
    delaySpeed: 2000,
  });

  return (
    <div className=" h-screen flex justify-center items-center flex-col space-y-8 text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={pp}
        alt="profile"
        className=" relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className=" z-30">
        <h2 className="  text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          SoftWare Engineer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold px-10">
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
