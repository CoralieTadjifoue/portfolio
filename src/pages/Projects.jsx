import ProjectCard from "../components/ProjectCard.jsx";

const projects = [
  { title: "Portfolio", description: "My personal website built with React and Tailwind", tech: ["React", "Tailwind"], github: "#" },
  { title: "ARD App", description: "Security badge management tool in C#/.NET", tech: ["C#", ".NET"], github: "#" },
  { title: "Drone Delivery App", description: "Kotlin project for medication delivery with drones", tech: ["Kotlin", "Android Studio"],  github: "#" },
  { title: "Multiplayer Naval Battle Game", description: "", tech: ["Java", "REST API", "Swagger"],  github: "#" },
  { title: "Cryptography Game", description: "", tech: ["Python", "Pygame"],  github: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen p-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, index) => <ProjectCard key={index} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
