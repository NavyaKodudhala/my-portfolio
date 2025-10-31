
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container flex items-center justify-between py-4 px-4">
        <div className="text-xl font-bold">My Portfolio</div>
        <nav className="space-x-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? "font-semibold underline" : "")}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "font-semibold underline" : "")}>Projects</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "font-semibold underline" : "")}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-semibold underline" : "")}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
