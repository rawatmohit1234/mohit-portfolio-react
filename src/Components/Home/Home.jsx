import React from "react";
import TextChange from "../TextChange";
import myImg from "../../assets/mohit.jpg.jpeg";

const Home = () => {
  return (
    <div
      id="Home"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-16">
        
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          
          <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight">
            <TextChange />
          </h1>

          <p className="text-base md:text-xl text-gray-300 leading-relaxed mt-6">
            I build 
            <span className="text-blue-400 font-medium"> modern</span>, 
            <span className="text-blue-400 font-medium"> responsive</span> and 
            <span className="text-blue-400 font-medium"> interactive</span> web applications using React.

            Focused on creating 
            <span className="text-white font-medium"> clean UI</span>, 
            <span className="text-white font-medium"> smooth UX</span>, and 
            <span className="text-white font-medium"> high performance</span> websites.
          </p>

          <div className="flex gap-5 mt-8 flex-wrap justify-center md:justify-start">
            
            <a
              href="/cv.pdf"
              download
              className="text-white py-3 px-7 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] 
              transition duration-300 hover:scale-105 
              hover:shadow-[0_0_20px_rgba(70,86,151,0.6)]"
            >
              Download CV
            </a>

            <a
              href="#Projects"
              className="border border-blue-400 text-blue-400 py-3 px-7 text-sm md:text-lg 
              rounded-3xl transition duration-300 
              hover:bg-blue-400 hover:text-white hover:scale-105"
            >
              View Projects
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center md:w-1/2 group">

          {/* SIZE WRAPPER */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex items-center justify-center">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full 
            bg-blue-500/5 blur-2xl 
            transition duration-300 
            group-hover:blur-3xl"></div>

            {/* IMAGE */}
            <div className="relative w-full h-full rounded-full overflow-hidden 
            border border-blue-400/20 
            shadow-[0_10px_30px_rgba(0,0,0,0.5)]
            transition duration-300 
            group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.7)]
            group-hover:-translate-y-1">

              <img
                src={myImg}
                alt="Mohit"
                className="w-full h-full object-cover 
                transition duration-300 
                group-hover:scale-105"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;