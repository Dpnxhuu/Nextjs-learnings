"use client"
import Link from "next/link";
import { AuthCard } from "../../components/auth/AuthCard";
import { Button } from "../../components/ui/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react"

// export const metadata = {
//   title: "Login — Lumina",
// };

export default function LoginPage() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const router = useRouter();

  const handleSubmit = async () => {

    if (!formData.email || !formData.password) {
      alert("Please fill all fields!")
      return
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user))
        router.replace('/home')
      } else {
        alert(data.message)
      }

    } catch (error) {
      alert("Something went wrong!")
      console.log(error)
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      router.replace("/home")
    }
  }, [])

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to continue to your dashboard"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300">
            Sign up
          </Link>
        </>
      }
    >
      <div className="space-y-5" role="form" aria-label="Login form">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="input-field"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="input-field"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>

        <div className="flex justify-end">
          <span className="cursor-default text-sm text-violet-400 transition-colors hover:text-violet-300">
            Forgot password?
          </span>
        </div>

        <Button onClick={handleSubmit} variant="primary" size="lg" className="w-full">
          Sign in
        </Button>
      </div>
    </AuthCard>
  );
}
