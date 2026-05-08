import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface DockItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface DockProps {
  items: DockItem[];
  className?: string;
}

const DOCK_SIZE = 52;
const MAGNIFIED_SIZE = 80;
const RANGE = 100; // px from center to start magnifying

const DockIcon: React.FC<{ item: DockItem; mouseX: ReturnType<typeof useMotionValue> }> = ({
  item,
  mouseX,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const distance = useMotionValue(Infinity);

  const widthTransform = useTransform(distance, [-RANGE, 0, RANGE], [DOCK_SIZE, MAGNIFIED_SIZE, DOCK_SIZE]);
  const sizeSpring = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  React.useEffect(() => {
    return mouseX.on('change', (x) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      distance.set(x - centerX);
    });
  }, [mouseX, distance]);

  const Tag = item.href ? 'a' : 'button';

  return (
    <motion.div ref={ref} style={{ width: sizeSpring, height: sizeSpring }} className="flex items-center justify-center">
      <Tag
        href={item.href}
        onClick={item.onClick}
        className="relative flex items-center justify-center w-full h-full rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 transition-colors group cursor-none"
        title={item.label}
      >
        <span className="text-white text-2xl">{item.icon}</span>
        {/* Tooltip */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-white/10">
          {item.label}
        </span>
      </Tag>
    </motion.div>
  );
};

export const Dock: React.FC<DockProps> = ({ items, className = '' }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`flex items-end gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ${className}`}
    >
      {items.map((item, i) => (
        <DockIcon key={i} item={item} mouseX={mouseX} />
      ))}
    </motion.div>
  );
};
