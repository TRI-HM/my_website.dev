"use client";
import React, { useState } from "react";
import { MdHome } from "react-icons/md";

type SidebarItemProps = {
  icon?: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
};

const SidebarItem = ({
  icon = <MdHome className="text-xl mr-2" />,
  tooltip = "Home",
  onClick,
}: SidebarItemProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      className="flex items-center p-2 hover:bg-gray-100 relative cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
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
