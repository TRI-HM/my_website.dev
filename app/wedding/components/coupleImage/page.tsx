import Image from "next/image";

export default function CoupleImageSection() {
  return (
    <section className="mb-12 animate-fade-in delay-300">
      <Image
        src="/images/wedding/wedding1.jpg"
        alt="Wedding Couple"
        className="mx-auto w-64 rounded-full shadow-xl border-4 border-pink-200"
        width={1920}
        height={2560}
      />
      <p className="mt-6 text-pink-700 italic">
        &ldquo;Bắt đầu một chương mới cùng nhau, với tình yêu và lời chúc phúc
        của bạn.&rdquo;
      </p>
    </section>
  );
}
