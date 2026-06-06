import { getAllArticles } from "@/lib/markdown";
import ArticleCard from "@/components/ArticleCard";

const categoryMap: Record<string, string> = {
  "jharkhand": "झारखंड",
  "national": "राष्ट्रीय",
  "politics": "राजनीति",
  "tech": "तकनीक",
  "agriculture": "कृषि",
  "health": "स्वास्थ्य",
  "education": "शिक्षा",
  "sports": "खेल",
  "opinion": "विचार",
  "entertainment": "मनोरंजन",
};

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const hindiCat = categoryMap[slug] || slug;
  const arts = getAllArticles().filter(a => a.cat === hindiCat);

  return (
    <div className="jpage-enter" style={{ maxWidth: "1240px", margin: "0 auto", padding: "48px 20px", minHeight: "60vh" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: 900, color: "var(--navy)", margin: 0 }}>{hindiCat}</h1>
        <span style={{ background: "#CC0000", color: "#fff", padding: "4px 12px", borderRadius: "20px", fontSize: "14px", fontWeight: 800, fontFamily: "'Rajdhani',sans-serif" }}>श्रेणी</span>
      </div>
      <div className="jrule" />
      {arts.length > 0 ? (
        <div className="j4col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "28px", marginTop: "32px" }}>
          {arts.map(a => <ArticleCard key={a.slug} a={a} />)}
        </div>
      ) : (
        <div style={{ textAlign: "center", padding: "80px 20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border-color)", marginTop: "32px" }}>
          <div style={{ fontSize: "64px", marginBottom: "20px" }}>📰</div>
          <h2 style={{ fontSize: "28px", fontWeight: 900, color: "var(--navy)", marginBottom: "12px" }}>इस श्रेणी में अभी कोई खबर नहीं है</h2>
          <p style={{ fontSize: "19px", color: "var(--text-muted)", fontWeight: 600 }}>कृपया ताज़ा अपडेट के लिए प्रतीक्षा करें।</p>
        </div>
      )}
    </div>
  );
}
