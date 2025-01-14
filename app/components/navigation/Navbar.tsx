import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-400 h-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="text-white">Logo</div>
        <div className="flex items-center">
          <a href="#" className="text-white hover:text-slate-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-slate-200 ml-4">
            About
          </a>
          <a href="#" className="text-white hover:text-slate-200 ml-4">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
