import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, tech, github, id }) => {
  return (
    <Link to={`/projects/${id}`} className="block hover:scale-105 transition-transform">
      <div className="bg-white rounded-lg shadow p-5 h-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
