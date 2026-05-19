"use client";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Search" },
  { href: "/favourites", label: "Popular" },
];

export default function MovieHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="64" rx="16" fill="#18181B" />
              <circle cx="32" cy="32" r="20" fill="#7C3AED" opacity="0.15" />
              <polygon points="26,22 26,42 44,32" fill="#7C3AED" />
              <rect
                x="12"
                y="10"
                width="4"
                height="6"
                rx="1"
                fill="#7C3AED"
                opacity="0.6"
              />
              <rect
                x="12"
                y="48"
                width="4"
                height="6"
                rx="1"
                fill="#7C3AED"
                opacity="0.6"
              />
              <rect
                x="48"
                y="10"
                width="4"
                height="6"
                rx="1"
                fill="#7C3AED"
                opacity="0.6"
              />
              <rect
                x="48"
                y="48"
                width="4"
                height="6"
                rx="1"
                fill="#7C3AED"
                opacity="0.6"
              />
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight text-zinc-100">
            Explore Cinema
          </span>
        </Link>

        <nav
          className="flex flex-wrap items-center gap-1 sm:gap-2"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          <span
            className="mx-1 hidden h-5 w-px bg-zinc-700 sm:block"
            aria-hidden="true"
          />
        </nav>
      </div>
    </header>
  );
}
