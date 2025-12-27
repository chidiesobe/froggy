import { siteSettings } from "../config/settings";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const { colors, siteInfo, navigation } = siteSettings;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-[#00ff88]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              {siteInfo.logoImage && (
                <Image
                  src={siteInfo.logoImage}
                  alt={siteInfo.logo}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              )}
              {siteInfo.logo && (
                <div className="text-2xl font-bold">
                  <span style={{ color: colors.primary }}>{siteInfo.logo}</span>
                </div>
              )}
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#00ff88] transition-colors"
                style={{ ["--hover-color" as string]: colors.primary }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
