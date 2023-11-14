import dynamic from "next/dynamic";
import { Skill } from "@/lib/types/types";

const DynamicMotionImg = dynamic(() => import("./dynimg"), {
  ssr: false,
});

type prop = {
  dirl?: boolean;
  skills: Skill;
};

const Skilled = ({ dirl, skills }: prop) => {
  return (
    <div className="group relative cursor-pointer flex justify-center items-center">
      <DynamicMotionImg dirl={dirl} skills={skills} />

      <div className="absolute opacity-0 w-full h-full group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/70 xl:w-20 xl:h-20 rounded">
        <div className="flex justify-center items-center h-full">
          <p className="md:text-3xl font-bold text-black opacity-100">
            {skills?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skilled;
