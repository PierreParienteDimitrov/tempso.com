import React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white py-16 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Column 1 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Tempso</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#mission"
                  className="hover:text-white transition-colors"
                >
                  Vision
                </Link>
              </li>
              <li>
                <Link
                  href="#dev"
                  className="hover:text-white transition-colors"
                >
                  Open Source
                </Link>
              </li>
              <li>
                <Link
                  href="#coming-soon"
                  className="hover:text-white transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  iOS App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Android App
                </Link>
              </li>
              <li>
                <span className="text-gray-600 cursor-not-allowed">
                  Web App (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Community</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="https://github.com/tempso"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  X / Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contribute Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
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
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {currentYear} Tempso. Built as an open classical music project.
          </p>
          <div className="flex gap-6">
            {/* Social icons could go here if needed */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
