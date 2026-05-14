import React from "react";
import { IoArrowForward } from "react-icons/io5";
import aboutImg from "../../assets/about.png";

const About = () => {
  return (
    <div
      id="About"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16">
        
        {/* TEXT */}
        <div className="md:w-2/4 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tighter">
            About Me
          </h1>

          {/* Tag */}
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-blue-400">
            <IoArrowForward />
            <span className="text-lg">Frontend Developer</span>
          </div>

          {/* PARAGRAPHS */}
          <p className="text-sm md:text-xl mt-5 leading-relaxed text-gray-300">
            Hi, I'm <span className="text-white font-semibold">Mohit</span> — a
            passionate Frontend Developer.
          </p>

          <p className="text-sm md:text-xl mt-3 leading-relaxed text-gray-300">
            I specialize in{" "}
            <span className="text-blue-400 font-semibold">React.js</span>.
          </p>

          <p className="text-sm md:text-xl mt-3 leading-relaxed text-gray-300">
            I love building clean UI and smooth experiences.
          </p>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm hover:scale-105 transition"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center items-center md:w-1/2">
          
          {/* Glow */}
          <div className="absolute w-52 h-52 md:w-64 md:h-64 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src={aboutImg}
            alt="Mohit"
            className="relative w-44 md:w-60 lg:w-64 rounded-2xl 
            transition duration-300 hover:scale-105 shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default About;