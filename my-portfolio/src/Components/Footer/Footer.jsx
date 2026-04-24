import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <section
      id="Contact"
      className="bg-[#020617] text-white py-12 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Contact Me
          </h1>
          <p className="text-gray-400">
            Let’s build something amazing together 🚀
          </p>
        </div>

        {/* RIGHT */}
        <ul className="space-y-4 text-sm md:text-lg">

          {/* EMAIL */}
          <li className="flex items-center gap-3 hover:text-blue-400 transition duration-300">
            <MdOutlineEmail size={22} />
            <a
              href="mailto:mdhirawat2004@gmail.com"
              className="hover:underline"
            >
              mdhirawat2004@gmail.com
            </a>
          </li>

          {/* LINKEDIN */}
          <li className="flex items-center gap-3 hover:text-blue-400 transition duration-300">
            <CiLinkedin size={24} />
            <a
              href="https://www.linkedin.com/in/mohit-rawat-02a6a230a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/mohit-rawat-02a6a230a
            </a>
          </li>

          {/* GITHUB */}
          <li className="flex items-center gap-3 hover:text-blue-400 transition duration-300">
            <FaGithub size={22} />
            <a
              href="https://github.com/rawatmohit1234"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/rawatmohit1234
            </a>
          </li>

        </ul>
      </div>

      {/* FOOTER PART */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} Mohit Rawat. All rights reserved.
        <p className="text-xs mt-2">
          Built with ❤️ using React & Tailwind
        </p>
      </div>
    </section>
  );
};

export default footer;