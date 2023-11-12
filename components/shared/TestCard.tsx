"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const TestCard = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll();

  const y = useTransform(
    scrollY,
    [0, targetRef.current?.offsetHeight || 1],
    ["1%", "-95%"]
  );
  console.log(scrollYProgress);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center ">
        <motion.div
          style={{ transform: y }}
          className="flex gap-4 duration-200"
        >
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default TestCard;

type CardType = {
  url: string | null;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "",
    title: "Title 1",
    id: 1,
  },
  {
    url: "",
    title: "Title 2",
    id: 2,
  },
  {
    url: "",
    title: "Title 3",
    id: 3,
  },
  {
    url: "",
    title: "Title 4",
    id: 4,
  },
  {
    url: "",
    title: "Title 5",
    id: 5,
  },
  {
    url: "",
    title: "Title 6",
    id: 6,
  },
  {
    url: "",
    title: "Title 7",
    id: 7,
  },
];
