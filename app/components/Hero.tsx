import { siteSettings } from '../config/settings';

export default function Hero() {
  const { colors, siteInfo } = siteSettings;
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span style={{ color: colors.primary }} className="text-sm font-mono tracking-wider">Hello, I&apos;m</span>
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
              {siteInfo.name}
              <span style={{ color: colors.primary }}>.</span>
            </h1>
            <h2 className="text-3xl lg:text-4xl text-gray-400 font-light">
              {siteInfo.title}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              {siteInfo.description}
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00cc6a] transition-all transform hover:scale-105"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-[#00ff88] text-[#00ff88] font-semibold rounded-lg hover:bg-[#00ff88] hover:text-black transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-linear-to-br from-[#00ff88] to-[#00cc6a] rounded-full opacity-20 blur-3xl absolute"></div>
              <div className="relative w-80 h-80 border-2 rounded-full flex items-center justify-center" style={{ borderColor: colors.primary }}>
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <div style={{ color: colors.primary }} className="font-mono">code & create</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
