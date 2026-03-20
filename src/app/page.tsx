import Link from "next/link";
import { courses, instructors } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-gray-950 to-gray-950" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 md:py-44">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Online Learning Platform</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-3xl">
            Level up your career with expert-led courses
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mb-10">
            Practical, project-based courses in development, design, data science, and business — taught by industry professionals.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/courses" className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors">
              Browse Courses
            </Link>
            <Link href="/instructors" className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 font-semibold hover:border-gray-500 hover:text-white transition-colors">
              Meet Instructors
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Featured</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Popular Courses</h2>
          </div>
          <Link href="/courses" className="hidden md:inline-flex text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>

      <section className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Why Elevate</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Learn From the Best</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Project-Based", desc: "Every course includes hands-on projects you can add to your portfolio." },
              { icon: "👩‍🏫", title: "Expert Instructors", desc: "Learn from professionals with real-world industry experience." },
              { icon: "⏰", title: "Self-Paced", desc: "Study on your schedule with lifetime access to course materials." },
            ].map((f) => (
              <div key={f.title} className="rounded-xl border border-gray-800 p-8 hover:border-gray-700 transition-colors">
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Instructors</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Meet Your Teachers</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((i) => (
            <Link key={i.id} href={`/instructors/${i.slug}`}
              className="group rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
              <div className={`h-32 bg-gradient-to-br ${i.gradient}`} />
              <div className="p-4">
                <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{i.name}</h3>
                <p className="text-xs text-gray-500">{i.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
