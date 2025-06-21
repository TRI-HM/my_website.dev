export default function TimelineSection() {
  return (
    <section className="mb-12 animate-fade-in delay-300">
      <h2 className="text-2xl font-semibold text-rose-500 mb-6">
        Lịch Trình Ngày Cưới
      </h2>
      <ul className="text-left space-y-3">
        <li>
          <span className="font-medium">16:30</span> - Đón khách
        </li>
        <li>
          <span className="font-medium">17:00</span> - Bắt đầu lễ cưới
        </li>
        <li>
          <span className="font-medium">18:30</span> - Dùng tiệc và phát biểu
        </li>
        <li>
          <span className="font-medium">20:00</span> - Giao lưu và chụp hình
        </li>
      </ul>
    </section>
  );
}
