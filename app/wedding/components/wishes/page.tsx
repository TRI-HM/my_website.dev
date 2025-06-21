export default function WishesSection() {
  return (
    <section className="mb-12 animate-fade-in delay-300">
      <h2 className="text-2xl font-semibold text-pink-500 mb-4">
        Gửi Lời Chúc
      </h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Tên của bạn"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Lời chúc dành cho cô dâu chú rể"
          className="w-full p-3 border rounded-md"
          rows={4}
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
          Gửi lời chúc
        </button>
      </form>
    </section>
  );
}
