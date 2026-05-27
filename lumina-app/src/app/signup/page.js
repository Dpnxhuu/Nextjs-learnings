"use client"
import Link from "next/link";
import { AuthCard } from "../../components/auth/AuthCard";
import { Button } from "../../components/ui/Button";
import { useState } from "react";

// export const metadata = {
//   title: "Sign Up — Lumina",
// };

export default function SignupPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const CreateAccount = async () => {

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Please fill all fields!")
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return;
    }

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const data = await res.json()
  
      if (res.ok) {
        alert("Signup successful!")
      } else {
        alert(data.message)
      }
  
    } catch (error) {
      alert("Something went wrong!")
      console.log(error)
    }
  }

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start your journey with Lumina today"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300">
            Log in
          </Link>
        </>
      }
    >
      <div className="space-y-5" role="form" aria-label="Signup form">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Alex Morgan"
            className="input-field"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

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
            onChange={(e)=> setFormData({...formData, email: e.target.value})}
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
            autoComplete="new-password"
            value={formData.password}
            onChange={(e)=> setFormData({...formData, password: e.target.value})}
            required
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="input-field"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={(e)=> setFormData({...formData, confirmPassword: e.target.value})}
            required
          />
        </div>

        <Button onClick={CreateAccount} variant="primary" size="lg" className="w-full">
          Create account
        </Button>
      </div>
    </AuthCard>
  );
}
