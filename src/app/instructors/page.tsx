import type { Metadata } from "next";
import Link from "next/link";
import { buildMeta } from "@/lib/seo";
import { instructors, courses } from "@/lib/data";

export const metadata: Metadata = buildMeta({
  title: "Instructors",
  description: "Meet the expert instructors at Elevate Academy.",
  path: "/instructors",
});

export default function InstructorsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Our Team</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Meet Our Instructors</h1>
        <p className="text-gray-400 max-w-lg mx-auto">Industry professionals who bring real-world expertise to every lesson.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {instructors.map((inst) => {
          const instCourses = courses.filter((c) => inst.courseIds.includes(c.id));
          return (
            <Link key={inst.id} href={`/instructors/${inst.slug}`}
              className="group rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
              <div className={`h-48 bg-gradient-to-br ${inst.gradient}`} />
              <div className="p-6">
                <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{inst.name}</h2>
                <p className="text-sm text-gray-500 mb-3">{inst.title}</p>
                <p className="text-gray-400 text-sm mb-4">{inst.bio}</p>
                <p className="text-xs text-gray-500">
                  {instCourses.length} course{instCourses.length !== 1 ? "s" : ""}: {instCourses.map((c) => c.title).join(", ")}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
