import React from "react";
import "./styles.css";
import { Metadata } from "next";
import CardRain from "./component/CardRain";

export const metadata: Metadata = {
  title: "Portfolio Game",
  description: "A fun interactive portfolio game",
};

const PortfolioGame = () => {
  return (
    <main className="relative min-h-screen bg-gray-900">
      <CardRain cardCount={5} />
      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <h1 className="text-white text-5xl font-bold">Portfolio Game</h1>
      </div>
    </main>
  );
};

export default PortfolioGame;
