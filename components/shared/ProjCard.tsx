"use client";

import { motion } from "framer-motion";
import gericht from "@/assets/ssgericht.png";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/lib/types/types";
import { urlFor } from "@/lib/utils/configSanity";

type props = {
  project: Project;
  i: number;
};

const ProjCard = ({ project, i }: props) => {
  return (
    <div className=" flex justify-center items-center flex-col space-y-5 p-10 md:p-44 pt-16 md:h-[97vh] w-screen flex-shrink-0 snap-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -300,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className=" max-md:w-full"
      >
        <Image
          src={urlFor(project?.image).url()}
          alt={project?.title}
          className=" mt-14 max-w-md w-full"
          width={500}
          height={500}
        />
      </motion.div>
      <div className=" space-y-4 md:space-y-4 px-0 md:px-10 max-w-6xl">
        <h4 className=" text-xl md:text-4xl font-semibold text-center">
          <span className=" animated_underline">
            #{i + 1} {project.title}
          </span>
        </h4>

        <div className=" flex justify-center items-center w-full space-x-3">
          {project?.technologies?.map((tech) => {
            return (
              <Image
                key={tech._id}
                src={urlFor(tech?.image).url()}
                alt={project?.title}
                className=" max-w-md max-md:w-5 max-md:h-5"
                width={30}
                height={30}
              />
            );
          })}
        </div>

        <p className="max-md:text-xs">
          {project?.summary &&
            project.summary.split(" ").slice(0, 30).join(" ")}
          {project?.summary && project.summary.split(" ").length > 30
            ? "..."
            : ""}
        </p>

        <ul className=" flex justify-around items-center">
          <li>
            <Link href={project?.linkToBuild.toString()} target="blank">
              <Github color="#F7Ab0A" absoluteStrokeWidth />
            </Link>
          </li>
          <li>
            <Link href={project.deployedlink.toString()} target="blank">
              <ExternalLink color="#F7Ab0A" absoluteStrokeWidth />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjCard;
