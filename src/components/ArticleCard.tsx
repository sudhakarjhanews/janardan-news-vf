import Link from "next/link";
import { ArticleData } from "@/lib/markdown";

const CC: Record<string, string> = {
  "झारखंड": "#CC0000",
  "राष्ट्रीय": "#b91c1c",
  "तकनीक": "#0369a1",
  "कृषि": "#65a30d",
  "राजनीति": "#8B0000",
  "खेल": "#047857",
  "स्वास्थ्य": "#dc2626",
  "शिक्षा": "#1d4ed8",
  "विचार": "#7c3aed",
  "मनोरंजन": "#ea580c"
};
const cc = (c: string) => CC[c] || "#CC0000";

const Clock = ({ size = 18, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function ArticleCard({ a, size }: { a: ArticleData; size?: "h" }) {
  const today = new Date();
  const isNew = a.date && (() => {
    try {
      const d = new Date(a.date);
      return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
    } catch (e) {
      return false;
    }
  })();

  const dateStr = new Date(a.date).toLocaleDateString('hi-IN');

  if (size === "h") return (
    <Link href={`/${a.slug}`} className="jcard-flat" style={{ textDecoration: 'none' }}>
      <div className="jzoom" style={{ width: "130px", height: "90px", flexShrink: 0, borderRadius: "8px" }}>
        <img src={a.img} alt={a.title} style={{ borderRadius: "8px", objectFit: "cover", width: "100%", height: "100%" }} loading="lazy" />
      </div>
      <div style={{ minWidth: 0 }}>
        <span className="jbadge-flat" style={{ background: cc(a.cat) }}>{a.cat}</span>
        <h4 style={{ fontSize: "18px", fontWeight: 900, lineHeight: 1.35, color: "var(--text-primary)", marginBottom: "8px" }}>{a.title}</h4>
        <div style={{ fontSize: "14px", color: "var(--text-muted)", fontWeight: 700, display: "flex", alignItems: "center", gap: "6px" }}>
          <Clock size={12} /> {dateStr}
        </div>
      </div>
    </Link>
  );

  return (
    <Link href={`/${a.slug}`} className="jcard" style={{ borderLeft: `4px solid ${cc(a.cat)}`, textDecoration: 'none' }}>
      {isNew && <div className="jbadge-new">NEW</div>}
      <div className="jzoom" style={{ height: "210px", borderBottom: "1px solid var(--border-color)" }}>
        <img src={a.img} alt={a.title} loading="lazy" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
      </div>
      <span className="jbadge" style={{ background: cc(a.cat) }}>{a.cat}</span>
      <h3 style={{ padding: "0 14px", fontSize: "21px", fontWeight: 900, lineHeight: 1.35, color: "var(--text-primary)", marginBottom: "10px", flex: 1 }}>{a.title}</h3>
      {a.summary && <p style={{ padding: "0 14px", color: "var(--text-secondary)", fontSize: "17px", lineHeight: 1.6, marginBottom: "12px", fontWeight: 600 }}>{a.summary.slice(0, 95)}…</p>}
      <div style={{ padding: "0 14px 12px", display: "flex", gap: "10px", color: "var(--text-muted)", fontSize: "14px", fontWeight: 700, alignItems: "center" }}>
        <Clock size={13} /><span>{a.rt} मिनट पढ़ने का समय</span>
      </div>
      <div style={{ height: "3px", background: `linear-gradient(90deg,${cc(a.cat)},transparent)`, margin: "0 14px", borderRadius: "2px" }} />
    </Link>
  );
}
