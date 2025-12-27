import { siteSettings } from '../config/settings';
import { blogPosts } from '../data/blog';
import Link from 'next/link';

export default function Blog() {
  const { colors } = siteSettings;
  const featuredPosts = blogPosts.filter(p => p.featured).slice(0, 3);
  
  return (
    <section id="blog" className="py-24 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Latest <span style={{ color: colors.primary }}>Blog Posts</span>
        </h2>
        <div className="w-20 h-1 mb-12" style={{ backgroundColor: colors.primary }}></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredPosts.map((post) => (
            <article 
              key={post.id}
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
                <a href="#" className="hover:underline font-semibold" style={{ color: colors.primary }}>
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border-2 font-semibold rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
