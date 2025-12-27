export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  featured: boolean;
  content?: string;
}

// This file is now just for TypeScript types
// Blog posts are loaded from markdown files in /content/blog/
// See /app/lib/markdown.ts for data loading
export const blogPosts: BlogPost[] = [];
