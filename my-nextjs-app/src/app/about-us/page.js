// src/app/about/page.js

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 mb-8">
        We are a passionate team building awesome products.
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-500">To build great products for everyone.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-500">A world where tech helps everyone.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Our Values</h2>
          <p className="text-gray-500">Honesty, quality, and innovation.</p>
        </div>
      </div>
    </main>
  )
}