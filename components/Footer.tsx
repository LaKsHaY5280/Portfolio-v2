import Image from "next/image";
import pp from "@/assets/pp.jpeg";

const Footer = () => {
  return (
    <footer className=" sticky bottom-5 w-full cursor-pointer">
      <div className=" flex items-center">
        <Image
          src={pp}
          alt="profile"
          className=" h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
