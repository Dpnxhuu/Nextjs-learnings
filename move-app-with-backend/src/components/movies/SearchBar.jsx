"use client"
import { myContext } from "@/context/apiData";
import { useContext} from "react";

export default function SearchBar() {
  
  const {handleSearch, search, setSearch} = useContext(myContext);
    
  return (
    <form className="flex w-full max-w-2xl md:w-2xl gap-3" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex-1">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search for a movie..."
          className="w-full rounded-xl border border-zinc-700/80 bg-zinc-900/80 py-3.5 pl-12 pr-4 text-zinc-100 placeholder-zinc-500 shadow-inner shadow-black/20 outline-none ring-violet-500/50 transition focus:border-violet-500/60 focus:ring-2"
        />
      </div>
      <button
        type="button"
        onClick={() => setSearch('')}
        className="shrink-0 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
      >
        Search
      </button>
    </form>
  );
}
