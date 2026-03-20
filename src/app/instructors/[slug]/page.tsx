import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { instructors, getInstructor, courses } from "@/lib/data";
import { buildMeta } from "@/lib/seo";
import CourseCard from "@/components/CourseCard";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return instructors.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const inst = getInstructor(slug);
  if (!inst) return {};
  return buildMeta({ title: inst.name, description: `${inst.name} — ${inst.title} at Elevate Academy.`, path: `/instructors/${slug}` });
}

export default async function InstructorDetailPage({ params }: Props) {
  const { slug } = await params;
  const inst = getInstructor(slug);
  if (!inst) notFound();

  const instCourses = courses.filter((c) => inst.courseIds.includes(c.id));

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/instructors" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors mb-8 inline-flex items-center gap-1">
        &larr; All Instructors
      </Link>

      <div className="mt-6 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className={`rounded-2xl h-64 bg-gradient-to-br ${inst.gradient}`} />
        </div>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-extrabold text-white mb-1">{inst.name}</h1>
          <p className="text-indigo-400 font-medium mb-6">{inst.title}</p>
          <p className="text-gray-400 leading-relaxed mb-8">{inst.bio}</p>
        </div>
      </div>

      {instCourses.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">Courses by {inst.name.split(" ")[0]}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {instCourses.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        </div>
      )}
    </div>
  );
}
