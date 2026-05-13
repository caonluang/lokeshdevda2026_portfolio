import { cn } from "../utils/cn";

export function PlasmaBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 -z-10 overflow-hidden bg-[#050505] pointer-events-none",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="plasma-orb plasma-orb-a" />
        <div className="plasma-orb plasma-orb-b" />
        <div className="plasma-orb plasma-orb-c" />
        <div className="plasma-orb plasma-orb-d" />
      </div>

      <div className="absolute inset-0 plasma-vignette" />
      <div className="absolute inset-0 plasma-noise opacity-[0.06] mix-blend-overlay" />
    </div>
  );
}
