import React, { useRef} from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();    
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[10vw] lg:px-[20vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-28 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg">
          I’d love to hear from you! Feel free to reach out for any opportunity or query.
        </p>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-[#0d081f] p-6 rounded-xl border border-gray-700 shadow-[0_0_20px_rgba(130,69,236,0.3)]">
        <h3 className="text-xl text-center text-white font-semibold mb-4">Connect With Me</h3>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input type="email" name="user_email" placeholder="Your Email" required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"/>

          <input type="text" name="user_name" placeholder="Your Name" required          
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"/>

          <input type="text"name="subject"placeholder="Subject"required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none" />
  
          <textarea name="message"placeholder="Message"rows="4"required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:border-purple-500 focus:outline-none"/>

          <button type="submit"            
            className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition">
            Send  </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
