export default function MoviePoster({ src, alt, className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`aspect-2/3 w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex aspect-2/3 w-full flex-col items-center justify-center gap-2 bg-zinc-800 text-zinc-500 ${className}`}
      aria-label={alt}
    >
      <svg
        className="h-12 w-12 opacity-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
        />
      </svg>
      <span className="text-xs font-medium">No poster</span>
    </div>
  );
}
