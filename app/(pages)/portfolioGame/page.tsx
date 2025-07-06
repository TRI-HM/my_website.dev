"use client";
import React, { useState } from "react";
import "./styles.css";
import CardRain from "./component/CardRain";
import CardDock from "./component/CardDock";
import CompletionModal from "./component/CompletionModal";
import WelcomeModal from "./component/WelcomeModal";

const PortfolioGame = () => {
  const [dockCards, setDockCards] = useState<
    { id: string; front: React.ReactNode }[]
  >([]);
  const [lastCollectedCardId, setLastCollectedCardId] = useState<string | null>(
    null
  );
  const [showCompletion, setShowCompletion] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleCardSelect = (card: { id: string; front: React.ReactNode }) => {
    setDockCards((prev) => {
      if (prev.find((c) => c.id === card.id)) return prev;
      if (prev.length >= 5) return prev;
      const next = [...prev, { id: card.id, front: card.front }];
      if (next.length === 5) {
        setTimeout(() => setShowCompletion(true), 500);
      }
      return next;
    });
    setLastCollectedCardId(card.id);
    setTimeout(() => setLastCollectedCardId(null), 900);
  };

  return (
    <main className="relative min-h-screen bg-gray-900">
      {!gameStarted && (
        <CardRain cardCount={5} onCardSelect={handleCardSelect} />
      )}
      <CardDock
        cards={dockCards}
        maxSlots={5}
        lastCollectedCardId={lastCollectedCardId ?? undefined}
      />
      <CompletionModal
        open={showCompletion}
        onClose={() => {
          setShowCompletion(false);
          setGameStarted(true);
          setTimeout(() => setShowWelcome(true), 500);
        }}
      />
      <WelcomeModal open={showWelcome} onClose={() => setShowWelcome(false)} />
    </main>
  );
};

export default PortfolioGame;
