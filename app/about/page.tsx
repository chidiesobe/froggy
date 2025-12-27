import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import CVViewer from '../components/CVViewer';
import { siteSettings } from '../config/settings';

export default function AboutPage() {
  const { colors, stats, techStack, about } = siteSettings;

  return (
    <div className="min-h-screen bg-black text-white py-24 px-6">
      <Navigation />
      <div className="max-w-4xl mx-auto mb-24">
        {/* Header */}
        <h1 className="text-5xl font-bold mb-4">
          About <span style={{ color: colors.primary }}>Me</span>
        </h1>
        <div className="w-20 h-1 mb-12" style={{ backgroundColor: colors.primary }}></div>

        {/* Full Bio */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
            {about.fullBio}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-black border rounded-lg text-center" style={{ borderColor: `${colors.primary}33` }}>
            <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.experience}</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="p-6 bg-black border rounded-lg text-center" style={{ borderColor: `${colors.primary}33` }}>
            <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.projects}</div>
            <div className="text-gray-400">Projects Done</div>
          </div>
          <div className="p-6 bg-black border rounded-lg text-center" style={{ borderColor: `${colors.primary}33` }}>
            <div className="text-4xl font-bold mb-2" style={{ color: colors.primary }}>{stats.clients}</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
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

        {/* CV Viewer */}
        <CVViewer />
      </div>
      <Footer />
    </div>
  );
}
