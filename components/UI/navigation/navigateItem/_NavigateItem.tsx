import Link from "next/link";
import React from "react";

interface NavigateItemProps {
  href: string;
  label: string;
}

const NavigateItem = ({ href, label }: NavigateItemProps) => {
  return (
    <li className="list-none">
      <Link
        href={href}
        className="uppercase flex items-center justify-center rounded-full bg-gray-300 py-2 px-6 hover:bg-gray-400 transition-colors duration-300 font-bold text-gray-700 hover:text-white">
        {label}
      </Link>
    </li>
  );
};

export default NavigateItem;
