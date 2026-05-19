"use client"

import { myContext } from "@/context/apiData";
import { useContext } from "react";

export default function SearchError() {
  const { retry } = useContext(myContext);

  return (
    <section
      className="flex flex-col max-w-md mx-auto items-center justify-center rounded-2xl border border-red-900/40 bg-red-950/20 px-8 py-16 text-center"
      role="alert"
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-900/30">
        <svg
          className="h-8 w-8 text-red-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-red-200">Something went wrong</h2>
      <p className="mt-2 max-w-sm text-sm text-red-300/70">
        We could not load movies right now. Please try again later.
      </p>
      <button
        type="button"
        onClick={retry}
        className="mt-6 rounded-lg border border-red-800/60 bg-red-900/30 px-5 py-2.5 text-sm font-medium text-red-200 transition hover:bg-red-900/50"
      >
        Try again
      </button>
    </section>
  );
}
