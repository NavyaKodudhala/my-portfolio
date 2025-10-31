
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projectsData";

export default function ProjectsList() {
  const [githubProjects, setGithubProjects] = useState([]);

  useEffect(() => {
    // ✅ Replace "navyakodudhala" with your actual GitHub username
    fetch("https://api.github.com/users/navyakodudhala/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .slice(0, 6) // show latest 6
          .map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description available.",
            tech: ["GitHub"], // placeholder tech stack
            link: repo.html_url,
          }));
        setGithubProjects(filtered);
      })
      .catch((err) => console.error("Error fetching GitHub repos:", err));
  }, []);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-600">
        Latest Projects 
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {githubProjects.length > 0 ? (
          githubProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center text-slate-500 col-span-full">
            Loading GitHub projects...
          </p>
        )}
      </div>

      <h2 className="text-3xl font-bold mb-6 text-center text-cyan-600">
        Personal Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
