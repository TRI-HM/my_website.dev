"use client";
import React, { useState } from "react";
import "./styles.css";
import CardRain from "./component/CardRain";
import CardDock from "./component/CardDock";

const PortfolioGame = () => {
  const [dockCards, setDockCards] = useState<
    { id: string; front: React.ReactNode }[]
  >([]);

  // Khi chọn card rơi, đưa lên dock (tối đa 5)
  const handleCardSelect = (card: { id: string; front: React.ReactNode }) => {
    setDockCards((prev) => {
      // Ngăn trùng card
      if (prev.find((c) => c.id === card.id)) return prev;
      // Tối đa 5 slot
      if (prev.length >= 5) return prev;
      return [...prev, { id: card.id, front: card.front }];
    });
  };

  return (
    <main className="relative min-h-screen bg-gray-900">
      <CardRain cardCount={5} onCardSelect={handleCardSelect} />
      <CardDock cards={dockCards} maxSlots={5} />
    </main>
  );
};

export default PortfolioGame;
