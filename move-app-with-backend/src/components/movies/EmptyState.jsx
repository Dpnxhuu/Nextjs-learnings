"use client"
export default function EmptyState() {
  return (
    <div className="flex flex-col max-w-md mx-auto rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/30 px-8 py-16">
      <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-800">
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-zinc-200 text-center">
        No results found
      </h2>
      <p className="mt-2 max-w-sm text-sm text-zinc-500 text-center">
        Try a different search term or browse our featured movies.
      </p>
      <button
        type="button"
        onClick={()=> window.location.reload()}
        className="mt-6 mx-auto flex items-center gap-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-100 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H15V15h-6v6.75H3.75A.75.75 0 013 21V9.75z"
          />
        </svg>
        Home
      </button>
    </div>
  );
}
