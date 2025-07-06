"use client";
import React, { useState } from "react";
import "./styles.css";
import CardRain from "./component/CardRain";
import CardDock from "./component/CardDock";
import CompletionModal from "./component/CompletionModal";

const PortfolioGame = () => {
  const [dockCards, setDockCards] = useState<
    { id: string; front: React.ReactNode }[]
  >([]);
  const [lastCollectedCardId, setLastCollectedCardId] = useState<string | null>(
    null
  );
  const [showCompletion, setShowCompletion] = useState(false);

  const handleCardSelect = (card: { id: string; front: React.ReactNode }) => {
    setDockCards((prev) => {
      if (prev.find((c) => c.id === card.id)) return prev;
      if (prev.length >= 5) return prev;
      const next = [...prev, { id: card.id, front: card.front }];
      // Nếu đủ 5 thẻ thì show modal
      if (next.length === 5) {
        setTimeout(() => setShowCompletion(true), 500); // delay cho đẹp
      }
      return next;
    });
    setLastCollectedCardId(card.id);
    setTimeout(() => setLastCollectedCardId(null), 900);
  };

  const handleCloseModal = () => {
    setShowCompletion(false);
    // Nếu muốn reset game thì cũng clear dockCards ở đây luôn
    // setDockCards([]);
  };

  return (
    <main className="relative min-h-screen bg-gray-900">
      <CardRain cardCount={5} onCardSelect={handleCardSelect} />
      <CardDock
        cards={dockCards}
        maxSlots={5}
        lastCollectedCardId={lastCollectedCardId ?? undefined}
      />
      <CompletionModal open={showCompletion} onClose={handleCloseModal} />
    </main>
  );
};

export default PortfolioGame;
