import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="min-h-screen py-20 px-6 md:px-20 text-white bg-[#0f172a]"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
        My Projects
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        <ProjectCard
          title="Image Search App"
          main="A responsive image search app using React and Tailwind CSS."
          liveLink="https://images-search-app-olive.vercel.app/"
          githubLink="https://github.com/rawatmohit1234/Images-Search-App"
        />

        <ProjectCard
          title="Image Background Remover"
          main="A responsive image background remover app using React and Tailwind CSS."
          liveLink="https://image-background-remover-pied-seven.vercel.app/"
          githubLink="https://github.com/rawatmohit1234/Image-Background-Remover"
        />

        <ProjectCard
          title="Movie Search App"
          main="A responsive movie search app using React and Tailwind CSS."
          liveLink="https://movie-search-app-react-eight.vercel.app/"
          githubLink="https://github.com/rawatmohit1234/Movie-Search-App-React-"
        />

      </div>
    </div>
  );
};

export default Projects;