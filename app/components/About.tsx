import { siteSettings } from '../config/settings';
import Link from 'next/link';

export default function About() {
  const { colors, stats, techStack } = siteSettings;
  
  return (
    <section id="about" className="py-24 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          About <span style={{ color: colors.primary }}>Me</span>
        </h2>
        <div className="w-20 h-1 mb-12" style={{ backgroundColor: colors.primary }}></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              I&apos;m a passionate developer with expertise in building modern web applications. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me writing blog posts about technology, 
              best practices, and sharing insights from my development journey.
            </p>
            <Link 
              href="/about"
              className="inline-block mt-4 px-6 py-3 border-2 font-semibold rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              Read More About Me →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-black border rounded-lg hover:border-[#00ff88] transition-colors" style={{ borderColor: `${colors.primary}33` }}>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.experience}</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="p-6 bg-black border rounded-lg hover:border-[#00ff88] transition-colors" style={{ borderColor: `${colors.primary}33` }}>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.projects}</div>
              <div className="text-gray-400">Projects Done</div>
            </div>
            <div className="p-6 bg-black border rounded-lg hover:border-[#00ff88] transition-colors" style={{ borderColor: `${colors.primary}33` }}>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.blogPosts}</div>
              <div className="text-gray-400">Blog Posts</div>
            </div>
            <div className="p-6 bg-black border rounded-lg hover:border-[#00ff88] transition-colors" style={{ borderColor: `${colors.primary}33` }}>
              <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.clients}</div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((skill) => (
              <div 
                key={skill}
                className="p-4 bg-black border rounded-lg text-center hover:border-[#00ff88] transition-all"
                style={{ borderColor: `${colors.primary}33` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
