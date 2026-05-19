"use client";
import { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, Package, Cpu, Users, Mail, Globe, Send } from "lucide-react";

const projects = [
  {
    title: "Moeland",
    desc: "Brand snack Gen Z yang memadukan taste kekinian dengan strategi pemasaran digital-first.",
    tags: ["Wirausaha", "F&B", "Gen Z"],
    icon: Package,
    status: "Active",
    color: "accent",
  },
  {
    title: "AI Integration Journey",
    desc: "Eksplorasi dan implementasi tools AI (Claude, ChatGPT, Midjourney) untuk mendukung bisnis dan produktivitas.",
    tags: ["AI", "Teknologi", "Otomasi"],
    icon: Cpu,
    status: "Ongoing",
    color: "teal",
  },
  {
    title: "Personal Brand",
    desc: "Membangun identitas digital sebagai entrepreneur muda melalui konten di media sosial.",
    tags: ["Konten", "Branding", "Sosial Media"],
    icon: Sparkles,
    status: "Ongoing",
    color: "accent",
  },
  {
    title: "Komunitas & Sosial",
    desc: "Aktif membantu penyelenggaraan acara komunitas lokal sebagai wujud kepedulian dan kontribusi nyata.",
    tags: ["Volunteer", "Sosial", "Komunitas"],
    icon: Users,
    status: "Active",
    color: "teal",
  },
];

const skills = [
  { name: "Business Strategy", level: 70 },
  { name: "AI & Prompt Eng.", level: 75 },
  { name: "Content Creation", level: 65 },
  { name: "Digital Marketing", level: 60 },
  { name: "Product Thinking", level: 68 },
];

const timeline = [
  { year: "2024", title: "Mulai kuliah", desc: "Masuk dunia perkuliahan dengan semangat dan rasa ingin tahu tinggi." },
  { year: "2024", title: "Kenal AI", desc: "Mulai eksplorasi tools AI dan langsung terapkan ke kehidupan sehari-hari." },
  { year: "2024", title: "Lahirnya Moeland", desc: "Memulai brand snack yang menyasar Gen Z dengan pendekatan modern." },
  { year: "2025", title: "Personal Branding", desc: "Konsisten membangun konten dan identitas digital sebagai founder muda." },
  { year: "2025", title: "Kontribusi sosial", desc: "Aktif di komunitas lokal dan proyek kolaboratif bersama rekan kampus." },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const sections = ["home","about","projects","skills","timeline","contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Journey" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)",
        background: "rgba(20,20,22,0.85)", backdropFilter: "blur(12px)",
        border: "0.5px solid var(--border)",
        borderRadius: "40px", padding: "8px 20px",
        display: "flex", gap: "4px", zIndex: 100,
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)"
      }}>
        {navItems.map(n => (
          <button key={n.id} onClick={() => scrollTo(n.id)} style={{
            background: activeSection === n.id ? "var(--bg-hover)" : "transparent",
            border: activeSection === n.id ? "0.5px solid var(--border-hover)" : "0.5px solid transparent",
            color: activeSection === n.id ? "var(--text)" : "var(--text-muted)",
            borderRadius: "20px", padding: "4px 14px",
            fontSize: "12px", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            transition: "all 0.2s",
            letterSpacing: "0.02em"
          }}>{n.label}</button>
        ))}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px" }}>
        <div style={{ marginBottom: "16px" }} className={loaded ? "animate-fade-up delay-1" : ""}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
            <div className="glow-dot" />
            <span style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Available for collaboration
            </span>
          </div>
        </div>

        <h1 className={`serif ${loaded ? "animate-fade-up delay-2" : ""}`} style={{
          fontSize: "clamp(3rem, 8vw, 5.5rem)", fontWeight: 400,
          lineHeight: 1.05, marginBottom: "8px",
          color: "var(--text)"
        }}>
          Hi, I'm<br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Athif.</span>
        </h1>

        <p className={loaded ? "animate-fade-up delay-3" : ""} style={{
          fontSize: "18px", color: "var(--text-muted)", marginBottom: "32px",
          fontWeight: 300, maxWidth: "480px", lineHeight: 1.6
        }}>
          Young entrepreneur · AI enthusiast · Founder of{" "}
          <span style={{ color: "var(--teal)" }}>Moeland</span>
        </p>

        <div className={loaded ? "animate-fade-up delay-4" : ""} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button onClick={() => scrollTo("projects")} style={{
            background: "var(--accent)", color: "#0c0c0e",
            border: "none", borderRadius: "40px",
            padding: "12px 28px", fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
            cursor: "pointer", display: "flex", alignItems: "center", gap: "6px",
            transition: "opacity 0.2s"
          }} onMouseOver={e => (e.currentTarget.style.opacity = "0.85")}
             onMouseOut={e => (e.currentTarget.style.opacity = "1")}>
            Lihat Projects <ArrowUpRight size={14} />
          </button>
          <button onClick={() => scrollTo("contact")} style={{
            background: "transparent", color: "var(--text)",
            border: "0.5px solid var(--border-hover)", borderRadius: "40px",
            padding: "12px 28px", fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
            cursor: "pointer", transition: "border-color 0.2s"
          }} onMouseOver={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
             onMouseOut={e => (e.currentTarget.style.borderColor = "var(--border-hover)")}>
            Kontak
          </button>
        </div>

        {/* Decorative number */}
        <div className={loaded ? "animate-fade-in delay-5" : ""} style={{
          position: "absolute", right: "5%", top: "35%",
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(6rem, 15vw, 10rem)",
          fontWeight: 800, color: "rgba(255,255,255,0.02)",
          letterSpacing: "-0.05em", userSelect: "none",
          pointerEvents: "none"
        }}>19</div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>01</span>
          <h2 style={{ fontSize: "28px", fontWeight: 700 }}>About</h2>
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
          {[
            { label: "Usia", value: "19 tahun" },
            { label: "Status", value: "Mahasiswa aktif" },
            { label: "Fokus", value: "Bisnis & AI" },
            { label: "Based", value: "Indonesia" },
          ].map(item => (
            <div key={item.label} className="card" style={{ padding: "20px 24px" }}>
              <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</div>
              <div style={{ fontSize: "16px", fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: "28px 32px" }}>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "16px" }}>
            Saya adalah mahasiswa berusia 19 tahun yang passionate di bidang <span style={{ color: "var(--text)" }}>bisnis dan teknologi</span>. Dengan mindset <em style={{ color: "var(--accent)" }}>"try first, learn always"</em>, saya percaya bahwa aksi nyata adalah guru terbaik.
          </p>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.8 }}>
            Saat ini sedang membangun <span style={{ color: "var(--teal)" }}>Moeland</span> sebagai brand snack untuk Gen Z, sambil mengeksplorasi bagaimana AI bisa mempercepat perjalanan entrepreneurship saya.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ paddingBottom: "80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>02</span>
          <h2 style={{ fontSize: "28px", fontWeight: 700 }}>Projects</h2>
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
        </div>

        <div style={{ display: "grid", gap: "12px" }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ padding: "24px 28px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                background: p.color === "accent" ? "var(--accent-dim)" : "var(--teal-dim)",
                border: `0.5px solid ${p.color === "accent" ? "rgba(212,168,67,0.2)" : "rgba(62,207,178,0.2)"}`,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <p.icon size={18} color={p.color === "accent" ? "var(--accent)" : "var(--teal)"} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600 }}>{p.title}</h3>
                  <span style={{
                    fontSize: "10px", padding: "2px 8px", borderRadius: "10px",
                    background: "var(--teal-dim)", color: "var(--teal)",
                    border: "0.5px solid rgba(62,207,178,0.2)", letterSpacing: "0.05em"
                  }}>{p.status}</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "12px", lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ paddingBottom: "80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>03</span>
          <h2 style={{ fontSize: "28px", fontWeight: 700 }}>Skills</h2>
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
        </div>

        <div className="card" style={{ padding: "28px 32px" }}>
          {skills.map((s, i) => (
            <div key={i} style={{ marginBottom: i < skills.length - 1 ? "20px" : 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "13px", fontWeight: 500 }}>{s.name}</span>
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{s.level}%</span>
              </div>
              <div style={{ height: "3px", background: "var(--border)", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: "2px",
                  width: `${s.level}%`,
                  background: i % 2 === 0 ? "var(--accent)" : "var(--teal)",
                  transition: "width 1s ease"
                }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" style={{ paddingBottom: "80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>04</span>
          <h2 style={{ fontSize: "28px", fontWeight: 700 }}>Journey</h2>
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
        </div>

        <div style={{ position: "relative", paddingLeft: "24px" }}>
          <div style={{ position: "absolute", left: "5px", top: 0, bottom: 0, width: "0.5px", background: "var(--border)" }} />
          {timeline.map((t, i) => (
            <div key={i} style={{ position: "relative", marginBottom: "28px", paddingLeft: "24px" }}>
              <div style={{
                position: "absolute", left: "-19px", top: "6px",
                width: "8px", height: "8px", borderRadius: "50%",
                background: i === timeline.length - 1 ? "var(--teal)" : "var(--bg-card)",
                border: `0.5px solid ${i === timeline.length - 1 ? "var(--teal)" : "var(--border-hover)"}`,
              }} />
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                <span style={{ fontSize: "10px", color: "var(--accent)", letterSpacing: "0.1em", fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>{t.year}</span>
                <h3 style={{ fontSize: "14px", fontWeight: 600 }}>{t.title}</h3>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ paddingBottom: "120px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase" }}>05</span>
          <h2 style={{ fontSize: "28px", fontWeight: 700 }}>Contact</h2>
          <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
        </div>

        <div className="card" style={{ padding: "36px 32px", textAlign: "center" }}>
          <h3 className="serif" style={{ fontSize: "32px", fontWeight: 400, marginBottom: "12px", fontStyle: "italic" }}>
            Let's connect.
          </h3>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", marginBottom: "28px" }}>
            Terbuka untuk kolaborasi, diskusi bisnis, atau sekadar ngobrol soal AI & entrepreneurship.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            {[
              { icon: Mail, label: "Email", href: "mailto:athif@email.com" },
              { icon: Globe, label: "Instagram", href: "#" },
              { icon: Send, label: "Twitter / X", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} style={{
                display: "flex", alignItems: "center", gap: "8px",
                background: "var(--bg-hover)", border: "0.5px solid var(--border-hover)",
                borderRadius: "40px", padding: "10px 20px",
                fontSize: "13px", color: "var(--text-muted)",
                textDecoration: "none", transition: "color 0.2s, border-color 0.2s"
              }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)"; }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; }}>
                <Icon size={14} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "0.5px solid var(--border)", padding: "24px 0", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "var(--text-dim)" }}>
          © 2025 Athif · Built with Next.js · Deployed on Vercel
        </p>
      </footer>

    </main>
  );
}
