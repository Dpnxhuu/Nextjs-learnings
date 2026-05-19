import { ApiDataProvider } from "@/context/apiData";
import MovieHeader from "../components/movies/MovieHeader";
import "./globals.css";

export const metadata = {
  title: "Explore Cinema - Search and discover movies",
  description: "Search and discover movies",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-zinc-950 text-zinc-100">
        <MovieHeader />

        <ApiDataProvider>
          {children}
        </ApiDataProvider>
      </body>
    </html>
  );
}
