
import React from "react";
import ProjectsList from "../components/ProjectsList";

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Projects</h1>
      <ProjectsList githubUsername="NavyaKodudhala" />
    </div>
  );
}
