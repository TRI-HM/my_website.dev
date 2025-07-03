import Link from "next/link";
import React from "react";

interface NavigateLinkProps {
  href: string;
  label: string;
}

const NavigateLink = ({ href, label }: NavigateLinkProps) => {
  return (
    <div>
      <div className="flex items-center justify-center rounded-full bg-gray-300 py-2 px-6 hover:bg-gray-400 transition-colors duration-300">
        <Link href={href}>
          <li className="text-bold text-black">{label}</li>
        </Link>
      </div>
    </div>
  );
};

export default NavigateLink;
