import React from "react";
import { BriefcaseIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experiences" className="text-gray-300 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Work Experience
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          {experiences.map((work) => (
            <div key={work.position} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-700 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <img
                      alt="logos"
                      src={work.logo}
                      className="w-20 rounded md:mb-4 flex-shrink-0 object-cover object-center"
                    />

                    <span className="title-font font-medium text-amber-600 text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.position}
                    </span>
                    <span className="text-green-300 text-sm uppercase title-font text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.company}
                    </span>
                    <br />
                    <span className="text-gray-300 text-sm uppercase text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.date}
                    </span>
                    <hr />
                    <span className="text-gray-300 text-sm text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {work.responsibilities}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
