// src/app/contact/page.js

export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question? We'd love to hear from you.
      </p>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
        />
        <button className="bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Send Message
        </button>
      </div>
    </main>
  )
}