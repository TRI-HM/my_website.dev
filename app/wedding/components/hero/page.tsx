import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], ["0px", "150px"]);

  return (
    <motion.section
      id="hero"
      style={{ backgroundPositionY: y }}
      className="mb-12 relative bg-[url('/images/wedding/hero-banner.jpg')] bg-cover bg-center aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-bold mb-4">
          Theon & Bảo Minh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl">
          Trân trọng kính mời bạn đến chung vui cùng chúng tôi trong ngày trọng
          đại.
        </motion.p>
      </div>
    </motion.section>
  );
}
