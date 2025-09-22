const ProjectCard = ({ title, description, tech, github }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="my-2">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="bg-gray-200 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
      <a href={github} className="text-blue-600 mt-2 block" target="_blank">GitHub</a>
    </div>
  );
};

export default ProjectCard;