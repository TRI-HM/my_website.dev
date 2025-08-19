"use client";
import React from "react";
import SidebarItem from "./_SidebarItem";
import { MdPerson, MdSettings } from "react-icons/md";

// Todo: fix positioning
const SidebarNav = () => {
  return (
    <div className="h-screen fixed top-0 right-0 p-6 overflow-y-auto flex flex-col items-center">
      <div className="bg-white p-4 rounded-2xl shadow mt-6 w-fit">
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
