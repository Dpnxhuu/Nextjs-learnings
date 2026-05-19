"use client";
import { useContext } from "react";
import MovieCard from "./MovieCard";
import { myContext } from "@/context/apiData";
import EmptyState from "./EmptyState";
import SkeletonGrid from "./SkeletonGrid";
import SearchError from "./SearchError";
import PopularError from "./PopularError";

export default function MovieGrid() {
  const { movies, result, searchLoading, popularLoading, popularError, searchError } = useContext(myContext);
  const total = result ? result.length : (movies?.length ?? 0);

  if ((!popularError && !searchError && !searchLoading) && popularLoading) {
    return <SkeletonGrid />;
  }

  if((!popularError && !searchError && !popularLoading) && searchLoading){
    return <SkeletonGrid/>
  }

  if (result?.length === 0 && (!searchError && !popularError) && (!popularLoading && !searchLoading)) {
    return <EmptyState />;
  }

  if((!popularLoading && !searchLoading) && searchError){
    return <SearchError/>
  }

  if((!popularLoading && !searchLoading && !searchError) && popularError){
    return <PopularError/>
  }
  
  return (
    <>
      {result && (
        <p className="mb-4 text-sm font-medium text-zinc-500">
          Showing {total} results
        </p>
      )}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {result
          ? result.map((res) => <MovieCard key={res.id} movie={res} />)
          : movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </>
  );
}
