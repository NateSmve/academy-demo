"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/instructors", label: "Instructors" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="text-lg font-bold text-white tracking-tight">
          <span className="text-indigo-400">Elevate</span> Academy
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                pathname === l.href ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
              }`}>{l.label}</Link>
          ))}
          <Link href="/courses" className="ml-4 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 transition-colors">
            Browse Courses
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-400 hover:text-white" aria-label="Toggle menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950 px-6 py-4 space-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm ${
                pathname === l.href ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"
              }`}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
