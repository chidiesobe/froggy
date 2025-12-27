import Link from "next/link";
import { siteSettings } from '../config/settings';

export default function Footer() {
  const { colors } = siteSettings;
  
  return (
    <footer className="py-6 px-6 border-t bg-black" style={{ borderColor: `${colors.primary}1A` }}>
      <div className="max-w-7xl mx-auto text-center text-gray-400 text-xs">
        <p>
          &copy;{" "}
          <Link
            href="https://github.com/chidiesobe/froggy"
            target="_blank"
            className="hover:underline mx-1"
          >
            2025 Powered by Froggy
          </Link>
        </p>
      </div>
    </footer>
  );
}
