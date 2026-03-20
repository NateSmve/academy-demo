import type { Metadata } from "next";
import { buildMeta } from "@/lib/seo";
import CourseFilters from "@/components/CourseFilters";

export const metadata: Metadata = buildMeta({
  title: "Courses",
  description: "Browse all courses at Elevate Academy — development, design, data science, and business.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-10">
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Catalog</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">All Courses</h1>
        <p className="text-gray-400 max-w-lg">Filter by category to find the perfect course for your learning goals.</p>
      </div>
      <CourseFilters />
    </div>
  );
}
