import { FollowerPointerCard } from "./ui/following-pointer";

const blogContent = {
  author: "Lokesh Devda",
  date: "Portfolio Update",
  title: "About Me (Pointer Card)",
  description:
    "Pointer follow + premium card hover. Is component ko aap apne about highlights, case study, ya featured story ke liye use kar sakte ho.",
  image:
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
  authorAvatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=256&auto=format&fit=crop",
};

function TitleComponent({ title, avatar }: { title: string; avatar: string }) {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={avatar}
        height={20}
        width={20}
        alt="avatar"
        className="rounded-full border-2 border-white/30"
        loading="lazy"
      />
      <p className="text-white/80 text-xs font-bold uppercase tracking-widest">
        {title}
      </p>
    </div>
  );
}

export function FollowingPointerSection() {
  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 md:p-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <p className="text-[#00ff88] tracking-[0.3em] text-xs font-bold uppercase mb-4">
              About Me
            </p>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Following Pointer Card
            </h3>
            <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed">
              Card ke andar cursor move karo — pointer follow karega. Hero ke
              baad wale sections me yeh effect bahut premium feel deta hai.
            </p>
          </div>

          <div className="w-full max-w-[360px]">
            <FollowerPointerCard
              title={
                <TitleComponent
                  title={blogContent.author}
                  avatar={blogContent.authorAvatar}
                />
              }
            >
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-200 hover:shadow-2xl">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                  <img
                    src={blogContent.image}
                    alt="thumbnail"
                    className="h-full w-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h2 className="my-4 text-lg font-bold text-white">
                    {blogContent.title}
                  </h2>
                  <p className="my-4 text-sm font-normal text-white/50">
                    {blogContent.description}
                  </p>
                  <div className="mt-10 flex flex-row items-center justify-between">
                    <span className="text-xs text-white/40 font-bold uppercase tracking-widest">
                      {blogContent.date}
                    </span>
                    <div className="relative z-10 block rounded-xl bg-white/10 px-6 py-2 text-xs font-black uppercase tracking-widest text-white">
                      Read More
                    </div>
                  </div>
                </div>
              </div>
            </FollowerPointerCard>
          </div>
        </div>
      </div>
    </section>
  );
}

