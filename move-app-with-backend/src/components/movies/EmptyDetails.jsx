export default function EmptyDetails() {
  return (
    <div
      className="flex flex-col max-w-md mx-auto items-center justify-center rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/30 px-8 py-16 text-center"
      role="status"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
        <svg
          className="h-8 w-8 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-zinc-200">Details not available</h2>
      <p className="mt-2 max-w-sm text-sm text-zinc-500">
        We could not load the details for this movie. It may have been removed or is currently unavailable.
      </p>
    </div>
  );
}