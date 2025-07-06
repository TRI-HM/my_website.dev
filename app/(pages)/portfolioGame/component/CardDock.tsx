import React from "react";

type CardDockProps = {
  slots?: number; // Số lượng vị trí trống, mặc định 5
};

const CardDock: React.FC<CardDockProps> = ({ slots = 5 }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
      {Array.from({ length: slots }).map((_, idx) => (
        <div
          key={idx}
          className="w-24 h-36 rounded-xl border-4 border-dashed border-gray-400 bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
          {/* Slot trống, hoặc có thể đặt lá bài vào đây sau này */}
        </div>
      ))}
    </div>
  );
};

export default CardDock;
