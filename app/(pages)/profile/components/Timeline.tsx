import React from "react";
import { FaProjectDiagram, FaBuilding, FaBriefcase } from "react-icons/fa";

const timelineData = [
  {
    time: "2024 - Hiện tại",
    company: "86 Creativ",
    icon: <FaBuilding className="text-blue-600" />,
    projects: [
      {
        name: "Dự án 1",
        link: "#",
        icon: <FaProjectDiagram className="text-blue-400" />,
      },
      {
        name: "Dự án 2",
        link: "#",
        icon: <FaProjectDiagram className="text-blue-400" />,
      },
      {
        name: "Dự án 3",
        link: "#",
        icon: <FaProjectDiagram className="text-blue-400" />,
      },
    ],
  },
  {
    time: "2022 - 2024",
    company: "Viviix",
    icon: <FaBuilding className="text-green-600" />,
    projects: [
      {
        name: "Dự án 1",
        link: "#",
        icon: <FaProjectDiagram className="text-green-400" />,
      },
      {
        name: "Dự án 2",
        link: "#",
        icon: <FaProjectDiagram className="text-green-400" />,
      },
      {
        name: "Dự án 3",
        link: "#",
        icon: <FaProjectDiagram className="text-green-400" />,
      },
    ],
  },
  {
    time: "2018 - 2019",
    company: "Seven Eleven",
    icon: <FaBriefcase className="text-gray-600" />,
    projects: [
      {
        name: "Nhân viên fulltime",
        link: "#",
        icon: <FaBriefcase className="text-gray-400" />,
      },
    ],
  },
];

const Timeline = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 w-full">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Timeline
      </h2>
      <div className="relative">
        {/* Vertical timeline line in the center */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-500 -translate-x-1/2 z-0 rounded-full" />
        <div className="relative z-10">
          {timelineData.map((item, idx) => {
            const isRight = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`mb-10 last:mb-0 flex w-full items-start relative ${
                  isRight ? "flex-row" : "flex-row-reverse"
                }`}>
                {/* Timeline dot */}
                <div
                  className={`w-1/2 flex ${
                    isRight ? "justify-end mr-5" : "justify-start ml-5"
                  } relative`}>
                  <div className="bg-white rounded-full border-2 border-blue-300 w-10 h-10 flex items-center justify-center shadow-md z-10">
                    {item.icon}
                  </div>
                </div>
                {/* Content */}
                <div
                  className={`w-1/2 ${
                    isRight ? "pl-6 text-left" : "pr-6 text-right"
                  }`}>
                  <div
                    className={`flex flex-col gap-2 ${
                      isRight ? "justify-start" : "justify-end"
                    }`}>
                    <span className="text-xl font-semibold text-blue-800">
                      {item.time}
                    </span>
                    <span className="text-base font-bold text-blue-600">
                      {item.company}
                    </span>
                  </div>
                  <ul className={`mt-2 space-y-1 ${isRight ? "ml-4" : "mr-4"}`}>
                    {item.projects.map((project, pidx) => (
                      <li
                        key={pidx}
                        className={`flex items-center gap-2 ${
                          isRight ? "justify-start" : "justify-end"
                        }`}>
                        {isRight ? (
                          <>
                            <span>{project.icon}</span>
                            <a
                              href={project.link}
                              className="text-blue-500 hover:underline font-medium"
                              target="_blank"
                              rel="noopener noreferrer">
                              {project.name}
                            </a>
                          </>
                        ) : (
                          <>
                            <a
                              href={project.link}
                              className="text-blue-500 hover:underline font-medium"
                              target="_blank"
                              rel="noopener noreferrer">
                              {project.name}
                            </a>
                            <span>{project.icon}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
