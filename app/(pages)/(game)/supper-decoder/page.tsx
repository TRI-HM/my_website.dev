import React from "react";

const page = () => {
  const getRandomColor = () => {
    const basicColors = [
      "#FF0000", // Đỏ
      "#FFA500", // Cam
      "#FFFF00", // Vàng
      "#008000", // Lục
      "#0000FF", // Lam
      "#4B0082", // Chàm
      "#EE82EE", // Tím
      "#FFFFFF", // Trắng
      "#000000", // Đen
    ];
    const randomIndex = Math.floor(Math.random() * basicColors.length);
    return basicColors[randomIndex];
  };

  const randomColors = Array.from({ length: 7 }, getRandomColor);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-300">
      <h1 className="text-3xl font-bold text-center my-8">
        Supper Decoder Game
      </h1>
      <div className="container bg-black/40 rounded-lg p-6 shadow-lg">
        <div className="w-full grid grid-cols-7 gap-4">
          {randomColors.map((color, idx) => (
            <div
              key={idx}
              className="bg-gray-800 w-10 h-10 text-white rounded-lg animate-fade-in"
              style={{ backgroundColor: color }}>
              {idx + 1}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4 p-4">
          {Array.from({ length: 10 }).map((_, rowIdx) =>
            Array.from({ length: 5 }).map((_, colIdx) => (
              <React.Fragment key={`${rowIdx}-${colIdx}`}>
                <div className="border border-white rounded-md p-2 text-center">
                  {colIdx == 4 ? "" : rowIdx * 5 + colIdx + 1}
                </div>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
