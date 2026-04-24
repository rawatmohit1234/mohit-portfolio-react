import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

// ✅ Import all logos from assets
import cetpaLogo from "../../assets/cetpa.png";
import shooliniLogo from "../../assets/shoolini.png";
import cbseLogo from "../../assets/cbse.png";

const timelineData = [
  {
    title: "Frontend Developer Intern",
    company: "CETPA Infotech Pvt. Ltd.",
    duration: "August2025 – January 2026",
    icon: <FaBriefcase />,
    logo: cetpaLogo,
    skills: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "Developed responsive web applications using React.js and Tailwind CSS. Built reusable UI components and improved user experience.",
  },
  {
    title: "MERN Stack Trainee",
    company: "CETPA Infotech Pvt. Ltd.",
    duration: "March 2025 – August 2025",
    icon: <FaBriefcase />,
    logo: cetpaLogo,
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    description:
      "Worked on full-stack MERN applications with REST APIs and database integration.",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    company: "Shoolini University, Himachal Pradesh",
    duration: "2025 – Present",
    icon: <FaGraduationCap />,
    logo: shooliniLogo,
    skills: ["Web Development", "DSA", "Database"],
    description:
      "Pursuing BCA with focus on full-stack development and modern technologies.",
  },
  {
    title: "Class 12 (CBSE)",
    company: "CBSE Board",
    duration: "Completed",
    icon: <FaGraduationCap />,
    logo: cbseLogo,
    skills: [],
    description: "Completed higher secondary education.",
  },
  {
    title: "Class 10 (CBSE)",
    company: "CBSE Board",
    duration: "Completed",
    icon: <FaGraduationCap />,
    logo: cbseLogo,
    skills: [],
    description: "Completed secondary education.",
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Experience & Education
        </h2>

        <div className="relative border-l border-gray-700">

          {timelineData.map((item, index) => (
            <div key={index} className="mb-12 ml-10 relative">

              {/* ICON */}
              <div className="absolute -left-14 top-2 flex items-center justify-center w-10 h-10 
              bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                {item.icon}
              </div>

              {/* CARD */}
              <div className="bg-[#1f2545] p-6 rounded-xl border border-transparent 
              hover:border-blue-500 hover:shadow-blue-500/30 hover:shadow-xl 
              transition duration-300">

                {/* TOP ROW */}
                <div className="flex items-center gap-4 mb-3">

                  {/* LOGO */}
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt="logo"
                      className="w-12 h-12 object-contain bg-white p-1 rounded-md"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  )}

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-blue-400 text-sm">
                      {item.company}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-3">
                  {item.duration}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                {item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;