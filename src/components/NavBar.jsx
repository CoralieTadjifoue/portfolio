import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.querySelector(`#${id}`);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Coralie TADJIFOUE Portfolio</h1>
        <div className="flex items-center space-x-4">
          <button onClick={() => handleClick("home")} className="hover:text-blue-600">{t("navbar.home")}</button>
          <button onClick={() => handleClick("about")} className="hover:text-blue-600">{t("navbar.about")}</button>
          <button onClick={() => handleClick("projects")} className="hover:text-blue-600">{t("navbar.projects")}</button>

          
          <div className="flex gap-2 border rounded px-2 py-1">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-2 py-1 rounded ${i18n.language === "en" ? "bg-blue-600 text-white" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => i18n.changeLanguage("fr")}
              className={`px-2 py-1 rounded ${i18n.language === "fr" ? "bg-blue-600 text-white" : ""}`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
