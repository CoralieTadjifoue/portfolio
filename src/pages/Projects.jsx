import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard.jsx";

const projectKeys = ["portfolio", "ard", "delivery_app", "naval_battle_game", "crypto_game", "nosql_project"];

export const getProjects = (t) => 
  projectKeys.map(key => ({ id: key, ...t(`projects.${key}`, { returnObjects: true }) }));

const Projects = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);

  return (
    <section id="projects" className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-6">{t("projects.title")}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => <ProjectCard key={index} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
