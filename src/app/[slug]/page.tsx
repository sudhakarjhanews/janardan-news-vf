import { getAllArticles, getArticleBySlug } from "@/lib/markdown";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const article = getArticleBySlug(slug);

  return {
    title: `${article.title} - जनार्दन न्यूज़`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.img],
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.img],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug: rawSlug } = await params;
  const slug = decodeURIComponent(rawSlug);
  const article = getArticleBySlug(slug);

  const dateStr = new Date(article.date).toLocaleDateString('hi-IN');

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "image": [article.img],
    "datePublished": article.date,
    "dateModified": article.date,
    "author": [{
      "@type": "Person",
      "name": article.author,
    }]
  };

  return (
    <div className="jpage-enter">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "48px 20px" }}>
        <article>
          <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "20px" }}>
            <span className="jbadge-flat" style={{ background: "#CC0000", fontSize: "15px", padding: "8px 16px" }}>{article.cat}</span>
            {article.breaking && <span className="jbadge-live">LIVE</span>}
          </div>
          <h1 style={{ fontSize: "46px", fontWeight: 900, lineHeight: 1.25, color: "var(--text-primary)", marginBottom: "24px", letterSpacing: "-0.02em" }}>{article.title}</h1>
          <div style={{ fontSize: "24px", fontWeight: 700, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "32px", borderLeft: "5px solid #CC0000", paddingLeft: "24px", background: "var(--bg-card)", padding: "20px 24px", borderRadius: "0 12px 12px 0" }}>
            {article.summary}
          </div>
          
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", borderTop: "2px solid var(--border-light)", borderBottom: "2px solid var(--border-light)", marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "52px", height: "52px", background: "linear-gradient(135deg,#0F2557,#1a3a7a)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "19px", color: "var(--text-primary)" }}>{article.author}</div>
                <div style={{ fontSize: "15px", color: "var(--text-muted)", fontWeight: 700, marginTop: "4px" }}>
                  {dateStr} · {article.rt} मिनट पढ़ने का समय
                </div>
              </div>
            </div>
          </div>

          {article.img && (
            <div style={{ marginBottom: "40px", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,.08)" }}>
              <img src={article.img} alt={article.title} style={{ width: "100%", height: "auto", maxHeight: "600px", objectFit: "cover", display: "block" }} />
            </div>
          )}
          
          <div style={{ fontSize: "calc(22px * var(--font-scale))", lineHeight: 1.9, color: "var(--text-primary)", fontWeight: 500, marginBottom: "40px", transition: "font-size .3s" }} dangerouslySetInnerHTML={{ __html: article.body.replace(/\n/g, "<br/>") }} />
          
        </article>
      </div>
    </div>
  );
}
