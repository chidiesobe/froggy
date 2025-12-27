import { siteSettings } from '../config/settings';
import { projects } from '../data/projects';
import Link from 'next/link';

export default function Portfolio() {
  const { colors } = siteSettings;
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Featured <span style={{ color: colors.primary }}>Projects</span>
        </h2>
        <div className="w-20 h-1 mb-12" style={{ backgroundColor: colors.primary }}></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              className="group rounded-xl overflow-hidden border hover:border-[#00ff88] transition-all hover:transform hover:scale-105"
              style={{ backgroundColor: colors.backgroundSecondary, borderColor: `${colors.primary}1A` }}
            >
              <div className="h-48 bg-gradient-to-br from-[#00ff88]/20 to-black flex items-center justify-center">
                <div className="text-6xl">{project.image}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00ff88] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full" 
                      style={{ backgroundColor: `${colors.primary}1A`, color: colors.primary }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="hover:underline font-semibold" style={{ color: colors.primary }}>
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 border-2 font-semibold rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
            style={{ borderColor: colors.primary, color: colors.primary }}
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
