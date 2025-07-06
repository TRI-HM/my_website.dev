import React from "react";
import Card3D from "./Card3D";

type CardDockProps = {
  cards: { id: string; front: React.ReactNode }[];
  maxSlots?: number;
  lastCollectedCardId?: string; // card mới vừa chui vào slot
  onCardClick?: (idx: number) => void;
  explainedSet?: Set<number>;
};

const CardDock: React.FC<CardDockProps> = ({
  cards,
  maxSlots = 5,
  lastCollectedCardId,
  onCardClick,
  explainedSet,
}) => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-30">
    {Array.from({ length: maxSlots }).map((_, idx) => {
      const card = cards[idx];
      const isNew = card && card.id === lastCollectedCardId;
      const explained = explainedSet?.has(idx) ?? false;
      return (
        <div
          key={idx}
          className={`w-24 h-36 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-lg transition-all`}
          onClick={() => !!card && onCardClick && onCardClick(idx)}
          style={{
            cursor: card && onCardClick ? "pointer" : "default",
            opacity: explained ? 0.7 : 1,
            border: explained ? "2px solid #38bdf8" : undefined,
          }}
        >
          {card && (
            <div className={`w-full h-full flex items-center justify-center`}>
              <div className={`w-20 h-32 ${isNew ? "dock-card-animate" : ""}`}>
                <Card3D
                  className="w-20 h-32"
                  front={card.front}
                  back={null}
                  rotationY={0}
                />
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
);

export default CardDock;
