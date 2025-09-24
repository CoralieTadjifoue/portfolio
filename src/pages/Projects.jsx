import ProjectCard from "../components/ProjectCard.jsx";

export const projects = [
  { title: "Portfolio", 
    id:"portfolio", 
    description: "My personal website built with React and Tailwind", 
    tech: ["React", "Tailwind"], 
    github: "https://github.com/CoralieTadjifoue/portfolio" 
  },
  { title: "ARD App", 
    id: "ard", 
    description: "Security badge management tool in C#/.NET", 
    tech: ["C#", ".NET", "WPF", "LINQ", "SonarQube"], 
    screenshots: [
  { type: "image", src: "/screenshots/ard_1.png", description: "Homepage" },
  { type: "image", src: "/screenshots/ard_2.png", description: "File import screen" },
  { type: "image", src: "/screenshots/ard_3.png", description: "Reports page  with a search engine showing badge details: name, first name, status, end date, and ID number" },
  { type: "image", src: "/screenshots/ard_4.png", description: "Access list management page" },
  { type: "image", src: "/screenshots/ard_5.png", description: "User settings" },
]
  },
  { title: "Drone Delivery App", 
    id:"delivery_app", 
    description: "Kotlin project for medication delivery with drones", 
    tech: ["Kotlin", "Android Studio", "SQL"],  
    github: "",
    screenshots: [
  { type: "video", src: "/screenshots/drone_demo.mp4", description: "Demo video of drone delivery app \n The patient account is in purple, the pharmacy account is in green and the delivery person account is in blue" },
] 
  },
  { title: "Multiplayer Naval Battle Game", 
    id:"naval_battle_game", 
    description: "", 
    tech: ["Java", "REST API", "Swagger", "Spring Boot"],  
    github: "https://github.com/CoralieTadjifoue/naval_battle_game",
    screenshots: [
  { type: "video", src: "/screenshots/demo_naval_game.mp4", description: "Demo video of the naval battle game." },
] 
  },
  { title: "Cryptography Game", 
    id:"crypto_game",
    description: "Cryptris is a visual/puzzle game inspired by the article *Cryptris I* from CNRS.  It combines ternary encryption with graphical block manipulation to reveal a hidden message.", 
    tech: ["Python", "Pygame"],  
    github: "https://github.com/CoralieTadjifoue/cryptography_game",
    screenshots: [
  { type: "video", src: "/screenshots/demo_crypto.mp4", description: "Demo video of my crytography minigame \n 1. The player chooses the size of the word to be encrypted \n 2. The player enters a word \n 3. The word is converted into a ternary code: each letter is mapped to a sequence of 4 “trits” (values in {−1, 0, +1}) according to a predefined table. \n 4. A secret key is randomly generated. This key influences the form, position, and “weight” of the displayed blocks.  \n 5. The encrypted message is obtained by combining the ternary code with the key (rotations, sums, multiplications, etc.). \n 6. The game board shows two block sets: blockes of the secret key on top and blocks of the encrypted message at the bottom \n The player manipulates the blocks (horizontal moves, color change, block drop, etc.) in order to “stabilize” or “align” the encrypted message blocks into a special configuration. \n 7. The end condition (`check_end_game`) is reached when all encrypted elements are reduced to one of the simple states (−1, 0, or +1)  " },
] 
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
