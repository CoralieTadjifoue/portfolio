import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
   
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
  
      const section = document.querySelector(`#${id}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-bold ml-1">Portfolio</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => handleClick("home")} className="hover:text-blue-600">
            {t("navbar.home")}
          </button>
          <button onClick={() => handleClick("about")} className="hover:text-blue-600">
            {t("navbar.about")}
          </button>
          <button onClick={() => handleClick("projects")} className="hover:text-blue-600">
            {t("navbar.projects")}
          </button>

          {/* Language buttons (desktop) */}
          <div className="flex items-center gap-2 border rounded px-1 py-1">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-2 py-1 rounded text-sm ${i18n.language === "en" ? "bg-blue-600 text-white" : "text-gray-700"}`}
              aria-label="English"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("fr")}
              className={`px-2 py-1 rounded text-sm ${i18n.language === "fr" ? "bg-blue-600 text-white" : "text-gray-700"}`}
              aria-label="Français"
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile  */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
  
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

  
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold">Menu</span>
                <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <button onClick={() => handleClick("home")} className="text-left text-base">
                  {t("navbar.home")}
                </button>
                <button onClick={() => handleClick("about")} className="text-left text-base">
                  {t("navbar.about")}
                </button>
                <button onClick={() => handleClick("projects")} className="text-left text-base">
                  {t("navbar.projects")}
                </button>

                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-500 mb-2">{t("navbar.language")}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`px-3 py-1 rounded text-sm ${i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => changeLanguage("fr")}
                      className={`px-3 py-1 rounded text-sm ${i18n.language === "fr" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
                    >
                      FR
                    </button>
                  </div>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
