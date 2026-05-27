import { PublicNavbar } from "../components/layout/PublicNavbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
