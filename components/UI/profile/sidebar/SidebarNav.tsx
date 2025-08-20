"use client";
import React, { useState } from "react";
import SidebarItem from "./_SidebarItem";
import { MdPerson, MdHome } from "react-icons/md";
import { IoBriefcase, IoMail } from "react-icons/io5";
import { FaStream } from "react-icons/fa";

const sidebarItems = [
  {
    id: "home",
    icon: <MdHome />,
    tooltip: "Home",
    onClick: () => console.log("Home clicked"),
  },
  {
    id: "profile",
    icon: <MdPerson />,
    tooltip: "Profile",
    onClick: () => console.log("Profile clicked"),
  },
  {
    id: "resume",
    icon: <IoBriefcase />,
    tooltip: "Resume",
    onClick: () => console.log("Resume clicked"),
  },
  {
    id: "services",
    icon: <FaStream />,
    tooltip: "Services",
    onClick: () => console.log("Services clicked"),
  },
  {
    id: "contact",
    icon: <IoMail />,
    tooltip: "Contact",
    onClick: () => console.log("Contact clicked"),
  },
];

const SidebarNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <div className="bg-white/20 p-4 rounded-2xl shadow-xl">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            tooltip={item.tooltip}
            onClick={item.onClick}
            isHovered={hoveredItem === item.id}
            isDimmed={hoveredItem !== null && hoveredItem !== item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarNav;
