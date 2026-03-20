import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { courses, getCourse } from "@/lib/data";
import { buildMeta } from "@/lib/seo";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return buildMeta({ title: course.title, description: course.subtitle, path: `/courses/${slug}` });
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Link href="/courses" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors mb-8 inline-flex items-center gap-1">
        &larr; All Courses
      </Link>

      <div className={`mt-6 rounded-2xl h-48 md:h-64 bg-gradient-to-br ${course.gradient} flex items-end p-8`}>
        <div>
          <span className="bg-black/40 text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize">{course.level}</span>
          <span className="bg-black/40 text-white text-xs font-semibold px-2.5 py-1 rounded-full ml-2">{course.category}</span>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{course.title}</h1>
          <p className="text-lg text-gray-400 mb-6">{course.subtitle}</p>

          <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-400">
            <div><span className="text-white font-bold">{course.duration}</span></div>
            <div><span className="text-white font-bold">{course.lessons}</span> lessons</div>
            <div>by <Link href={`/instructors/${course.instructorSlug}`} className="text-indigo-400 hover:text-indigo-300">{course.instructor}</Link></div>
          </div>

          <h2 className="text-lg font-bold text-white mb-3">About This Course</h2>
          <p className="text-gray-400 leading-relaxed mb-10">{course.description}</p>

          <h2 className="text-lg font-bold text-white mb-6">Curriculum</h2>
          <div className="space-y-6">
            {course.curriculum.map((mod, i) => (
              <div key={i} className="rounded-xl border border-gray-800 p-6">
                <h3 className="font-bold text-white mb-3">{mod.title}</h3>
                <ul className="space-y-2">
                  {mod.lessons.map((lesson) => (
                    <li key={lesson} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-indigo-500">&#9654;</span> {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-gray-800 p-6 sticky top-24">
            <h3 className="text-lg font-bold text-white mb-4">Enroll in This Course</h3>
            <p className="text-gray-400 text-sm mb-6">
              [PLACEHOLDER] In a real platform, pricing and enrollment would appear here.
            </p>
            <Link href="/contact" className="block w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-center hover:bg-indigo-500 transition-colors">
              Get Started
            </Link>
            <div className="mt-6 space-y-3 text-sm text-gray-500">
              <div className="flex justify-between"><span>Duration</span><span className="text-gray-300">{course.duration}</span></div>
              <div className="flex justify-between"><span>Lessons</span><span className="text-gray-300">{course.lessons}</span></div>
              <div className="flex justify-between"><span>Level</span><span className="text-gray-300 capitalize">{course.level}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
