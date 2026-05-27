"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { HomeNavbar } from "../../components/layout/HomeNavbar";
import { Dashboard } from "../../components/home/Dashboard";

// export const metadata = {
//   title: "Dashboard — Lumina",
// };

export default function HomePage() {

  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem("user")

    if (!stored) {
      router.replace("/login")
      return
    }

    setUser(JSON.parse(stored))
  }, [])

  return (
    <div className="min-h-screen">
      <HomeNavbar />
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-medium text-violet-400">Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Welcome back,{" "}
            <span className="text-gradient">Alex</span>
          </h1>
          <p className="mt-2 text-zinc-400">
            Here&apos;s what&apos;s happening with your projects today.
          </p>
        </div>
        <Dashboard />
      </main>
    </div>
  );
}
