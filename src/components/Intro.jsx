import React from "react";
import profilePic from "../assets/profile.png"; 

const Intro = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-6 md:px-20"
    >
      {/* Text */}
      <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Coralie</h1>
        <p className="text-xl text-gray-700 mb-6">
          5th-year Software Engineering Student | Aspiring Developer
        </p>
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          See My Projects
        </a>
      </div>

      {/* Photo */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={profilePic}
          alt="Coralie T."
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Intro;
