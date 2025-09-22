import { useParams, useNavigate } from "react-router-dom";
import { projects } from "./Projects";
import ProjectScreenshotsInline from "../components/ProjectScreenshotsInline.jsx";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) return <p className="text-center mt-10">Project not found</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-4">{project.title}</h1>
      <p className="text-gray-700 text-center mb-6">{project.description}</p>

      {/* Inline Screenshots Carousel */}
      <ProjectScreenshotsInline screenshots={project.screenshots} />

      {/* Tech Stack */}
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on GitHub
        </a>
      )}
    </div>
  );
};

export default ProjectDetail;
