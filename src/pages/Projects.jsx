import React from "react";

const projects = [
  { title: "New Bangladesh", link: "https://shuvodipdashimu.github.io/B11A1-assignment-1/" },
  { title: "Kids School", link: "https://shuvodipdashimu.github.io/B11-A2-Kids-School/" },
  { title: "Living Lab", link: "https://b11-a3-living-lab-c-0001.vercel.app/" },
  { title: "Router Warrior", link: "https://router-warrior-001.netlify.app/" },
  { title: "Fictional Characters", link: "https://fic-chars.vercel.app/" },
  { title: "Dev Board", link: "https://a5-dev-board-pi.vercel.app/" },
  { title: "Lavender Appstore", link: "https://shuvodip-lavender-appstore.netlify.app" },
  { title: "Binge Bangers", link: "https://binge-bangers.vercel.app/" },
];

const Projects = () => {
  return (
    <div className="px-6 py-12 bg-base-200 min-h-screen">
      <h1 className="text-5xl font-bold text-center mb-12 tracking-wide">
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-base-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between p-16"
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-6">
              {project.title}
            </h2>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-xl bg-white text-black py-6 w-full border border-gray-300 hover:bg-gray-100"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;