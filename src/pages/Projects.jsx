import ProjectCard from "../components/ProjectCard.jsx";

export const projects = [
  { title: "Portfolio", 
    id:"portfolio", 
    description: "My personal website built with React and Tailwind", 
    tech: ["React", "Tailwind"], 
    github: "#" 
  },
  { title: "ARD App", 
    id: "ard", 
    description: "Security badge management tool in C#/.NET", 
    tech: ["C#", ".NET", "WPF", "LINQ", "SonarQube"], 
    github: "#" ,
    screenshots: [
  { src: "/screenshots/ard_1.png", description: "Dashboard view" },
  { src: "/screenshots/ard_2.png", description: "Badge validation screen" },
  { src: "/screenshots/ard_3.png", description: "Reports page" },
  { src: "/screenshots/ard_4.png", description: "User settings" },
  { src: "/screenshots/ard_5.png", description: "Analytics dashboard" },
]
  },
  { title: "Drone Delivery App", 
    id:"delivery_app", 
    description: "Kotlin project for medication delivery with drones", 
    tech: ["Kotlin", "Android Studio"],  
    github: "#" 
  },
  { title: "Multiplayer Naval Battle Game", 
    id:"naval_battle_game", 
    description: "", 
    tech: ["Java", "REST API", "Swagger"],  
    github: "#" },
  { title: "Cryptography Game", 
    id:"crypto_game",
    description: "", 
    tech: ["Python", "Pygame"],  
    github: "#" 
  },
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
