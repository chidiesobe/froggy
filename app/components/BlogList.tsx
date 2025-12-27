'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
}

interface BlogListProps {
  posts: BlogPost[];
  colors: {
    primary: string;
    backgroundSecondary: string;
  };
  postsPerPage: number;
}

export default function BlogList({ posts, colors, postsPerPage }: BlogListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentPosts.map((post) => (
          <article 
            key={post.slug}
            className="group bg-black rounded-xl overflow-hidden border hover:border-[#00ff88] transition-all"
            style={{ borderColor: `${colors.primary}1A` }}
          >
            <div className="h-48 bg-gradient-to-br from-black to-[#00ff88]/20 flex items-center justify-center">
              <div className="text-6xl">{post.image}</div>
            </div>
            <div className="p-6">
              <div className="text-sm mb-2 font-mono" style={{ color: colors.primary }}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {post.excerpt}
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {post.tags.map((tag: string) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full" 
                    style={{ backgroundColor: `${colors.primary}1A`, color: colors.primary }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={`/blog/${post.slug}`} className="hover:underline font-semibold" style={{ color: colors.primary }}>
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              borderColor: colors.primary, 
              color: colors.primary,
              backgroundColor: currentPage === 1 ? 'transparent' : colors.backgroundSecondary
            }}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="px-4 py-2 rounded border"
              style={{ 
                borderColor: colors.primary,
                backgroundColor: currentPage === page ? colors.primary : colors.backgroundSecondary,
                color: currentPage === page ? 'black' : colors.primary
              }}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded border disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ 
              borderColor: colors.primary,
              color: colors.primary,
              backgroundColor: currentPage === totalPages ? 'transparent' : colors.backgroundSecondary
            }}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
