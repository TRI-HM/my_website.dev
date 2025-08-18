import React from "react";

interface ButtonProps {
  handleOnClick: () => void;
  content: string;
}

const Button = (prop: ButtonProps) => {
  return (
    <button
      className="bg-red-400 text-white px-5 p-2 rounded-lg mt-4 hover:bg-red-500 hover:shadow-lg"
      onClick={prop.handleOnClick}>
      {prop.content}
    </button>
  );
};

export default Button;
