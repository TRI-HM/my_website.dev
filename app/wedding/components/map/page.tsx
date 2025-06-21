export default function MapSection() {
  return (
    <section className="mt-12 animate-fade-in delay-500">
      <h2 className="text-2xl font-semibold text-pink-500 mb-4">Bản Đồ</h2>
      <div className="w-full h-64 mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1949.4395092990421!2d109.1199995!3d12.2564655!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31705cf4a682fa3f%3A0xf6e1499fabcdc362!2zVHJ1bmcgVMOibSBUaeG7h2MgQ8aw4bubaSBQaMO6YyBUaOG7i25oIEFu!5e0!3m2!1svi!2s!4v1750483997322!5m2!1svi!2s"
          className="w-full h-full rounded-md border"
          allowFullScreen
          loading="lazy"></iframe>
      </div>
      <a
        href="https://maps.app.goo.gl/ppukfMweT6WzTQDn8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
        Xem trên Google Maps
      </a>
    </section>
  );
}
