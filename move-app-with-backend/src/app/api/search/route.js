export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
  );
  const data = await res.json();
  return Response.json(data);
}