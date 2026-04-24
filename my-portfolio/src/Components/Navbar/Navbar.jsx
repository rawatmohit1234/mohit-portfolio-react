import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">

      <div className="flex justify-between items-center px-6 py-3 text-white">
        
        {/* Logo */}
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm md:text-base">
          {["About", "Skills", "Experience", "Projects", "Contact"].map(
            (item, index) => (
              <a key={index} href={`#${item}`}>
                <li className="cursor-pointer hover:text-cyan-300 transition duration-300">
                  {item}
                </li>
              </a>
            )
          )}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          {menu ? (
            <RiCloseLine size={26} onClick={() => setMenu(false)} />
          ) : (
            <RiMenu2Line size={26} onClick={() => setMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          menu ? "flex" : "hidden"
        } flex-col items-center gap-4 pb-4 text-white md:hidden`}
      >
        {["About", "Skills", "Experience", "Projects", "Contact"].map(
          (item, index) => (
            <a key={index} href={`#${item}`}>
              <li className="cursor-pointer hover:text-cyan-300 transition duration-300">
                {item}
              </li>
            </a>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;