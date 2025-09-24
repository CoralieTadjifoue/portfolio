import React from "react"; 
import profilePic from "../assets/profile.png"; 
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Linkedin } from "lucide-react";
import ThumbsUpButton from "../components/ThumbsUp"; 
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();
  const location = useLocation();


  const handleClick = (id) => {
      const section = document.querySelector(`#${id}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden px-6 md:px-20 pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 animate-pulse-slow" />

      <div className="relative flex flex-col md:flex-row items-center w-full">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <h1 className="text-5xl font-bold mb-4">{t("home.greeting")}</h1>
          <p className="text-xl text-gray-700 mb-6">
            <Typewriter
              words={t("home.typewriter", { returnObjects: true })}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleClick("projects")}
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            {t("home.seeProjects")}
          </motion.button>

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

        {/* Photo + Thumbs-Up */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col items-center"
        >
          <img
            src={profilePic}
            alt="Coralie T."
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
          
          <div className="mt-10 flex flex-col items-center">
          <span className="mb-2 text-xl font-semibold text-gray-700 italic">
            {t("home.thumbsUp")}
          </span>
          <ThumbsUpButton />
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
