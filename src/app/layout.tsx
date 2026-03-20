import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import DemoBanner from "@/components/DemoBanner";
import Nav from "@/components/Nav";
import { buildMeta } from "@/lib/seo";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = buildMeta({
  title: "Learn New Skills Online",
  description: "Elevate Academy offers expert-led online courses in web development, design, data science, and business — learn at your own pace.",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
        <DemoBanner />
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-800 mt-24">
          <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Elevate Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/courses" className="hover:text-gray-300 transition-colors">Courses</Link>
              <Link href="/instructors" className="hover:text-gray-300 transition-colors">Instructors</Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
