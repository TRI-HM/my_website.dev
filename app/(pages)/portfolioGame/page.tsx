import React from "react";
import "./styles.css";
import { Metadata } from "next";
import CardRain from "./component/CardRain";
import CardDock from "./component/CardDock";

export const metadata: Metadata = {
  title: "Portfolio Game",
  description: "A fun interactive portfolio game",
};

const PortfolioGame = () => {
  return (
    <main className="relative min-h-screen bg-gray-900">
      <CardRain cardCount={5} />
      <CardDock />
    </main>
  );
};

export default PortfolioGame;
