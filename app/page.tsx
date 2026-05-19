"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronDown, Mail, Globe, Send, GitBranch, Sparkles, Package, Cpu, BookOpen, Code, Palette, Gamepad2, TrendingUp } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "pancasila", label: "Values" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

const educationData = [
  {
    period: "SD",
    title: "Masa Awal Eksplorasi",
    color: "#3ecfb2",
    content: "Aktif bermain di luar bersama teman — layangan dan permainan tradisional. Mulai mengenal handphone dan game mobile sejak kelas 4. Jadi salah satu yang pertama mengenalkan Free Fire dan Mobile Legends ke teman-teman.",
  },
  {
    period: "Pesantren",
    title: "Boarding School",
    color: "#d4a843",
    content: "Hidup jauh dari teknologi membentuk kemandirian dan kemampuan adaptasi. Belajar membaca lingkungan sosial secara langsung. Pernah mencoba berjualan — awal mula keberanian mencoba hal baru.",
  },
  {
    period: "SMK",
    title: "DKV — Desain Komunikasi Visual",
    color: "#a78bfa",
    content: "Mulai mengenal dunia desain, visual, kreativitas, dan branding. Fase readaptasi setelah pesantren sekaligus pintu masuk ke dunia digital dan teknologi modern.",
  },
  {
    period: "Kuliah",
    title: "Informatika — Sekarang",
    color: "#f472b6",
    content: "Semakin tertarik pada AI, teknologi, dan bisnis. Membangun Moeland sebagai brand snack Gen Z. Mulai mengeksplorasi bagaimana teknologi bisa dipakai untuk hal yang berdampak.",
  },
];

const technicalSkills = [
  { name: "AI Tools Exploration", level: 75 },
  { name: "Canva & Design Basics", level: 70 },
  { name: "Basic Programming", level: 55 },
  { name: "Content Editing", level: 65 },
  { name: "Branding Basics", level: 68 },
  { name: "Digital Research", level: 72 },
];

const softSkills = ["Adaptability", "Communication", "Creative Thinking", "Self Learning", "Problem Solving", "Team Collaboration"];

const interests = [
  { icon: Cpu, title: "Artificial Intelligence", desc: "Mempelajari AI dan bagaimana teknologi ini bisa membantu kehidupan dan bisnis masa depan.", color: "#3ecfb2" },
  { icon: TrendingUp, title: "Business & Entrepreneurship", desc: "Membangun bisnis dan brand dengan identitas kuat yang relevan untuk anak muda.", color: "#d4a843" },
  { icon: Palette, title: "Branding & Content", desc: "Membangun identitas brand lewat desain, konten, dan media sosial.", color: "#a78bfa" },
  { icon: Code, title: "Technology Exploration", desc: "Mencoba tools dan teknologi baru — selalu penasaran dengan perkembangan digital.", color: "#f472b6" },
  { icon: Gamepad2, title: "Game & Digital World", desc: "Dunia game yang jadi titik awal ketertarikan pada teknologi dan interaksi digital.", color: "#60a5fa" },
];

const projects = [
  { icon: Package, title: "Moeland", desc: "Konsep bisnis makanan modern dengan target anak muda dan fokus pada branding yang kuat dan relevan.", tags: ["F&B", "Branding", "Gen Z"], color: "#d4a843" },
  { icon: Cpu, title: "AI Learning Journey", desc: "Eksplorasi penggunaan AI untuk produktivitas, riset, dan pengembangan ide bisnis secara praktis.", tags: ["AI", "Produktivitas", "Tools"], color: "#3ecfb2" },
  { icon: Sparkles, title: "Personal Branding", desc: "Mengeksplorasi konsep personal branding dengan pendekatan trial-and-error untuk terus berkembang.", tags: ["Branding", "Konten", "Identitas"], color: "#a78bfa" },
];

const pancasilaValues = [
  { sila: "1", title: "Ketuhanan Yang Maha Esa", desc: "Berusaha bersyukur dan menjalankan kewajiban agama dalam keseharian.", color: "#f59e0b" },
  { sila: "2", title: "Kemanusiaan yang Adil dan Beradab", desc: "Belajar menghargai orang lain dan menjaga sikap dalam lingkungan sosial.", color: "#3ecfb2" },
  { sila: "3", title: "Persatuan Indonesia", desc: "Menghargai perbedaan dan membangun hubungan baik lintas latar belakang.", color: "#f472b6" },
  { sila: "4", title: "Kerakyatan", desc: "Mendengarkan pendapat orang lain dan berdiskusi untuk menyelesaikan masalah.", color: "#a78bfa" },
  { sila: "5", title: "Keadilan Sosial", desc: "Percaya setiap orang punya kesempatan yang sama untuk berkembang.", color: "#60a5fa" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [loaded, setLoaded] = useState(false);
  const [activeEdu, setActiveEdu] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const ids = navItems.map(n => n.id);
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const SectionHeader = ({ num, title }: { num: string; title: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
      <span style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "'Syne', sans-serif" }}>{num}</span>
      <h2 style={{ fontSize: "28px", fontWeight: 700 }}>{title}</h2>
      <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
    </div>
  );

  return (
    <main style={{ maxWidth: "740px", margin: "0 auto", padding: "0 24px" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 20, left: "50%", transform: "translateX(-50%)",
        background: "rgba(14,14,16,0.9)", backdropFilter: "blur(16px)",
        border: "0.5px solid var(--border)", borderRadius: "40px",
        padding: "6px 16px", display: "flex", gap: "2px", zIndex: 100,
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)"
      }}>
        {navItems.map(n => (
          <button key={n.id} onClick={() => scrollTo(n.id)} style={{
            background: activeSection === n.id ? "var(--bg-hover)" : "transparent",
            border: activeSection === n.id ? "0.5px solid var(--border-hover)" : "0.5px solid transparent",
            color: activeSection === n.id ? "var(--text)" : "var(--text-muted)",
            borderRadius: "20px", padding: "4px 12px",
            fontSize: "11px", cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s",
            letterSpacing: "0.02em", whiteSpace: "nowrap"
          }}>{n.label}</button>
        ))}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px", position: "relative" }}>
        <div className={loaded ? "animate-fade-up delay-1" : ""} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
          <div className="glow-dot" />
          <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Informatics Student · Indonesia</span>
        </div>

        <h1 className={`serif ${loaded ? "animate-fade-up delay-2" : ""}`} style={{
          fontSize: "clamp(2.8rem, 9vw, 5.5rem)", fontWeight: 400,
          lineHeight: 1.05, marginBottom: "4px", color: "var(--text)"
        }}>
          Athif<br />
          <span style={{ color: "var(--accent)", fontStyle: "italic" }}>Khairullah.</span>
        </h1>

        <p className={loaded ? "animate-fade-up delay-3" : ""} style={{
          fontSize: "16px", color: "var(--text-muted)", margin: "20px 0 12px",
          fontWeight: 300, maxWidth: "500px", lineHeight: 1.7
        }}>
          AI & Business Enthusiast. Suka mencoba hal baru dan percaya bahwa{" "}
          <em style={{ color: "var(--text)", fontStyle: "italic" }}>proses belajar adalah perjalanan</em>, bukan destinasi.
        </p>

        <div className={loaded ? "animate-fade-up delay-4" : ""} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
          <button onClick={() => scrollTo("education")} style={{
            background: "var(--accent)", color: "#0c0c0e", border: "none",
            borderRadius: "40px", padding: "11px 26px", fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif", fontWeight: 500, cursor: "pointer",
            display: "flex", alignItems: "center", gap: "6px", transition: "opacity 0.2s"
          }}>
            Explore My Journey <ArrowUpRight size={13} />
          </button>
          <button onClick={() => scrollTo("contact")} style={{
            background: "transparent", color: "var(--text)",
            border: "0.5px solid var(--border-hover)", borderRadius: "40px",
            padding: "11px 26px", fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif", cursor: "pointer"
          }}>Contact Me</button>
        </div>

        {/* Big decorative bg text */}
        <div style={{
          position: "absolute", right: "-2%", top: "30%",
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(5rem, 18vw, 12rem)",
          fontWeight: 800, color: "rgba(255,255,255,0.018)",
          letterSpacing: "-0.05em", userSelect: "none", pointerEvents: "none", lineHeight: 1
        }}>AK</div>

        <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)" }}>
          <ChevronDown size={18} color="var(--text-dim)" style={{ animation: "fadeUp 1.5s ease infinite alternate" }} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
        <SectionHeader num="01" title="About Me" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
          {[
            { label: "Nama", value: "Athif Khairullah" },
            { label: "Program Studi", value: "Informatika" },
            { label: "Minat Utama", value: "AI & Bisnis" },
            { label: "Prinsip", value: "Coba aja dulu" },
          ].map(item => (
            <div key={item.label} className="card" style={{ padding: "18px 22px" }}>
              <div style={{ fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "5px" }}>{item.label}</div>
              <div style={{ fontSize: "15px", fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div className="card" style={{ padding: "28px 30px" }}>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "14px" }}>
            Saya mahasiswa Informatika dengan minat besar pada <span style={{ color: "var(--text)" }}>teknologi, AI, bisnis, dan branding</span>. Perjalanan hidup saya cukup beragam — dari bermain layangan di SD, pengalaman mondok yang membentuk kemandirian, belajar desain di DKV SMK, hingga sekarang di dunia Informatika.
          </p>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.85 }}>
            Saya percaya proses belajar dan pengalaman hidup membentuk cara berpikir seseorang. Dengan mindset <em style={{ color: "var(--accent)" }}>"coba aja dulu"</em>, saya terus mengeksplorasi hal baru dan belajar dari setiap langkah.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" style={{ paddingBottom: "80px" }}>
        <SectionHeader num="02" title="Education Journey" />
        <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
          {educationData.map((e, i) => (
            <button key={i} onClick={() => setActiveEdu(i)} style={{
              background: activeEdu === i ? "var(--bg-hover)" : "transparent",
              border: `0.5px solid ${activeEdu === i ? e.color : "var(--border)"}`,
              color: activeEdu === i ? "var(--text)" : "var(--text-muted)",
              borderRadius: "20px", padding: "6px 16px", fontSize: "12px",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.2s"
            }}>{e.period}</button>
          ))}
        </div>
        <div className="card" style={{ padding: "28px 30px", minHeight: "160px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: educationData[activeEdu].color, flexShrink: 0 }} />
            <h3 style={{ fontSize: "17px", fontWeight: 600 }}>{educationData[activeEdu].title}</h3>
            <span style={{ fontSize: "11px", color: educationData[activeEdu].color, fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>{educationData[activeEdu].period}</span>
          </div>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.85 }}>{educationData[activeEdu].content}</p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ paddingBottom: "80px" }}>
        <SectionHeader num="03" title="Skills" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <div className="card" style={{ padding: "24px 26px" }}>
            <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>Technical</div>
            {technicalSkills.map((s, i) => (
              <div key={i} style={{ marginBottom: i < technicalSkills.length - 1 ? "16px" : 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 400 }}>{s.name}</span>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{s.level}%</span>
                </div>
                <div style={{ height: "2px", background: "var(--border)", borderRadius: "2px" }}>
                  <div style={{ height: "100%", width: `${s.level}%`, background: i % 2 === 0 ? "var(--accent)" : "var(--teal)", borderRadius: "2px" }} />
                </div>
              </div>
            ))}
          </div>
          <div className="card" style={{ padding: "24px 26px" }}>
            <div style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "20px" }}>Soft Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {softSkills.map((s, i) => (
                <span key={i} style={{
                  fontSize: "12px", padding: "5px 12px", borderRadius: "20px",
                  border: "0.5px solid var(--border-hover)", color: "var(--text-muted)",
                  background: "var(--bg)"
                }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section id="interests" style={{ paddingBottom: "80px" }}>
        <SectionHeader num="04" title="Interests & Passion" />
        <div style={{ display: "grid", gap: "10px" }}>
          {interests.map((item, i) => (
            <div key={i} className="card" style={{ padding: "20px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
                background: `${item.color}18`, border: `0.5px solid ${item.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <item.icon size={16} color={item.color} />
              </div>
              <div>
                <div style={{ fontSize: "14px", fontWeight: 600, marginBottom: "4px" }}>{item.title}</div>
                <div style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ paddingBottom: "80px" }}>
        <SectionHeader num="05" title="Projects" />
        <div style={{ display: "grid", gap: "12px" }}>
          {projects.map((p, i) => (
            <div key={i} className="card" style={{ padding: "24px 28px", display: "flex", gap: "18px" }}>
              <div style={{
                width: "42px", height: "42px", borderRadius: "11px", flexShrink: 0,
                background: `${p.color}18`, border: `0.5px solid ${p.color}30`,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <p.icon size={17} color={p.color} />
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
                  <h3 style={{ fontSize: "15px", fontWeight: 600 }}>{p.title}</h3>
                  <span style={{ fontSize: "9px", padding: "2px 7px", borderRadius: "8px", background: "var(--teal-dim)", color: "var(--teal)", border: "0.5px solid rgba(62,207,178,0.2)" }}>Active</span>
                </div>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "10px", lineHeight: 1.65 }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "6px" }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PANCASILA */}
      <section id="pancasila" style={{ paddingBottom: "80px" }}>
        <SectionHeader num="06" title="Nilai Pancasila" />
        <div style={{ display: "grid", gap: "10px" }}>
          {pancasilaValues.map((v, i) => (
            <div key={i} className="card" style={{ padding: "18px 24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0,
                background: `${v.color}18`, border: `0.5px solid ${v.color}40`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "12px", fontWeight: 700, color: v.color,
                fontFamily: "'Syne', sans-serif"
              }}>{v.sila}</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 600, marginBottom: "3px" }}>{v.title}</div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.65 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FUTURE GOALS */}
      <section id="goals" style={{ paddingBottom: "80px" }}>
        <SectionHeader num="07" title="Future Goals" />
        <div className="card" style={{ padding: "36px 32px", textAlign: "center" }}>
          <div style={{ fontSize: "32px", marginBottom: "20px" }}>🎯</div>
          <h3 className="serif" style={{ fontSize: "26px", fontWeight: 400, fontStyle: "italic", marginBottom: "16px", color: "var(--text)" }}>
            Menggabungkan teknologi,<br />AI, dan bisnis.
          </h3>
          <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.85, maxWidth: "480px", margin: "0 auto" }}>
            Ingin menjadi seseorang yang mampu memanfaatkan teknologi untuk membangun sesuatu yang berdampak positif bagi banyak orang. Terus berkembang sebagai pribadi yang kreatif, adaptif, dan relevan dengan perkembangan zaman.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ paddingBottom: "120px" }}>
        <SectionHeader num="08" title="Contact" />
        <div className="card" style={{ padding: "36px 32px", textAlign: "center" }}>
          <h3 className="serif" style={{ fontSize: "28px", fontWeight: 400, fontStyle: "italic", marginBottom: "10px" }}>Let's connect.</h3>
          <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "28px" }}>
            Terbuka untuk kolaborasi, diskusi bisnis, atau ngobrol soal AI & tech.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
            {[
              { icon: Mail, label: "Email" },
              { icon: Globe, label: "Instagram" },
              { icon: GitBranch, label: "GitHub" },
              { icon: Send, label: "LinkedIn" },
            ].map(({ icon: Icon, label }) => (
              <a key={label} href="#" style={{
                display: "flex", alignItems: "center", gap: "7px",
                background: "var(--bg-hover)", border: "0.5px solid var(--border-hover)",
                borderRadius: "40px", padding: "9px 18px",
                fontSize: "12px", color: "var(--text-muted)", textDecoration: "none",
                transition: "color 0.2s"
              }}>
                <Icon size={13} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "0.5px solid var(--border)", padding: "24px 0", textAlign: "center" }}>
        <p style={{ fontSize: "11px", color: "var(--text-dim)" }}>© 2025 Athif Khairullah · Built with Next.js · Deployed on Vercel</p>
      </footer>
    </main>
  );
}
