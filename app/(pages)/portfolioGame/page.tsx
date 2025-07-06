"use client";
import React, { useState } from "react";
import "./styles.css";
import CardRain from "./component/CardRain";
import CardDock from "./component/CardDock";
import CompletionModal from "./component/CompletionModal";
import WelcomeModal from "./component/WelcomeModal";
import CardExplainModal from "./component/CardExplainModel";
import GotoNextBtn from "./component/GotoNextBtn";

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
  const [explainPhase, setExplainPhase] = useState(false);
  const [explainOpen, setExplainOpen] = useState<number | null>(null);
  const [explainedSet, setExplainedSet] = useState<Set<number>>(new Set());

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

  // Khi bấm đóng WelcomeModal -> sang giai đoạn giải thích
  const handleWelcomeClose = () => {
    setShowWelcome(false);
    setExplainPhase(true);
  };

  // Khi click thẻ trong dock
  const handleCardClick = (idx: number) => {
    if (!explainPhase) return;
    setExplainOpen(idx);
  };

  // Khi đóng modal giải thích
  const handleExplainClose = () => {
    if (explainOpen !== null) {
      setExplainedSet((prev) => new Set(prev).add(explainOpen));
      setExplainOpen(null);
    }
  };

  // Đã đọc xong hết 5 thẻ?
  const allExplained = explainedSet.size === 5;

  return (
    <main className="relative min-h-screen bg-gray-900">
      {!gameStarted && (
        <CardRain cardCount={5} onCardSelect={handleCardSelect} />
      )}
      <CardDock
        cards={dockCards}
        maxSlots={5}
        lastCollectedCardId={lastCollectedCardId ?? undefined}
        onCardClick={explainPhase ? handleCardClick : undefined}
        explainedSet={explainedSet}
      />
      <CompletionModal
        open={showCompletion}
        onClose={() => {
          setShowCompletion(false);
          setGameStarted(true);
          setTimeout(() => setShowWelcome(true), 500);
        }}
      />
      <WelcomeModal open={showWelcome} onClose={handleWelcomeClose} />
      <CardExplainModal
        open={explainOpen !== null}
        onClose={handleExplainClose}
        cardIdx={explainOpen ?? 0}
      />
      {allExplained && <GotoNextBtn href="https://github.com/" />}
    </main>
  );
};

export default PortfolioGame;
