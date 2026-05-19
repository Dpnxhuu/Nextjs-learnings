"use client"
import Link from "next/link";
import MoviePoster from "../../../components/movies/MoviePoster";
import PageShell from "../../../components/movies/PageShell";
import useMovieDetail from "@/hooks/useMovieDetail";
import {use} from "react";
// import EmptyDetails from "@/components/movies/EmptyDetails";
import DetailError from "@/components/movies/DetailError";
import DetailSkeleton from "@/components/movies/DetailSkeleton";

export default function MovieDetailPage({ params }) {
  
  const {id} = use(params)

  const {detail: movie, loading, error, retry} = useMovieDetail(id)

 if (!error && loading) return (
   <PageShell>
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to search
      </Link>
      <DetailSkeleton />
    </PageShell>
);

if(!loading && error){
  return (
    <>
    <PageShell>
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to search
      </Link>
      <DetailError retry={retry}/>
    </PageShell>
    </>
  )
}

// if (!movie && !loading && !error) {
//     return (
//     <PageShell>
//       <Link
//         href="/"
//         className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
//       >
//         <svg
//           className="h-4 w-4"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//           aria-hidden="true"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 19l-7-7 7-7"
//           />
//         </svg>
//         Back to search
//       </Link>
//       <EmptyDetails/>
//     </PageShell>
//   )
// }

  return (
    <>
    {movie && <PageShell>
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-400"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to search
      </Link>

      <article className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">
        <div className="mx-auto w-full max-w-xs shrink-0 md:mx-0 md:max-w-sm">
          <MoviePoster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} poster`}
            className="rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-zinc-800"
          />
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              {movie.title}
            </h1>
            <p className="mt-2 text-lg text-zinc-400">{movie.year}</p>
          </header>

          <dl className="flex flex-wrap gap-4">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Rating
              </dt>
              <dd className="mt-1 flex items-center gap-1.5 text-lg font-semibold text-amber-400">
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {movie.vote_average.toFixed(1)}
              </dd>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Genre
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-200">
                {movie.genres.map(g => g.name).join(", ")}
              </dd>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Year
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-200">
                {movie.release_date.slice(0, 4)}
              </dd>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Runtime
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-200">
                {`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}
              </dd>
            </div>
             <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
              <dt className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Language
              </dt>
              <dd className="mt-1 text-sm font-medium text-zinc-200">
                {movie.spoken_languages.map(l => l.english_name).join(", ")}
              </dd>
            </div>
          </dl>

          <section>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Plot
            </h2>
            <p className="text-base leading-relaxed text-zinc-300">
              {movie.overview}
            </p>
          </section>
        </div>
      </article>
    </PageShell>}
    </>
  );
}
