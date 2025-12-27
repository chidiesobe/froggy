import { siteSettings } from '../config/settings';

export default function Contact() {
  const { colors, contact } = siteSettings;
  
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span style={{ color: colors.primary }}>Touch</span>
        </h2>
        <div className="w-20 h-1 mb-12 mx-auto" style={{ backgroundColor: colors.primary }}></div>
        
        <p className="text-xl text-gray-400 mb-12">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a 
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 px-6 py-3 border rounded-lg hover:border-[#00ff88] transition-all"
            style={{ backgroundColor: colors.backgroundSecondary, borderColor: `${colors.primary}33` }}
          >
            <span className="text-2xl">📧</span>
            <span>{contact.email}</span>
          </a>
          <a 
            href={contact.github}
            className="flex items-center gap-3 px-6 py-3 border rounded-lg hover:border-[#00ff88] transition-all"
            style={{ backgroundColor: colors.backgroundSecondary, borderColor: `${colors.primary}33` }}
          >
            <span className="text-2xl">💻</span>
            <span>GitHub</span>
          </a>
          <a 
            href={contact.linkedin}
            className="flex items-center gap-3 px-6 py-3 border rounded-lg hover:border-[#00ff88] transition-all"
            style={{ backgroundColor: colors.backgroundSecondary, borderColor: `${colors.primary}33` }}
          >
            <span className="text-2xl">💼</span>
            <span>LinkedIn</span>
          </a>
        </div>

        <a 
          href={`mailto:${contact.email}`}
          className="inline-block px-12 py-4 text-black font-bold text-lg rounded-lg transition-all transform hover:scale-105"
          style={{ backgroundColor: colors.primary }}
        >
          Send Message
        </a>
      </div>
    </section>
  );
}
