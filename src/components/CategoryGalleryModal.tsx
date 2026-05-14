import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { ParallaxScroll } from "./ParallaxScroll";
import { cn } from "../utils/cn";

export type GalleryCategory = {
  id: string;
  name: string;
  subtitle?: string;
  accent?: string;
  images: string[];
};

export function CategoryGalleryModal({
  category,
  onClose,
}: {
  category: GalleryCategory | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence mode="wait">
      {category && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
          >
            <div
              className="h-full w-full overflow-y-auto"
              data-lenis-prevent
              style={{ overscrollBehavior: "contain" }}
            >
              <div className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4">
                  <div className="min-w-0">
                    <div className="text-[10px] font-black uppercase tracking-[0.35em] text-white/60">
                      Selected Works
                    </div>
                    <div className="mt-1 truncate text-xl font-black uppercase tracking-tight text-white">
                      {category.name}
                    </div>
                    {category.subtitle ? (
                      <div className="mt-1 text-xs font-medium text-white/45">
                        {category.subtitle}
                      </div>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-white/80 transition hover:bg-white/10 sm:px-4 sm:text-xs"
                    aria-label="Close gallery"
                  >
                    <X size={16} />
                    Close
                  </button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-6xl px-3 py-4 sm:px-5 sm:py-8 lg:py-10">
                <div
                  className={cn(
                    "rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl sm:rounded-3xl",
                  )}
                >
                  <ParallaxScroll
                    images={category.images}
                    className="h-[68vh] rounded-2xl no-scrollbar sm:h-[72vh] sm:rounded-3xl"
                  />
                </div>
              </div>

              <div className="sticky bottom-0 z-50 border-t border-white/10 bg-black/55 backdrop-blur-xl">
                <div className="mx-auto w-full max-w-6xl px-5 py-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full rounded-2xl bg-[#DA291C] py-4 text-sm font-black uppercase tracking-widest text-white shadow-[0_20px_60px_-20px_rgba(218,41,28,0.6)] transition hover:brightness-110"
                  >
                    Close Gallery
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
