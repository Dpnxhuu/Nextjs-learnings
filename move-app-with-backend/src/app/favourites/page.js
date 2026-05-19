import MovieGrid from "../../components/movies/MovieGrid";
import PageShell from "../../components/movies/PageShell";

export default function FavouritesPage() {
  return (
    <PageShell
      title="Popular"
      subtitle="Trending movies people are watching right now."
    >
      <MovieGrid/>
    </PageShell>
  );
}
