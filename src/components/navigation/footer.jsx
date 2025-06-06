import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex flex-col w-full max-w-7xl mx-auto bg-zinc-950 text-white p-6 sm:p-8 md:p-10 rounded-3xl border-orange-400/20 border-[1px] md:mb-12">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
        {/* Logo & Status */}
        <div className="flex flex-col gap-4 md:gap-8 md:w-1/3">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">Neurix</span>
            <span className="text-xs text-orange-400 ml-2 px-2 py-1 rounded bg-orange-400/10">
              AI Code Editor
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="ml-2 font-jetbrains-mono">CURRENT STATUS</span>
            <span className="ml-1 inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 mt-8 md:mt-0 w-full">
          <div>
            <h4 className="font-semibold mb-4 font-inter text-sm">Product</h4>
            <ul className="space-y-4 text-zinc-400 font-inter text-xs">
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Changelog</li>
              <li>Download</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-inter text-sm">Resources</h4>
            <ul className="space-y-4 text-zinc-400 font-inter text-xs">
              <li>Documentation</li>
              <li>API Reference</li>
              <li>Blog</li>
              <li>Community</li>
              <li>Guides</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-inter text-sm">Support</h4>
            <ul className="space-y-4 text-zinc-400 font-inter text-xs">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Discord</li>
              <li>Report a Bug</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 font-inter text-sm">Connect</h4>
            <ul className="space-y-4 text-zinc-400 font-inter text-xs">
              <li>Twitter/X</li>
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>YouTube</li>
              <li>Email Newsletter</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-zinc-800 pt-4 flex flex-col gap-4 md:flex-row md:justify-between text-sm text-zinc-500">
        <span className="text-sm font-inter text-center md:text-left font-inter">
          &copy; {new Date().getFullYear()} Neurix &mdash; The AI Code Editor
          for Modern Developers
        </span>
        <div className="flex flex-row justify-center gap-2 items-center md:flex-row md:gap-4 md:items-center font-inter text-xs">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#" className="text-white">
            Manage Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
