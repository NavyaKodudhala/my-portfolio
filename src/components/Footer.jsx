
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-6 mt-8">
      <div className="container text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Navya — Built with React
      </div>
    </footer>
  );
}
