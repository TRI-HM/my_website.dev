"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-800 transition-all duration-300 flex items-center justify-center text-2xl
        ${
          visible
            ? "opacity-100 scale-100 animate-bounce-in"
            : "opacity-0 scale-75 pointer-events-none"
        }
        group`}
      aria-label="Scroll to top"
      style={{ transition: "opacity 0.3s, transform 0.3s" }}>
      <FaArrowUp className="transition-transform duration-300 group-hover:animate-bounce-hover animate-pulse" />
    </button>
  );
};

export default ScrollToTop;
