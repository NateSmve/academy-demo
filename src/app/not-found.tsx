import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p className="text-6xl font-bold text-gray-700 mb-4">404</p>
      <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
      <p className="text-gray-400 mb-8">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-colors">Back to home</Link>
    </div>
  );
}
