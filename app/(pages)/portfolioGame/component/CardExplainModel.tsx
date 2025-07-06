import React from "react";
type CardExplainModalProps = {
  open: boolean;
  onClose: () => void;
  cardIdx: number;
};
const LOREM = [
  "Lorem ipsum dolor sit amet, thẻ bài số 1.",
  "Consectetur adipiscing elit, thẻ bài số 2.",
  "Sed do eiusmod tempor incididunt, thẻ bài số 3.",
  "Ut labore et dolore magna aliqua, thẻ bài số 4.",
  "Excepteur sint occaecat cupidatat non proident, thẻ bài số 5.",
];
const CardExplainModal: React.FC<CardExplainModalProps> = ({
  open,
  onClose,
  cardIdx,
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl px-8 py-6 flex flex-col items-center animate-bounce-in max-w-sm">
        <h2 className="text-xl font-bold mb-3">
          Giải thích thẻ bài {cardIdx + 1}
        </h2>
        <p className="mb-8 text-base text-gray-700 select-none">
          {LOREM[cardIdx] ?? "Nội dung thẻ..."}
        </p>
        <button
          className="mt-2 px-6 py-2 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition-all"
          onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
};
export default CardExplainModal;
