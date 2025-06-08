"use client";

// react / next imports
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// assets imports
import { FaWindows } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen z-50 h-20 flex items-center border-b border-zinc-900 bg-black">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 md:px-8 h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 h-full group">
          <div className="relative w-8 h-8 ">
            {" "}
            {/* Adjust these values as needed */}
            <Image
              src="/assets/logo.webp"
              alt="Neurix Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl  md:text-2xl font-jetbrains-mono font-bold tracking-tight text-white">
            Neurix
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-8 lg:gap-12 text-sm text-zinc-200 font-inter">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className="hover:text-purple-400 transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className="hover:text-purple-400 transition-colors"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:text-purple-400 transition-colors"
            >
              Blog
            </Link>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Link
            href="/auth"
            className="bg-transparent text-white text-sm rounded-lg border border-zinc-800 px-4 py-2 font-inter cursor-pointer hover:border-purple-400 transition-colors duration-300 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            href="/#"
            className="bg-white text-black text-sm rounded-lg px-4 py-2 font-inter cursor-pointer flex items-center gap-2 hover:bg-purple-400 transition-colors duration-300 ease-in-out"
            rel="noopener noreferrer"
          >
            <FaWindows /> Download
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <HiX size={28} className="text-white" />
          ) : (
            <HiMenu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-8 md:hidden transition-all">
          <button
            className="absolute top-6 right-6 p-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <HiX size={32} className="text-white" />
          </button>
          <ul className="flex flex-col items-center gap-8 text-lg text-zinc-200 font-inter">
            <li>
              <Link
                href="/"
                className="hover:text-purple-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="hover:text-purple-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-purple-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-purple-400 transition-colors"
                onClick={() => setOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4 w-4/5 max-w-xs mt-4">
            <Link
              href="/signin"
              className="bg-transparent text-white text-base rounded-lg border border-zinc-800 px-4 py-3 font-inter cursor-pointer hover:border-purple-400 transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <a
              href="/download"
              className="bg-white text-black text-base rounded-lg px-4 py-3 font-inter cursor-pointer flex items-center justify-center gap-2 hover:bg-purple-400 transition-colors"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <FaWindows /> Download
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
