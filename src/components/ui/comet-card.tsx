import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../utils/cn";

export function CometCard({
  children,
  rotateDepth = 17.5,
  translateDepth = 20,
  className,
}: {
  children: React.ReactNode;
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sX = useSpring(mx, { stiffness: 240, damping: 26 });
  const sY = useSpring(my, { stiffness: 240, damping: 26 });

  const rotateX = useTransform(sY, (v) => v * -rotateDepth);
  const rotateY = useTransform(sX, (v) => v * rotateDepth);
  const translateX = useTransform(sX, (v) => v * translateDepth);
  const translateY = useTransform(sY, (v) => v * translateDepth);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x);
    my.set(y);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("relative", className)}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
