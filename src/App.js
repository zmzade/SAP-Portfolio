import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";

export default function App() {
  return (
    <main className="text-gray-400 bg-gradient-to-r from-indigo-500 to-lightBlue  body-font">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Education />
      <Contact />
    </main>
  );
}
