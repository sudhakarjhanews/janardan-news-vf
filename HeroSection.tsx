import Link from "next/link";
import { ArticleData } from "@/lib/markdown";

const Clock = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function HeroSection({ hero }: { hero: ArticleData }) {
  if (!hero) return null;
  const isBreaking = hero.breaking;
  const dateStr = new Date(hero.date).toLocaleDateString('hi-IN');

  return (
    <Link href={`/${hero.slug}`} className="jcard" style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: "none", borderLeft: "none", textDecoration: 'none' }}>
      <div className="jzoom" style={{ height: "520px", background: "#000" }}>
        <img src={hero.img} alt={hero.title} style={{ opacity: .85, objectFit: "cover", width: "100%", height: "100%" }} loading="eager" />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,.97),rgba(0,0,0,.7) 50%,rgba(0,0,0,.2) 80%,transparent)", padding: "40px" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
          <span className="jbadge-flat" style={{ background: "#CC0000", fontSize: "15px", padding: "6px 14px" }}>{hero.cat}</span>
          {isBreaking && <span className="jbadge-live">LIVE</span>}
        </div>
        <h1 style={{ fontSize: "38px", fontWeight: 900, color: "#fff", lineHeight: 1.3, marginBottom: "14px", letterSpacing: "-0.02em", fontFamily: "'Noto Serif Devanagari', serif" }}>{hero.title}</h1>
        <p style={{ color: "rgba(255,255,255,.9)", fontSize: "20px", lineHeight: 1.6, marginBottom: "16px", fontWeight: 600 }}>{(hero.summary || "").slice(0, 140)}…</p>
        <div style={{ display: "flex", gap: "18px", fontSize: "15px", fontWeight: 800 }}>
          <span style={{ color: "#FF9999" }}>{hero.author}</span>
          <span style={{ color: "rgba(255,255,255,.7)", display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock size={14} /> {dateStr}
          </span>
        </div>
      </div>
    </Link>
  );
}
