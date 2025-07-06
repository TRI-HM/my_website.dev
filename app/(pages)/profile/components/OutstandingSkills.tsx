import React from "react";
import {
  FaReact,
  FaProjectDiagram,
  FaUsers,
  FaLightbulb,
  FaLanguage,
  FaUserTie,
} from "react-icons/fa";

const OutstandingSkills = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-200 rounded-3xl shadow-2xl p-10 max-w-7xl mx-auto border-4 border-blue-300 overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 opacity-30 rounded-full blur-2xl animate-pulse z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl animate-pulse z-0"></div>
      <h2 className="relative z-10 text-4xl font-extrabold mb-8 text-blue-800 text-center tracking-widest drop-shadow-xl uppercase">
        Outstanding Skills
      </h2>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex items-start gap-4 bg-white/80 shadow-lg border border-blue-100 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
          <span className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            <FaReact />
          </span>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-1 group-hover:underline">
              Web Development
            </h3>
            <p className="text-gray-700">
              ReactJS, NextJS, Tailwind CSS, Chakra UI
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white/80 shadow-lg border border-blue-100 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
          <span className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            <FaProjectDiagram />
          </span>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-1 group-hover:underline">
              Project Management
            </h3>
            <p className="text-gray-700">Agile, Scrum, Kanban</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white/80 shadow-lg border border-blue-100 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
          <span className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            <FaUsers />
          </span>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-1 group-hover:underline">
              Team Leadership
            </h3>
            <p className="text-gray-700">Mentoring, Coaching, Collaboration</p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white/80 shadow-lg border border-blue-100 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
          <span className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            <FaLightbulb />
          </span>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-1 group-hover:underline">
              Problem Solving
            </h3>
            <p className="text-gray-700">
              Analytical Thinking, Creativity, Resourcefulness
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white/80 shadow-lg border border-blue-100 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
          <span className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            <FaLanguage />
          </span>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-1 group-hover:underline">
              English Skills
            </h3>
            <p className="text-gray-700">
              TOEIC 900+, Communication, Presentation, Negotiation
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white/80 shadow-lg border border-blue-100 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl transition-transform duration-300 group">
          <span className="text-4xl text-blue-500 group-hover:text-blue-700 transition-colors duration-300">
            <FaUserTie />
          </span>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-1 group-hover:underline">
              Management
            </h3>
            <p className="text-gray-700">
              Planning, Risk Management, Decision Making, Conflict Resolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutstandingSkills;
