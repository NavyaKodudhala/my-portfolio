
import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-20">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-6 text-center">
        {/* Heading and Intro */}
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Hi, I'm Navya
        </h1>
        <p className="text-lg max-w-2xl leading-relaxed">
          A passionate Computer Science Engineering student and aspiring software
          developer. I love creating interactive, efficient, and user-friendly web
          applications that make an impact.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/projects"
            className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded shadow hover:bg-gray-100 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-white rounded font-semibold hover:bg-white hover:text-cyan-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
