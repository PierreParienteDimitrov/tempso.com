import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-[#2c2929]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Tempso</h4>
            <ul className="space-y-2 text-sm text-[#7b7575]">
              <li>
                <Link href="#problem" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Download</h4>
            <ul className="space-y-2 text-sm text-[#7b7575]">
              <li>
                <Link
                  href="https://apps.apple.com/us/app/tempso/id1493511859"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  iOS App
                </Link>
              </li>
              <li>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.tempso.tempso&hl=en&gl=US"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Android App
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Connect</h4>
            <ul className="space-y-2 text-sm text-[#7b7575]">
              <li>
                <Link
                  href="https://www.facebook.com/tempsoapp"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/tempso"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-[#7b7575]">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@tempso.com"
                  className="hover:text-white transition-colors"
                >
                  info@tempso.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2c2929] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#7b7575]">
          <p>
            &copy; {currentYear} Tempso. Made with &#9834; in Paris, San Francisco, and Los Angeles.
          </p>
          <div className="flex gap-6">
            <Link
              href="https://www.facebook.com/tempsoapp"
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/company/tempso"
              target="_blank"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
