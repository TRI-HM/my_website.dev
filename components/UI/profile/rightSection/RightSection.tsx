import React from "react";
import _Introduce from "./components/_Introduce";
import _About from "./components/_About";
import _Experience from "./components/_Experience";
import _Specialization from "./components/_Specialization";
import _ContactForm from "./components/_ContactForm";

const RightSection = () => {
  return (
    <div className="p-6 min-h-screen">
      <_Introduce />
      <_About />
      <_Experience />
      <_Specialization />
      <_ContactForm />
    </div>
  );
};

export default RightSection;
