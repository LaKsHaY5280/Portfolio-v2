"use client";

import { motion } from "framer-motion";
import gericht from "@/assets/ssgericht.png";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

const ProjCard = () => {
  return (
    <div className=" flex justify-center items-center flex-col space-y-5 p-20 md:p-44 h-[97vh] w-screen flex-shrink-0 snap-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -300,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image src={gericht} alt="gericht" className=" mt-14 max-w-md" />
      </motion.div>
      <div className=" space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className=" text-xl md:text-4xl font-semibold text-center">
          <span className=" animated_underline">#1 Gericht</span>
        </h4>
        <p className=" max-md:text-xs">
          "Gericht" is a frontend-only web application that serves as a visual
          platform for exploring different recipes. Built with React.js, as
          evident from the GitHub repository, the application presents a clean
          and user-friendly interface where users can browse, search, and view
          details of various recipes. The website's live version showcases a
          range of dishes with their respective images, ingredients, and cooking
          instructions, providing an intuitive and engaging user experience for
          food enthusiasts.
        </p>
        <ul className=" flex justify-around items-center">
          <li>
            <Link href="https://github.com/LaKsHaY5280/gericht" target="blank">
              <Github color="#F7Ab0A" absoluteStrokeWidth />
            </Link>
          </li>
          <li>
            <Link href="https://gerichtlg.vercel.app/" target="blank">
              <ExternalLink color="#F7Ab0A" absoluteStrokeWidth />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjCard;
