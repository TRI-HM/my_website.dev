import React from "react";

type WelcomeModalProps = {
  open: boolean;
  onClose?: () => void;
};
const WelcomeModal: React.FC<WelcomeModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl px-12 py-10 flex flex-col items-center animate-bounce-in">
        <h2 className="text-3xl font-bold mb-2 select-none">Welcome to game</h2>
        <button
          className="px-8 py-3 mt-8 rounded-lg bg-blue-500 text-white text-lg font-bold hover:bg-blue-600 focus:outline-none transition-all shadow-md"
          onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};
export default WelcomeModal;

