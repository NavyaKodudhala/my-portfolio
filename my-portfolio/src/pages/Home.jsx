
import React from "react";
import Hero from "../components/Hero";
import ProjectsList from "../components/ProjectsList";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-4">Latest Projects</h2>
        <ProjectsList githubUsername="NavyaKodudhala" />
      </section>
    </div>
  );
}
