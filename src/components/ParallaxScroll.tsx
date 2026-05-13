import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef, // remove this if your container is not fixed height
    offset: ["start start", "end end"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={containerRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-4 sm:gap-6 lg:gap-10 py-6 sm:py-10 lg:py-24 px-3 sm:px-5 lg:px-10"
      >
        <div className="grid gap-4 sm:gap-6 lg:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/35"
            >
              <img
                src={el}
                className="h-64 sm:h-72 lg:h-80 w-full object-contain object-center rounded-xl !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateSecond }}
              key={"grid-2" + idx}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/35"
            >
              <img
                src={el}
                className="h-64 sm:h-72 lg:h-80 w-full object-contain object-center rounded-xl !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateThird }}
              key={"grid-3" + idx}
              className="overflow-hidden rounded-xl border border-white/10 bg-black/35"
            >
              <img
                src={el}
                className="h-64 sm:h-72 lg:h-80 w-full object-contain object-center rounded-xl !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
