import Link from "next/link";
import type { Course } from "@/lib/data";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors"
    >
      <div className={`h-40 bg-gradient-to-br ${course.gradient} flex items-end p-5`}>
        <span className="bg-black/40 text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
          {course.level}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-indigo-400 font-medium uppercase tracking-wider mb-1">
          {course.category}
        </p>
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">{course.subtitle}</p>
        <div className="flex gap-4 text-xs text-gray-500">
          <span>{course.duration}</span>
          <span>{course.lessons} lessons</span>
          <span>{course.instructor}</span>
        </div>
      </div>
    </Link>
  );
}
