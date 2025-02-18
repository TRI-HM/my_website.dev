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

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item: { index: number }) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      moveCard(dragIndex, hoverIndex);
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
    const dragCard = updatedCards[dragIndex];
    updatedCards[dragIndex] = updatedCards[hoverIndex];
    updatedCards[hoverIndex] = dragCard;
    setCards(updatedCards);
  };

  const handleGuess = () => {
    console.log(cards.join(" ")); // This will output "3 2 1 5 4" after reordering the cards
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
          <button
            className="bg-red-400 text-white p-2 rounded-lg mt-4 hover:bg-red-500 hover:shadow-lg"
            onClick={handleGuess}>
            Guess
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default NumberGuessing;
