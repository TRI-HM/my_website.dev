"use client";
import React, { useState } from "react";
import { MdHome } from "react-icons/md";

type SidebarItemProps = {
  icon?: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
  isHovered?: boolean;
  isDimmed?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const SidebarItem = ({
  icon = <MdHome className="text-xl mr-2" />,
  tooltip = "Home",
  onClick,
  isHovered = false,
  isDimmed = false,
  onMouseEnter,
  onMouseLeave,
}: SidebarItemProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    onMouseLeave?.();
  };

  return (
    <div
      className={`flex items-center p-2 hover:text-[#28e98c] hover:bg-gray-200 rounded-full relative cursor-pointer transition-all duration-300 ease-in-out ${
        isDimmed ? "opacity-50" : "opacity-100"
      } ${isHovered ? "scale-110 text-[#28e98c] bg-gray-200" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}>
      {icon}

      {/* Custom Tooltip */}
      {showTooltip && tooltip && (
        <div className="absolute right-full mr-2 px-2 py-1 bg-gray-800 text-white text-sm rounded shadow-lg whitespace-nowrap z-10">
          {tooltip}
          {/* Arrow pointing to the right (towards the icon) */}
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
