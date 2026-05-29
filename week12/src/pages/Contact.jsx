export default function Contact() {
  return (
    <div className="max-w-lg mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          rows={4}
          placeholder="Your message"
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white rounded-lg py-3 font-semibold hover:bg-indigo-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
