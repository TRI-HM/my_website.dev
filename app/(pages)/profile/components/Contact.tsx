import React from "react";
import { FaEnvelope, FaPhone, FaCommentDots, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="bg-white/80 rounded-2xl shadow-lg p-8 w-full mx-auto flex flex-col md:flex-row items-center border border-blue-100 relative">
      {/* Left: Contact info */}
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Liên hệ với mình nhé!
        </h2>
        <p className="mb-6 text-blue-500 italic text-center">
          “Mọi kết nối đều là một niềm vui nhỏ trong cuộc sống.”
          <span className="animate-bounce inline-block">💙</span>
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition">
            <span>
              <FaEnvelope className="text-blue-600 text-xl" />
            </span>
            <span className="text-gray-700">yourmail@gmail.com</span>
          </a>
          <a
            href="tel:0123456789"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition">
            <FaPhone className="text-blue-600 text-xl" />
            <span className="text-gray-700">0123 456 789</span>
          </a>
          <a
            href="https://zalo.me/0123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition">
            <FaCommentDots className="text-blue-600 text-xl" />
            <span className="text-gray-700">Zalo: 0123 456 789</span>
          </a>
        </div>
      </div>
      {/* Right: QR LinkedIn */}
      <div className="flex flex-col items-center justify-center mt-8 md:mt-0 md:ml-8">
        <div className="mb-2 flex items-center gap-2">
          <FaLinkedin className="text-blue-700 text-2xl animate-pulse" />
          <span className="font-semibold text-blue-700">LinkedIn</span>
        </div>
        <div className="bg-white p-2 rounded-xl shadow border border-blue-200">
          <Image
            src="/images/profile/qr-linkedin.png"
            alt="LinkedIn QR"
            width={120}
            height={120}
          />
        </div>
        <span className="text-xs text-gray-500 mt-2">
          Quét QR để kết nối LinkedIn
        </span>
      </div>
    </section>
  );
};

export default Contact;
