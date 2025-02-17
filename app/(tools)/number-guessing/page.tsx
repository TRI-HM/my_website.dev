"use client";

import Card from "@/app/components/numberGuessing/Card";
import React, { useState } from "react";


const NumberGuessing = () => {
  const [numberTarget, setNumberTarget] = useState<number>(12354);
  const [position, setPosition] = useState<number>(0);
  const [guess, setGuess] = useState<number[]>([0, 0, 0, 0, 0]);
  
  return (
    <div className="flex justify-center items-center h-[100dvh] w-full bg-slate-500">
      <div className="container bg-slate-300 p-4 rounded-lg shadow-lg items-center flex flex-col h-[70dvh]">
        <h1 className="text-5xl text-red-400 m-10">Number Guessing</h1>
        <div className="flex flex-row justify-center items-center m-5 text-2xl">
          <span>
            Có <b>{position}</b> số dự đoán đúng.
          </span>
        </div>
        <div className="flex flex-row justify-center items-center bg-slate-800 w-3/4 h-1/2 rounded-xl">
          <Card number={1} />
          <Card number={2} />
          <Card number={3} />
          <Card number={4} />
          <Card number={5} />
        </div>
        <button>Guess</button>
      </div>
    </div>
  );
};

export default NumberGuessing;
