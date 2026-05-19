"use client"
import MovieCardSkeleton from "./MovieCardSkeleton";
export default function SkeletonGrid() {

  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
      {Array.from({ length: 20 }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  );
}
