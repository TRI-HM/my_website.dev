"use client";
import React from "react";
import SidebarItem from "./_SidebarItem";
import { MdPerson, MdSettings } from "react-icons/md";

const SidebarNav = () => {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <SidebarItem
          icon={<MdSettings className="text-xl" />}
          tooltip="Settings"
          onClick={() => console.log("Settings clicked")}
        />

        <SidebarItem
          icon={<MdPerson className="text-xl" />}
          tooltip="Profile"
          onClick={() => console.log("Profile clicked")}
        />
      </div>
    </div>
  );
};

export default SidebarNav;
