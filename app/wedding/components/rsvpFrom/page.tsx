export default function RSVPSection() {
  return (
    <section className="mb-12 animate-fade-in delay-300">
      <h2 className="text-2xl font-semibold text-pink-500 mb-4">
        Xác Nhận Tham Dự
      </h2>
      <form className="space-y-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Họ và tên"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          placeholder="Số lượng người tham dự"
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="Lời nhắn (tuỳ chọn)"
          className="w-full p-3 border rounded-md"
          rows={3}
        />
        <button
          type="submit"
          className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
          Gửi xác nhận
        </button>
      </form>
    </section>
  );
}
