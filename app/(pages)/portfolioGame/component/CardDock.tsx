import React from "react";
import Card3D from "./Card3D";

type CardDockProps = {
  cards: { id: string; front: React.ReactNode }[];
  maxSlots?: number;
};

const CardDock: React.FC<CardDockProps> = ({ cards, maxSlots = 5 }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
      {Array.from({ length: maxSlots }).map((_, idx) => (
        <div
          key={idx}
          className="w-24 h-36 rounded-xl border-4 border-dashed border-gray-400 bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg">
          {cards[idx] && (
            <div className="w-full h-full flex items-center justify-center">
              {/* Hiển thị mặt trước của lá bài */}
              <div className="w-20 h-32">
                <Card3D
                  className="w-20 h-32"
                  front={cards[idx].front}
                  back={null}
                  rotationY={0}
                />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardDock;
