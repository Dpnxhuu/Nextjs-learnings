export default function MovieCardSkeleton() {
  return (
    <article className="md:w-72 group flex flex-col overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/50 shadow-lg shadow-black/20">
      <div className="aspect-2/3 w-full animate-pulse bg-zinc-800" />
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-800" />
        <div className="mt-auto h-10 w-full animate-pulse rounded-lg bg-zinc-800" />
      </div>
    </article>
  );
}