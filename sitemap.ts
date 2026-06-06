import { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/markdown';

const categorySlugs = [
  "jharkhand",
  "national",
  "politics",
  "tech",
  "agriculture",
  "health",
  "education",
  "sports",
  "opinion",
  "entertainment"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://janardannews.com";
  
  const articles = getAllArticles();
  
  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'never' as const,
    priority: 0.8,
  }));
  
  const categoryUrls = categorySlugs.map((slug) => ({
    url: `${baseUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...categoryUrls,
    ...articleUrls,
  ];
}
