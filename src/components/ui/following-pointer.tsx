import { motion } from "framer-motion";
import { cn } from "../../utils/cn";
import { useRef, useState } from "react";

export function FollowerPointerCard({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const [pos, setPos] = useState({ x: -999, y: -999 });

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        setIsHover(false);
        setPos({ x: -999, y: -999 });
      }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
    >
      {children}

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-50"
        animate={{
          opacity: isHover ? 1 : 0,
          x: pos.x,
          y: pos.y,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="relative">
          <div className="size-9 rounded-full bg-[#DA291C] shadow-[0_20px_60px_-25px_rgba(218,41,28,0.9)]" />
          {title ? (
            <div className="absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[11px] font-bold text-white/80 backdrop-blur">
              {title}
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  );
}

