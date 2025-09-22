import React from "react";
import profilePic from "../assets/profile.png"; 
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-20 pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 animate-pulse-slow" />

      {/* Content */}
      <div className="relative flex flex-col md:flex-row items-center w-full">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Coralie</h1>
          <p className="text-xl text-gray-700 mb-6">
            <Typewriter
              words={[
                "5th-year Software Engineering Student",
                "Aspiring Software/AI Engineer",
                "Tech Enthusiast"
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            See My Projects
          </motion.a>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            <a href="https://github.com/CoralieTadjifoue" target="_blank" rel="noreferrer">
              <Github className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
            <a href="https://www.linkedin.com/in/coralie-tadjifoué-896a9b329" target="_blank" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-gray-700 hover:text-blue-600 transition" />
            </a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src={profilePic}
            alt="Coralie T."
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
