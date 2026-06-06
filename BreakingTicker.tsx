import { ArticleData } from "@/lib/markdown";

export default function BreakingTicker({ articles }: { articles: ArticleData[] }) {
  return (
    <div className="jticker-wrap">
      <div className="jticker-label">
        <div className="jticker-dot" />
        <span style={{ color: "#fff", fontFamily: "'Rajdhani',sans-serif", fontWeight: 900, fontSize: "18px", letterSpacing: "1.5px", whiteSpace: "nowrap" }}>ब्रेकिंग न्यूज़</span>
      </div>
      <div className="jticker-container">
        <div className="jticker" style={{ animationDuration: Math.max(35, articles.length * 8) + 's' }}>
          {articles.length > 0 ? articles.map((a, i) => (
            <span key={i}>
              {a.title}
              {i < articles.length - 1 && <span className="jticker-sep" />}
            </span>
          )) : "झारखंड और दुनिया भर के ताज़ा समाचार अपडेट के लिए बने रहें।"}
        </div>
      </div>
    </div>
  );
}
