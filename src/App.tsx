import { useEffect, useRef, useState } from "react";
import { ArrowRight, BriefcaseBusiness, ChevronLeft, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import type { IconType } from "react-icons";
import {
  SiAffinitydesigner,
  SiAffinityphoto,
  SiBehance,
  SiCanva,
  SiCoreldraw,
  SiFigma,
  SiInstagram,
  SiNetflix,
  SiWordpress,
  SiYoutube,
} from "react-icons/si";
import { CategoryGalleryModal, type GalleryCategory } from "./components/CategoryGalleryModal";
import { MagneticButton } from "./components/MagneticButton";

const heroImage =
  "https://res.cloudinary.com/dg9q99hxf/image/upload/q_auto/f_auto/v1778159914/Hero_page_dgxklp.png";
const portrait = "/lokesh-portrait.png";

const portfolioImages = {
  social: [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
  ],
  brand: [
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1600&auto=format&fit=crop",
  ],
  packaging: [
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595642527925-4d41cb781653?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop",
  ],
  ads: [
    "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
  ],
  web: [
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop",
  ],
  lab: [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
  ],
};

const categories: GalleryCategory[] = [
  {
    id: "social",
    name: "Social Media Design",
    subtitle: "Campaign grids, launch posts, reels covers, carousels",
    accent: "#ff5a36",
    images: portfolioImages.social,
  },
  {
    id: "brand",
    name: "Logo & Brand Identity",
    subtitle: "Logo suites, guidelines, typography systems",
    accent: "#7c3aed",
    images: portfolioImages.brand,
  },
  {
    id: "packaging",
    name: "Packaging Design",
    subtitle: "Labels, dielines, mockups, shelf presence",
    accent: "#f5a623",
    images: portfolioImages.packaging,
  },
  {
    id: "ads",
    name: "Advertising & Campaigns",
    subtitle: "Posters, launch banners, festive promotions",
    accent: "#ff2d55",
    images: portfolioImages.ads,
  },
  {
    id: "web",
    name: "UI / Web Design",
    subtitle: "WordPress landing pages, business sites, campaign pages",
    accent: "#00f5ff",
    images: portfolioImages.web,
  },
  {
    id: "lab",
    name: "Creative Lab",
    subtitle: "AI visuals, motion ideas, concept experiments",
    accent: "#ff7b00",
    images: portfolioImages.lab,
  },
];

const categoryLogos: Record<string, { Icon: IconType; label: string; tone: string; partner: string }> = {
  social: { Icon: SiInstagram, label: "Instagram", tone: "#ff4fa3", partner: "Meta-ready campaign grids" },
  brand: { Icon: SiAffinitydesigner, label: "Affinity", tone: "#ff9a24", partner: "Vector logo systems" },
  packaging: { Icon: SiAffinityphoto, label: "Photo", tone: "#31a8ff", partner: "Mockup-ready packaging" },
  ads: { Icon: SiYoutube, label: "YouTube", tone: "#ff0033", partner: "Launch poster campaigns" },
  web: { Icon: SiWordpress, label: "WordPress", tone: "#00f5ff", partner: "Landing page design" },
  lab: { Icon: SiFigma, label: "Figma", tone: "#a259ff", partner: "AI concept boards" },
};

const orbitLogos = [
  { Icon: SiNetflix, label: "Netflix", color: "#e50914" },
  { Icon: SiInstagram, label: "Instagram", color: "#ff4fa3" },
  { Icon: SiYoutube, label: "YouTube", color: "#ff0033" },
  { Icon: SiFigma, label: "Figma", color: "#a259ff" },
  { Icon: SiCanva, label: "Canva", color: "#00c4cc" },
  { Icon: SiBehance, label: "Behance", color: "#1769ff" },
  { Icon: SiCoreldraw, label: "CorelDraw", color: "#67b246" },
];

const tools = [
  { name: "CorelDraw", percent: "92%" },
  { name: "Adobe Photoshop", percent: "88%" },
  { name: "Adobe Illustrator", percent: "85%" },
  { name: "Figma", percent: "81%" },
];

const timeline = [
  { date: "2025 - Present", company: "Graphic360", role: "Graphic Designer" },
  { date: "2024 - 2025", company: "Angel Creation", role: "Graphic Designer" },
  { date: "2023 - 2024", company: "Krishna Printers", role: "Graphic Designer" },
  { date: "2023", company: "Digital Graphics", role: "Graphic Designer" },
  { date: "2022 - 2023", company: "World Book of Star Records", role: "Graphic Designer & Web Developer" },
  { date: "2020 - 2022", company: "Sarvagya Online Studio", role: "Graphic Designer" },
];

const softwarePills = ["Ps", "Ai", "Fg", "Cd", "Wp"];

function AmbientThree() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const count = 160;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i += 1) positions[i] = (Math.random() - 0.5) * 18;
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.04,
        color: 0xff5a36,
        transparent: true,
        opacity: 0.35,
      }),
    );

    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(3.3, 0.8, 12, 80),
      new THREE.MeshBasicMaterial({ color: 0x7c3aed, wireframe: true, transparent: true, opacity: 0.08 }),
    );
    torus.rotation.x = 0.48;

    const ico = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.15, 0),
      new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.08 }),
    );
    ico.position.set(2.2, 1.2, -2);

    scene.add(particles, torus, ico);

    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    let rafId = 0;
    const render = () => {
      particles.rotation.y += 0.0007;
      particles.rotation.x += 0.00025;
      torus.rotation.x += 0.0026;
      torus.rotation.y += 0.004;
      ico.rotation.x += 0.006;
      ico.rotation.y += 0.005;
      ico.position.y = Math.sin(Date.now() * 0.001) * 0.4 + 1.1;
      camera.position.x += (mouseX * 0.45 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 0.45 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="ambient-three" aria-hidden="true" />;
}

export default function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | null>(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const featuredCategory = categories[featuredIndex];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!appRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-seq", {
        y: 38,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((node, index) => {
        gsap.from(node, {
          y: 42,
          autoAlpha: 0,
          duration: 0.88,
          delay: Math.min(index * 0.03, 0.18),
          ease: "power3.out",
          scrollTrigger: { trigger: node, start: "top 82%" },
        });
      });

      if (heroRef.current) {
        gsap.to(".hero-media", {
          yPercent: 12,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        gsap.to(".hero-copy", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".parallax-panel").forEach((node, index) => {
        const amount = index % 2 === 0 ? -28 : 28;
        gsap.to(node, {
          y: amount,
          ease: "none",
          scrollTrigger: {
            trigger: node,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".work-card").forEach((node, index) => {
        gsap.from(node, {
          y: 70,
          rotate: index % 2 === 0 ? -4 : 4,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
          },
        });
      });
    }, appRef);

    const tiltCards = Array.from(document.querySelectorAll<HTMLElement>(".tilt-card"));
    const handleMove = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--rotateX", `${-y * 10}deg`);
      card.style.setProperty("--rotateY", `${x * 12}deg`);
      card.style.setProperty("--glowX", `${(x + 0.5) * 100}%`);
      card.style.setProperty("--glowY", `${(y + 0.5) * 100}%`);
    };
    const handleLeave = (event: MouseEvent) => {
      const card = event.currentTarget as HTMLElement;
      card.style.setProperty("--rotateX", "0deg");
      card.style.setProperty("--rotateY", "0deg");
      card.style.setProperty("--glowX", "50%");
      card.style.setProperty("--glowY", "50%");
    };

    tiltCards.forEach((card) => {
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      tiltCards.forEach((card) => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      });
      ctx.revert();
    };
  }, []);

  return (
    <div ref={appRef} className="portfolio-page">
      <AmbientThree />

      <section ref={heroRef} className="hero-stage">
        <div className="hero-shell">
          <div className="hero-media">
            <img src={heroImage} alt="Lokesh Devda hero concept" />
            <div className="hero-overlay hero-overlay-top" />
            <div className="hero-overlay hero-overlay-bottom" />
          </div>

          <header className="hero-nav hero-seq">
            <div className="brand-mark">Lokesh Devda</div>
            <nav>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#works">Works</a>
              <a href="#contact">Contact</a>
            </nav>
            <a href="#contact" className="menu-pill">
              Hire Me
            </a>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-tag hero-seq">AI + Design Agency Feel</div>
              <h1 className="hero-title hero-seq">
                Visual systems
                <br />
                built to feel
                <br />
                unforgettable.
              </h1>
              <p className="hero-description hero-seq">
                Lokesh Devda is a graphic designer and web developer from Indore creating brand identity, social media, packaging, campaigns, and AI-powered creative systems with premium presentation.
              </p>
              <div className="hero-actions hero-seq">
                <MagneticButton
                  as="a"
                  href="#works"
                  className="cta-primary"
                  strength={0.25}
                >
                  <span>Explore Services</span>
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#contact"
                  className="cta-secondary"
                  strength={0.22}
                >
                  <span>View Pricing Plans</span>
                </MagneticButton>
              </div>

              <div className="hero-stats hero-seq">
                <article className="glass-stat tilt-card">
                  <span>Happy clients</span>
                  <strong>3M+</strong>
                </article>
                <article className="glass-stat tilt-card">
                  <span>ROI Improvement</span>
                  <strong>95%</strong>
                </article>
                <article className="glass-stat tilt-card">
                  <span>Client Retention</span>
                  <strong>88%</strong>
                </article>
              </div>
            </div>

            <aside className="hero-side hero-seq">
              <article className="hero-side-card hero-side-preview tilt-card">
                <div className="mini-card-image">
                  <img src={portrait} alt="Lokesh Devda portrait" />
                </div>
                <div className="mini-card-body">
                  <span>Graphic Designer</span>
                  <strong>230+</strong>
                  <p>Projects built across branding, campaigns, and product visuals.</p>
                </div>
              </article>
              <article className="hero-side-card tilt-card">
                <span>Trusted Partner</span>
                <strong>400+</strong>
                <p>Creative workflows, premium layouts, and AI-assisted speed from concept to delivery.</p>
              </article>
            </aside>
          </div>
        </div>
      </section>

      <section id="about" className="content-wrap section-grid section-grid--intro">
        <article className="panel panel--wide reveal parallax-panel">
          <div className="panel-copy">
            <span className="section-chip">About Me</span>
            <h2>Designer. Strategist. Creative partner.</h2>
            <p>
              I work across logos, social campaigns, packaging systems, print collateral, WordPress landing pages, and AI-assisted creative workflows. The goal is always the same: make the brand feel sharper, clearer, and more premium than before.
            </p>
            <MagneticButton as="a" href="#contact" className="mini-link" strength={0.18}>
              <span>Read More</span>
            </MagneticButton>
          </div>
          <div className="panel-portrait tilt-card">
            <img src={portrait} alt="Lokesh Devda" />
          </div>
        </article>

        <article className="panel panel--metric reveal parallax-panel tilt-card">
          <span className="section-chip">Trusted by 120+ clients</span>
          <p>AI from idea to production in 8-10 weeks with sharp design systems and premium rollout quality.</p>
          <strong>120+</strong>
        </article>
      </section>

      <section id="services" className="content-wrap section-grid section-grid--services">
        <article className="panel panel--section reveal">
          <span className="section-chip">Services</span>
          <h2>End-to-end creative systems.</h2>
          <p>
            From strategy to visuals, I build brand identity, social media design, packaging, launch campaigns, UI screens, and web assets in one cohesive premium language.
          </p>
        </article>

        <article className="service-feature reveal tilt-card">
          <div>
            <span className="feature-index">(01)</span>
            <h3>AI Strategy & Mapping</h3>
            <p>Identify high-impact creative pipelines and define a measurable, repeatable art direction workflow.</p>
          </div>
          <div className="feature-pills">
            <span>Stakeholder discovery</span>
            <span>Value model & KPI definition</span>
            <span>Data readiness assessment</span>
          </div>
        </article>
      </section>

      <section id="works" className="content-wrap works-section">
        <div className="works-hero reveal">
          <div>
            <span className="section-chip">Selected Works</span>
            <h2>Logo-led bento studio.</h2>
          </div>
          <p>
            Real platform cues, brand-system cards, and a cinematic gallery launcher built for fast scanning.
          </p>
        </div>

        <div className="logo-orbit" aria-label="Design platform logos">
          {orbitLogos.map(({ Icon, label, color }, index) => (
            <span
              key={label}
              className="logo-orbit__item"
              style={{ ["--logo-color" as string]: color, ["--logo-order" as string]: index }}
            >
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </span>
          ))}
        </div>

        <div className="project-studio">
          <div className="project-carousel" style={{ ["--featured" as string]: featuredCategory.accent }}>
            <button
              type="button"
              className="project-nav project-nav--prev"
              aria-label="Previous project category"
              onClick={() => setFeaturedIndex((index) => (index - 1 + categories.length) % categories.length)}
            >
              <ChevronLeft size={22} />
            </button>

            <div className="project-carousel-stage" aria-live="polite">
              {categories.map((category, index) => {
                const logo = categoryLogos[category.id];
                const relative = index - featuredIndex;
                const wrapped =
                  relative > categories.length / 2
                    ? relative - categories.length
                    : relative < -categories.length / 2
                      ? relative + categories.length
                      : relative;
                const isActive = wrapped === 0;
                const distance = Math.abs(wrapped);

                return (
                  <button
                    key={category.id}
                    type="button"
                    className={`project-card-3d work-card ${isActive ? "is-active" : ""}`}
                    style={{
                      ["--accent" as string]: category.accent,
                      ["--logo-tone" as string]: logo.tone,
                      ["--x" as string]: `${wrapped * 180}px`,
                      ["--scale" as string]: `${Math.max(0.72, 1 - distance * 0.08)}`,
                      ["--rotate" as string]: `${wrapped * -12}deg`,
                      ["--card-opacity" as string]: `${Math.max(0, 1 - distance * 0.24)}`,
                      ["--card-brightness" as string]: `${Math.max(0.52, 1 - distance * 0.14)}`,
                      ["--card-z" as string]: `${10 - distance}`,
                    }}
                    onClick={() => (isActive ? setActiveCategory(category) : setFeaturedIndex(index))}
                    aria-label={`${isActive ? "Open" : "Focus"} ${category.name} gallery`}
                  >
                    <span className="project-card-logo">
                      <logo.Icon aria-hidden="true" />
                    </span>
                    <span className="project-card-kicker">{logo.label}</span>
                    <strong>{category.name}</strong>
                    <span>{category.subtitle}</span>
                    {isActive ? <em>Click to open gallery</em> : null}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              className="project-nav project-nav--next"
              aria-label="Next project category"
              onClick={() => setFeaturedIndex((index) => (index + 1) % categories.length)}
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="project-bento">
            {categories.map((category, index) => {
              const logo = categoryLogos[category.id];
              return (
                <button
                  key={category.id}
                  type="button"
                  className={`project-bento-card work-card ${index === featuredIndex ? "is-selected" : ""}`}
                  style={{ ["--accent" as string]: category.accent, ["--logo-tone" as string]: logo.tone }}
                  onMouseEnter={() => setFeaturedIndex(index)}
                  onFocus={() => setFeaturedIndex(index)}
                  onClick={() => setActiveCategory(category)}
                >
                  <span className="project-bento-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-bento-logo">
                    <logo.Icon aria-hidden="true" />
                  </span>
                  <strong>{category.name}</strong>
                  <small>{logo.partner}</small>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="content-wrap timeline-wrap">
        <div className="timeline-head reveal">
          <span className="section-chip">Journey</span>
          <h2>Professional evolution.</h2>
        </div>
        <div className="timeline-list">
          {timeline.map((item) => (
            <article key={`${item.company}-${item.date}`} className="timeline-card reveal tilt-card">
              <div className="timeline-date">{item.date}</div>
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-wrap section-grid section-grid--skills">
        <article id="skills" className="panel panel--section reveal">
          <span className="section-chip">Skills</span>
          <h2>Tools for premium production.</h2>
          <p>CorelDraw, Photoshop, Illustrator, Figma, WordPress, AI prompting, and fast production systems that keep design quality high under pressure.</p>
        </article>

        <div className="tool-grid">
          {tools.map((tool) => (
            <article key={tool.name} className="tool-card reveal tilt-card">
              <div className="tool-ring" style={{ ["--percent" as string]: tool.percent }}>
                <span>{tool.percent}</span>
              </div>
              <h3>{tool.name}</h3>
            </article>
          ))}
        </div>

        <div className="software-pills reveal">
          {softwarePills.map((pill) => (
            <span key={pill}>{pill}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="content-wrap contact-wrap reveal">
        <article className="contact-shell tilt-card">
          <div className="contact-copy">
            <span className="section-chip">Contact</span>
            <h2>Let's build something sharp.</h2>
            <p>Available for freelance projects, long-term creative partnerships, and premium visual systems that need both taste and speed.</p>
            <div className="contact-lines">
              <p>
                <Phone size={16} /> +91 6267382299
              </p>
              <p>
                <MapPin size={16} /> Nyay Nagar, Indore
              </p>
              <p>
                <Mail size={16} /> hello@lokeshdevda.com
              </p>
              <p>
                <BriefcaseBusiness size={16} /> Graphic Designer / Web Developer
              </p>
            </div>
          </div>
          <MagneticButton as="a" href="mailto:hello@lokeshdevda.com" className="contact-cta" strength={0.24}>
            <span>Start a Project</span>
            <ArrowRight size={18} />
          </MagneticButton>
        </article>
      </section>

      <CategoryGalleryModal category={activeCategory} onClose={() => setActiveCategory(null)} />
    </div>
  );
}
