export const Noise = () => (
  <div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.03] noise" />
);

export const AmbientGlow = ({ color }: { color: string }) => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div 
      className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20"
      style={{ backgroundColor: color, transition: 'background-color 1s ease' }}
    />
    <div 
      className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20"
      style={{ backgroundColor: color, transition: 'background-color 1s ease' }}
    />
  </div>
);
