import { getPostBySlug, getAllPosts } from '../../lib/markdown';
import { siteSettings } from '../../config/settings';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const { colors } = siteSettings;

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition-opacity"
          style={{ color: colors.primary }}
        >
          ← Back to Blog
        </Link>

        {/* Post Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-gray-400">
            <span>{post.author}</span>
            <span>•</span>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
          </div>

          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 rounded-full text-sm"
                style={{ backgroundColor: `${colors.primary}1A`, color: colors.primary }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Post Content */}
        <div 
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white 
            prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-4
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-3 prose-h2:mt-8
            prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-2 prose-h3:mt-6
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:p-4 prose-pre:rounded-lg
            prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic
            prose-ul:list-disc prose-ul:pl-6
            prose-ol:list-decimal prose-ol:pl-6
            prose-li:text-gray-300"
          style={{
            ['--tw-prose-links' as any]: colors.primary,
            ['--tw-prose-quote-borders' as any]: colors.primary,
            ['--tw-prose-pre-border' as any]: `${colors.primary}33`,
          }}
        >
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: `${colors.primary}33` }}>
          <Link 
            href="/blog"
            className="inline-block px-8 py-3 border-2 font-semibold rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}
