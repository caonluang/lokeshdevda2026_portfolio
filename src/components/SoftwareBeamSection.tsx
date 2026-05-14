import React, { useRef } from "react";
import { 
  SiFigma, 
  SiOpenai,
  SiNotion,
  SiWhatsapp,
} from "react-icons/si";
import { AnimatedBeam } from "./ui/animated-beam";
import { RevealText } from "./RevealText";
import { cn } from "../utils/cn";

const Circle = React.forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-white/10 bg-black p-3 shadow-[0_0_20px_-12px_rgba(255,255,255,0.8)] transition-transform hover:scale-110",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export const SoftwareBeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 px-6 md:px-20 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 text-white">
          <RevealText text="My Software Stack" />
        </h2>
        <p className="text-white/50 text-sm md:text-base uppercase tracking-widest font-bold">
          Powered by AI & Modern Creative Tools
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-10 backdrop-blur-sm"
      >
        <div className="flex size-full max-h-[300px] max-w-2xl flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref} className="text-[#31A8FF] font-black text-xl">Ps</Circle>
            <Circle ref={div5Ref} className="text-[#FF9A00] font-black text-xl">Ai</Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref} className="text-[#CF96FD] font-black text-xl">Ae</Circle>
            <Circle ref={div4Ref} className="size-20 bg-white p-4">
              <SiOpenai className="text-black size-full" />
            </Circle>
            <Circle ref={div6Ref}>
              <SiFigma className="text-white size-full" />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <SiNotion className="text-white size-full" />
            </Circle>
            <Circle ref={div7Ref}>
              <SiWhatsapp className="text-[#25D366] size-full" />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
    </section>
  );
};
