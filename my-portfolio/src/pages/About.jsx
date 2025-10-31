
import React from "react";
import profilePic from "../assets/profile3.jpg"; // Make sure the image is in src/assets folder

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 py-12 px-6 bg-gray-50 min-h-screen">
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src={profilePic}
          alt="Navya"
          className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-cyan-400 hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* About Content */}
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-4xl font-extrabold mb-6 text-cyan-600">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          Hi, I’m <span className="font-semibold text-cyan-700">Navya</span> — a
          Computer Science Engineering student passionate about building clean,
          functional, and user-friendly software.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          I’m currently on a journey to become a{" "}
          <span className="font-semibold text-cyan-700">
            software developer
          </span>
          , sharpening my skills in full-stack web development using
          technologies like{" "}
          <span className="font-semibold text-cyan-700">React</span>,{" "}
          <span className="font-semibold text-cyan-700">Node.js</span>, and{" "}
          <span className="font-semibold text-cyan-700">MongoDB</span>.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          I love transforming ideas into interactive digital experiences and
          continuously learning new tools that make development smarter and more
          creative. My interests include{" "}
          <span className="font-semibold text-cyan-700">frontend design</span>,{" "}
          <span className="font-semibold text-cyan-700">NoSQL databases</span>,
          and{" "}
          <span className="font-semibold text-cyan-700">
            machine learning-based applications
          </span>
          .
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          When I’m not coding, I enjoy{" "}
          <span className="font-semibold text-cyan-700">adventure travel</span>{" "}
          and discovering inspiration from the world around me.
        </p>
      </div>
    </section>
  );
}
