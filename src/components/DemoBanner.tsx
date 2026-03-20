export default function DemoBanner() {
  return (
    <div className="bg-indigo-900/30 border-b border-indigo-800/40 text-indigo-200 text-xs text-center py-2 px-4">
      <span className="font-semibold">[DEMO]</span> This is a fictional online
      course platform built as a portfolio piece by{" "}
      <a
        href="https://smve.cloud"
        className="underline hover:text-indigo-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        SMVE Web Dev
      </a>
      . No real courses or enrollments are available.
    </div>
  );
}
