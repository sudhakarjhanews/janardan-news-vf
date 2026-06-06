import { getAllArticles } from "@/lib/markdown";
import HeroSection from "@/components/HeroSection";
import ArticleCard from "@/components/ArticleCard";
import BreakingTicker from "@/components/BreakingTicker";

export default function Home() {
  const arts = getAllArticles();
  
  // Find hero
  const hero = arts.find(a => a.feat) || arts[0];
  const remaining = arts.filter(a => a.slug !== hero?.slug);
  const lat = remaining.slice(0, 4);
  const picks = remaining.filter(a => a.pick).slice(0, 4);

  const today = new Date();
  const isToday = (ds: string) => {
    if (!ds) return false;
    try {
      const d = new Date(ds);
      return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
    } catch (e) {
      return false;
    }
  };

  const todaysArts = arts.filter(a => isToday(a.date) || a.breaking);
  const tickerArts = todaysArts.length > 0 ? todaysArts : arts.slice(0, 5);

  return (
    <div className="jpage-enter">
      <BreakingTicker articles={tickerArts} />
      
      {/* HERO SECTION */}
      <section className="jsr visible" style={{ maxWidth: "1240px", margin: "0 auto", padding: "36px 20px", borderBottom: "1px solid var(--border-color)" }}>
        <div className="jh2col" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "36px" }}>
          {hero && <HeroSection hero={hero} />}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <div className="jsect">संपादक की पसंद</div>
            </div>
            <div style={{ marginBottom: "16px" }}><div className="jrule" /></div>
            {picks.length > 0 ? picks.map(a => <ArticleCard key={a.slug} a={a} size="h" />) : (
              <div style={{ color: "var(--text-muted)", fontWeight: 700, fontSize: "16px", padding: "20px", background: "var(--bg-card)", borderRadius: "8px", border: "1px solid var(--border-color)" }}>
                संपादक की पसंद जल्द ही अपडेट की जाएगी।
              </div>
            )}
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      {lat.length > 0 && (
        <section className="jsr visible" style={{ maxWidth: "1240px", margin: "0 auto", padding: "48px 20px", borderBottom: "1px solid var(--border-color)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <div className="jsect">ताज़ा खबरें</div>
          </div>
          <div className="jrule" />
          <div className="j4col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px" }}>
            {lat.map(a => <ArticleCard key={a.slug} a={a} />)}
          </div>
        </section>
      )}
    </div>
  );
}
