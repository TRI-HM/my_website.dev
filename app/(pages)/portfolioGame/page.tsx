"use client";
import React, { useState } from "react";
import "./styles.css";
import CardRain from "./component/CardRain";
import CardDock from "./component/CardDock";

const PortfolioGame = () => {
  const [dockCards, setDockCards] = useState<
    { id: string; front: React.ReactNode }[]
  >([]);
  const [lastCollectedCardId, setLastCollectedCardId] = useState<string | null>(
    null
  );

  const handleCardSelect = (card: { id: string; front: React.ReactNode }) => {
    setDockCards((prev) => {
      if (prev.find((c) => c.id === card.id)) return prev;
      if (prev.length >= 5) return prev;
      return [...prev, { id: card.id, front: card.front }];
    });
    setLastCollectedCardId(card.id);
    setTimeout(() => setLastCollectedCardId(null), 900); // Để animation còn lặp lại cho lần sau
  };

  return (
    <main className="relative min-h-screen bg-gray-900">
      <CardRain cardCount={5} onCardSelect={handleCardSelect} />
      <CardDock
        cards={dockCards}
        maxSlots={5}
        lastCollectedCardId={lastCollectedCardId ?? undefined}
      />
    </main>
  );
};

export default PortfolioGame;
