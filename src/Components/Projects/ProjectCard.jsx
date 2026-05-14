import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, main, liveLink, githubLink }) => {
  return (
    <div
      className="bg-[#1e293b] p-6 rounded-2xl shadow-lg 
      hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] 
      transition duration-300"
    >
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold">{title}</h2>

      {/* Description */}
      <p className="text-gray-300 mt-3 leading-relaxed">{main}</p>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">

        {/* Live Demo */}
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm 
          hover:bg-blue-600 transition duration-300"
        >
          <FiExternalLink /> Live
        </a>

        {/* GitHub */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-400 text-gray-300 px-4 py-2 rounded-lg text-sm 
          hover:bg-gray-700 hover:text-white transition duration-300"
        >
          <FaGithub /> Code
        </a>

      </div>
    </div>
  );
};

export default ProjectCard;