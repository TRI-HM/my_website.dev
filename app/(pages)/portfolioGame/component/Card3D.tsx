import React, { ReactNode } from "react";

type Card3DProps = {
  front: ReactNode;
  back: ReactNode;
  rotationY?: number;
  translateY?: number;
  style?: React.CSSProperties;
  className?: string;
};

const Card3D: React.FC<Card3DProps> = ({
  front,
  back,
  rotationY = 0,
  translateY = 0,
  style,
  className,
}) => (
  <div
    className={`w-44 h-28 perspective ${className ?? ""}`}
    style={{
      ...style,
      transform: `translateY(${translateY}px)`,
    }}>
    <div
      className="relative w-full h-full transform-style-preserve-3d"
      style={{
        transition: "none",
        transform: `rotateY(${rotationY}deg)`,
      }}>
      {/* Front */}
      <div className="absolute w-full h-full backface-hidden bg-white shadow-md rounded-lg flex items-center justify-center text-xl font-bold">
        {front}
      </div>
      {/* Back */}
      <div className="absolute w-full h-full backface-hidden bg-blue-500 shadow-md rounded-lg flex items-center justify-center text-xl font-bold rotate-y-180">
        {back}
      </div>
    </div>
  </div>
);

export default Card3D;
