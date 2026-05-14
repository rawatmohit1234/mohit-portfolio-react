import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiVisualstudiocode, SiVite, SiVercel, SiNetlify } from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "90%" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "75%" },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "70%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "80%" },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: "70%" },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" />, level: "75%" },
  { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-400" />, level: "85%" },
  { name: "Chrome DevTools", icon: <BsBrowserChrome className="text-green-400" />, level: "80%" },

  // 🔥 NEW ADDED
  { name: "Vite", icon: <SiVite className="text-purple-400" />, level: "80%" },
  { name: "Vercel", icon: <SiVercel className="text-white" />, level: "75%" },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" />, level: "75%" },
];

const Card = ({ item }) => {
  return (
    <div className="bg-[#1f2545] p-6 rounded-2xl shadow-lg 
      hover:scale-105 hover:shadow-blue-500/30 
      transition duration-300">

      <div className="text-4xl mb-3">{item.icon}</div>
      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div
          className="bg-blue-400 h-2 rounded-full transition-all duration-500"
          style={{ width: item.level }}
        ></div>
      </div>

      <p className="text-sm mt-2 text-gray-300">{item.level}</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="Skills" className="py-14 bg-[#171d32] text-white">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        {/* Frontend */}
        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
          Frontend
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {skills.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

        {/* Tools */}
        <h3 className="text-2xl font-semibold mb-6 text-green-400">
          Tools & Deployment
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;