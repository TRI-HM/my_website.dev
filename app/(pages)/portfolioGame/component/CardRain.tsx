"use client";
import React, { useEffect, useState } from "react";
import Card3D from "./Card3D";

type CardRainCard = {
  id: string;
  x: number;
  startY: number;
  speed: number; // px/s
  rotationSpeed: number; // deg/s
  initialRotation: number;
  delay: number; // s
  front: React.ReactNode;
  back: React.ReactNode;
};

type CardRainProps = {
  cardCount?: number;
  height?: number;
  onCardSelect?: (card: CardRainCard) => void;
};

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const CardRain: React.FC<CardRainProps> = ({
  cardCount = 12,
  height = 800,
  onCardSelect,
}) => {
  const [cards, setCards] = useState<CardRainCard[]>([]);
  const [, setFrame] = useState(0);

  // Tạo card ban đầu
  useEffect(() => {
    setCards(
      Array.from({ length: cardCount }).map((_, i) => ({
        id: `falling-${Date.now()}-${i}`,
        x: getRandom(5, 85),
        startY: getRandom(-400, -50),
        speed: getRandom(80, 150), // px/s
        rotationSpeed: getRandom(60, 180), // deg/s
        initialRotation: getRandom(0, 360),
        delay: getRandom(0, 2), // s
        front: <span>Card {i + 1}</span>,
        back: <span>Back {i + 1}</span>,
      }))
    );
  }, [cardCount]);

  // Animation loop
  useEffect(() => {
    let animation: number;
    function animate() {
      setFrame((f) => f + 1); // trigger re-render
      animation = requestAnimationFrame(animate);
    }
    animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  const now = performance.now() / 1000;
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {cards.map((card) => {
        // Tính toán vị trí và góc xoay theo thời gian, có lặp lại khi rơi hết màn hình
        const t =
          Math.max(0, now - card.delay) %
          ((height - card.startY + 200) / card.speed);

        const y = card.startY + t * card.speed;
        const rotation = (card.initialRotation + t * card.rotationSpeed) % 360;

        // Khi click: truyền card info lên cha
        const handleClick = () => {
          if (onCardSelect) onCardSelect(card);
        };

        return (
          <div
            key={card.id}
            style={{
              position: "absolute",
              left: `${card.x}%`,
              top: 0,
              pointerEvents: "auto",
              cursor: "pointer",
            }}
            onClick={handleClick}>
            <Card3D
              front={card.front}
              back={card.back}
              rotationY={rotation}
              translateY={y}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardRain;
