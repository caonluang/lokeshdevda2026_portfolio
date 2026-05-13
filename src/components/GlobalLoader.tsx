import { AnimatePresence, motion } from "framer-motion";

export function GlobalLoader({
  isDone,
  label = "Loading assets…",
}: {
  isDone: boolean;
  label?: string;
}) {
  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 z-[9998] grid place-items-center bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="w-[min(980px,92vw)]">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-xs font-black uppercase tracking-[0.35em] text-white/70">
                {label}
              </div>
              <div className="h-2 w-24 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-1/2 animate-[loader-bar_1.1s_ease-in-out_infinite] bg-[#00ff88]/70" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
              <div className="skeleton-tile col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[320px] sm:min-h-[360px] md:min-h-[460px] rounded-2xl sm:rounded-3xl" />
              <div className="skeleton-tile col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[320px] sm:min-h-[360px] md:min-h-[460px] rounded-2xl sm:rounded-3xl" />
              <div className="skeleton-tile col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] rounded-2xl sm:rounded-3xl" />
              <div className="skeleton-tile col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] rounded-2xl sm:rounded-3xl" />
              <div className="skeleton-tile col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px] rounded-2xl sm:rounded-3xl" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
