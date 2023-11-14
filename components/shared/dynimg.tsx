import { motion } from "framer-motion";
import { urlFor } from "@/lib/utils/configSanity";

type props = {
  dirl?: boolean;
  skills: any;
};

export default function DynamicMotionImg({ dirl, skills }: props) {
  const screenWidth = window.innerWidth;
  let initialX;

  if (screenWidth <= 400) {
    initialX = 60;
  } else if (screenWidth <= 600) {
    initialX = 100;
  } else if (screenWidth <= 900) {
    initialX = 150;
  } else {
    initialX = 200;
  }

  return (
    <motion.img
      initial={{
        x: dirl ? -initialX || -50 : initialX || 50,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="rounded object-cover filter group-hover:grayscale transition duration-300 ease-in-out flex justify-center items-center"
      src={urlFor(skills?.image).url()}
      alt={skills.title}
      width={50}
      height={50}
    />
  );
}
