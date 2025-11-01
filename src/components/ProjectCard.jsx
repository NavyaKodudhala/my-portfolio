import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="border rounded-xl p-6 flex flex-col gap-4 h-full shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105">
      <h3 className="text-xl font-bold text-cyan-500">{project.name}</h3>
      <p className="text-sm text-slate-700 flex-1">
        {project.description}
      </p>
      {project.tech && (
        <div className="text-xs text-slate-500 font-medium">
          Tech Stack: {project.tech.join(", ")}
        </div>
      )}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm text-cyan-600 hover:underline"
        >
          View Project →
        </a>
      )}
    </article>
  );
}
