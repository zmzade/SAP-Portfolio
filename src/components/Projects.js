import React from "react";
import { projects } from "../data";
import asap from "../assets/asap.png";
import "animate.css";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-7">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            SAP projects
          </h1>
          <span className="flex-grow flex flex-col p-2 items-center ">
            <img
              className="object-cover object-center flex-shrink-0 w-1/2 animate__animated animate__rubberBand animate__slow animate__delay-2s animate__repeat-2 rounded "
              alt="asap roadmap"
              src={asap}
            />
          </span>
        </div>
        <div className="flex flex-wrap -m-0 ">
          {projects.map((project) => (
            <div
              key={project.company}
              className="px-8 py-10 sm:w-1/2 w-100 border-4 border-gray-800 bg-gray-900 "
            >
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1 text-shadow sm:text-shadow-sm md:text-shadow-md">
                {project.company}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3 text-shadow sm:text-shadow-sm md:text-shadow-md">
                {project.type}
              </h1>
              <p className="leading-relaxed text-shadow sm:text-shadow-sm md:text-shadow-md">
                {project.responsibilities}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
