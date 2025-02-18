"use client";
import React, { useState, useRef } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "@/app/components/numberGuessing/Card";

interface CardItemProps {
  number: number;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const CardItem: React.FC<CardItemProps> = ({ number, index, moveCard }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Thiết lập phần "drag" cho Card
  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Thiết lập phần "drop" cho Card
  const [, drop] = useDrop({
    accept: "CARD",
    hover: (item: { index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex; // Cập nhật lại index của item sau khi đã di chuyển
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="m-4">
      <Card number={number} />
    </div>
  );
};

const NumberGuessing = () => {
  // State lưu trữ thứ tự của các Card, ban đầu là [1, 2, 3, 4, 5]
  const [cards, setCards] = useState<number[]>([1, 2, 3, 4, 5]);

  // Hàm thay đổi thứ tự Card khi kéo thả
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const updatedCards = [...cards];
    const [removed] = updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, removed);
    setCards(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex justify-center items-center h-screen w-full bg-slate-500">
        <div className="container bg-slate-300 p-4 rounded-lg shadow-lg items-center flex flex-col">
          <h1 className="text-5xl text-red-400 m-10">Number Guessing</h1>
          <div className="flex flex-row justify-center items-center bg-slate-800 w-3/4 h-1/2 rounded-xl">
            {cards.map((number, index) => (
              <CardItem
                key={number}
                number={number}
                index={index}
                moveCard={moveCard}
              />
            ))}
          </div>
          <button>Guess</button>
        </div>
      </div>
    </DndProvider>
  );
};

export default NumberGuessing;
