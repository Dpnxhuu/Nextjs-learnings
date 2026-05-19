export default function DetailSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-10 animate-pulse">
      {/* Poster */}
      <div className="w-full md:w-90 shrink-0 rounded-2xl bg-zinc-800 h-120 md:h-130" />
      <div className="flex flex-col gap-6 w-full">
        {/* Title */}
        <div className="h-9 w-2/3 rounded-lg bg-zinc-800" />

        {/* Badges row */}
        <div className="flex flex-wrap gap-3">
          {[120, 180, 90, 110, 130].map((w, i) => (
            <div
              key={i}
              className="h-16 rounded-xl bg-zinc-800"
              style={{ width: `${w}px` }}
            />
          ))}
        </div>

        {/* Plot label */}
        <div className="h-4 w-16 rounded bg-zinc-800" />

        {/* Plot lines */}
        <div className="flex flex-col gap-2">
          <div className="h-4 w-full rounded bg-zinc-800" />
          <div className="h-4 w-4/5 rounded bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
