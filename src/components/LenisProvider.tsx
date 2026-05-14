import React from "react";
import Lenis, { type LenisOptions } from "lenis";

const LenisContext = React.createContext<Lenis | null>(null);

export function LenisProvider({
  children,
  options,
}: {
  children: React.ReactNode;
  options?: LenisOptions;
}) {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);
  const optionsRef = React.useRef<LenisOptions | undefined>(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const instance = new Lenis(optionsRef.current);
    setLenis(instance);

    return () => {
      instance.destroy();
      setLenis(null);
    };
  }, []);

  React.useEffect(() => {
    if (!lenis) return;
    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);
    return () => window.cancelAnimationFrame(rafId);
  }, [lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  return React.useContext(LenisContext);
}
