import React from 'react';
import { SiFigma, SiOpenai, SiGoogle } from 'react-icons/si';

type Item =
  | { label: string; kind: 'letters'; letters: string }
  | { label: string; kind: 'icon'; Icon: React.ComponentType<{ size?: number; className?: string }> };

const items: Item[] = [
  { label: 'Photoshop', kind: 'letters', letters: 'Ps' },
  { label: 'Illustrator', kind: 'letters', letters: 'Ai' },
  { label: 'Figma', kind: 'icon', Icon: SiFigma },
  { label: 'CorelDRAW', kind: 'letters', letters: 'C' },
  { label: 'ChatGPT', kind: 'icon', Icon: SiOpenai },
  { label: 'Gemini', kind: 'icon', Icon: SiGoogle },
];

function BadgeIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="h-8 w-8 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center">
      {children}
    </span>
  );
}

export function ToolIconRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {items.map((it) => (
        <div
          key={it.label}
          className="inline-flex items-center gap-2 rounded-2xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur transition-colors hover:bg-white/10"
        >
          {it.kind === 'icon' ? (
            <BadgeIcon>
              <it.Icon className="text-white/70" size={18} />
            </BadgeIcon>
          ) : (
            <BadgeIcon>
              <span className="font-black text-[10px] tracking-widest text-white/75">
                {it.letters}
              </span>
            </BadgeIcon>
          )}
          <span className="text-[10px] font-black uppercase tracking-widest text-white/65">
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}

