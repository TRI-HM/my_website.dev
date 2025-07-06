import React, { ReactNode } from "react";

type CardRainItemProps = {
  content: ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

const CardRainItem: React.FC<CardRainItemProps> = ({
  content,
  style,
  className,
}) => (
  <div
    className={`w-44 h-28 bg-white shadow-md rounded-lg flex items-center justify-center text-xl font-bold ${
      className ?? ""
    }`}
    style={style}>
    {content}
  </div>
);

export default CardRainItem;
