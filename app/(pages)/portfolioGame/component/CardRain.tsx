"use client";
import React, { useEffect, useState } from "react";
import Card3D from "./Card3D";

type CardRainCard = {
  x: number;
  startY: number;
  speed: number; // px/s
  rotationSpeed: number; // deg/s
  initialRotation: number;
  delay: number; // s
};

type CardRainProps = {
  cardCount?: number;
  height?: number;
};

const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const CardRain: React.FC<CardRainProps> = ({
  cardCount = 12,
  height = 800,
}) => {
  const [cards, setCards] = useState<CardRainCard[]>([]);
  const [, setFrame] = useState(0);

  // Tạo card ban đầu
  useEffect(() => {
    setCards(
      Array.from({ length: cardCount }).map(() => ({
        x: getRandom(5, 85),
        startY: getRandom(-400, -50),
        speed: getRandom(80, 150), // px/s
        rotationSpeed: getRandom(60, 180), // deg/s
        initialRotation: getRandom(0, 360),
        delay: getRandom(0, 2), // s
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
      {cards.map((card, i) => {
        // Tính toán vị trí và góc xoay theo thời gian, có lặp lại khi rơi hết màn hình
        const t =
          Math.max(0, now - card.delay) %
          ((height - card.startY + 200) / card.speed);

        const y = card.startY + t * card.speed;
        const rotation = (card.initialRotation + t * card.rotationSpeed) % 360;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${card.x}%`,
              top: 0,
              pointerEvents: "none",
            }}>
            <Card3D
              front={<span>Card {i + 1}</span>}
              back={<span>Back {i + 1}</span>}
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
