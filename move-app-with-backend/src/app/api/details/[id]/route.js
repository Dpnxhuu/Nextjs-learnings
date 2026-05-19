export async function GET(request, { params }) {
  const { id } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  const data = await res.json();
  return Response.json(data);
}