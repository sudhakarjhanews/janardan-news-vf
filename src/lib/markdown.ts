import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleData {
  slug: string;
  title: string;
  date: string;
  cat: string;
  author: string;
  img: string;
  summary: string;
  rt: number;
  breaking?: boolean;
  feat?: boolean;
  pick?: boolean;
  body: string;
}

export function getArticleSlugs() {
  if (!fs.existsSync(articlesDirectory)) return [];
  return fs.readdirSync(articlesDirectory);
}

export function getArticleBySlug(slug: string): ArticleData {
  const realSlug = decodeURIComponent(slug).replace(/\.md$/, '');
  const fullPath = path.join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title,
    date: data.date instanceof Date ? data.date.toISOString() : data.date,
    cat: data.cat,
    author: data.author,
    img: data.img,
    summary: data.summary,
    rt: data.rt,
    breaking: data.breaking,
    feat: data.feat,
    pick: data.pick,
    body: content,
  };
}

export function getAllArticles(): ArticleData[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
  return articles;
}
