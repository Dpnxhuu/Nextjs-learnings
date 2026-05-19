import SearchBar from "../components/movies/SearchBar";
import MovieGrid from "../components/movies/MovieGrid";
import PageShell from "../components/movies/PageShell";

export default function HomePage() {
  return (
    <PageShell
      title="Discover Movies"
      subtitle="Search millions of movies, explore what's trending, and find your next watch."
    >
      <section className="mb-10 flex justify-center">
        <SearchBar />
      </section>

      <section style={{minHeight: "600px"}}>
        <MovieGrid/>
      </section>
    </PageShell>
  );
}
