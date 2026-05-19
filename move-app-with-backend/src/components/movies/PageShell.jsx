export default function PageShell({ title, subtitle, children }) {
  return (
    <main className="mx-auto max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 overflow-hidden">
      {(title || subtitle) && (
        <header className="mb-8">
          {title && (
            <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-2 text-sm text-zinc-500 sm:text-base">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </main>
  );
}
