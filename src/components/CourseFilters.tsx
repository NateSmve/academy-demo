"use client";

import { useState } from "react";
import { courses, categories } from "@/lib/data";
import CourseCard from "./CourseCard";

export default function CourseFilters() {
  const [cat, setCat] = useState("all");

  const filtered = cat === "all" ? courses : courses.filter((c) => c.category === cat);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button key={c.value} onClick={() => setCat(c.value)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              cat === c.value ? "bg-indigo-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
            }`}>{c.label}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-16">No courses in this category yet.</p>
      )}
    </>
  );
}
