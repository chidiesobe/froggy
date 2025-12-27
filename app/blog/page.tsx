import { siteSettings } from '../config/settings';
import { getAllPosts } from '../lib/markdown';
import Link from 'next/link';
import BlogList from '../components/BlogList';

export default function BlogPage() {
  const { colors, pagination } = siteSettings;
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
          style={{ color: colors.primary }}
        >
          ← Back to Home
        </Link>

        <h1 className="text-5xl font-bold mb-4">
          All <span style={{ color: colors.primary }}>Blog Posts</span>
        </h1>
        <div className="w-20 h-1 mb-12" style={{ backgroundColor: colors.primary }}></div>

        <BlogList posts={allPosts} colors={colors} postsPerPage={pagination.postsPerPage} />
      </div>
    </div>
  );
}
