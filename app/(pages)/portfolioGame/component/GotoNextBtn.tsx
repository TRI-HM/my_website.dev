import React from "react";
const GotoNextBtn: React.FC<{ href: string }> = ({ href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg text-lg font-bold hover:bg-green-600 transition-all">
    Tiếp tục
  </a>
);
export default GotoNextBtn;
