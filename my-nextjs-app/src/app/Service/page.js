// src/app/services/page.js

export default function Services() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-600 mb-8">
        We offer a wide range of services to help your business grow.
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Web Development</h2>
          <p className="text-gray-500">Modern and fast websites built with latest tech.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">UI/UX Design</h2>
          <p className="text-gray-500">Beautiful designs that users love.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Consulting</h2>
          <p className="text-gray-500">Expert advice to scale your business.</p>
        </div>
      </div>
    </main>
  )
}