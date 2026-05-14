import { CometCard } from "./ui/comet-card";

export function CometCardSection() {
  return (
    <section className="px-6 md:px-20 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-3xl p-6 md:p-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-[#00ff88] tracking-[0.3em] text-xs font-bold uppercase mb-4">
                ID Card
              </p>
              <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
                Premium Comet Card
              </h3>
              <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed">
                Hero ke baad yeh ID-card style section — click karke aap apne
                actual project images / invite details swap kar sakte ho.
              </p>
            </div>

            <CometCard className="w-full max-w-[360px]">
              <button
                type="button"
                className="flex w-full cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                      alt="Invite background"
                      src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop"
                      style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                  <div className="text-xs">Comet Invitation</div>
                  <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
                </div>
              </button>
            </CometCard>
          </div>
        </div>
      </div>
    </section>
  );
}
