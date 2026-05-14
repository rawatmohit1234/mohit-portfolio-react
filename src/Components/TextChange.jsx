import { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["I'm Mohit Rawat", "Frontend Developer", "React Developer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="text-white">Hi, </span>
      <span className="text-cyan-400 transition-all duration-500">
        {texts[index]}
      </span>
    </>
  );
};

export default TextChange;