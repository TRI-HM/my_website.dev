import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="h-20 rounded-b-3xl bg-white container mx-auto flex justify-between items-center px-10">
        <div>
          <Image
            className="w-32"
            src={"/images/theon-logo.png"}
            width={500}
            height={500}
            alt="Logo"
          />
        </div>
        <div className="flex items-center">
          <a href="#" className="hover:text-red-300">
            Home
          </a>
          <a href="#" className=" hover:text-red-300 ml-4">
            About
          </a>
          <a href="#" className=" hover:text-red-300 ml-4">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
