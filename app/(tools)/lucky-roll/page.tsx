"use client";
import Image from "next/image";
import React, { useState } from "react";

const LuckyRoll = () => {
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const generateRandomNumber = () => {
    setIsRolling(true);
    setTimeout(() => {
      const newRandomNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
      setRandomNumber(newRandomNumber);
      setIsRolling(false);
    }, 2000);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Lucky Roll</h1>
      <p>Click the button to roll a number between 1 and 10.</p>
      <div className="w-full flex justify-center">
        {/* Image of a spinning wheel */}
        <Image
          src="/images/lucky-roll.png"
          alt="Lucky Roll"
          width={200}
          height={200}
          style={{
            transition: "transform 3s linear",
            transform: isRolling ? "rotate(3600deg)" : "rotate(0deg)",
          }}
        />
      </div>
      <button onClick={generateRandomNumber} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll"}
      </button>
      {randomNumber !== null && <p>Result: {randomNumber}</p>}
    </div>
  );
};

export default LuckyRoll;
