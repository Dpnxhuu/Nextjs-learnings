import Link from "next/link";
import MoviePoster from "./MoviePoster";

export default function MovieCard({ movie }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/50 shadow-lg shadow-black/20 transition hover:border-zinc-700 hover:shadow-violet-900/10">
      <div className="overflow-hidden">
        <MoviePoster
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className="transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h2 className="line-clamp-2 font-semibold text-zinc-100 group-hover:text-violet-300">
            {movie.title}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">{movie.year}</p>
        </div>
        <Link
          href={`/movie/${movie.id}`}
          className="mt-auto block w-full rounded-lg border border-zinc-700 bg-zinc-800/80 py-2.5 text-center text-sm font-medium text-zinc-200 transition hover:border-violet-500/50 hover:bg-violet-600/20 hover:text-violet-200"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
