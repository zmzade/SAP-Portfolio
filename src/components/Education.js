import React from "react";
import { AcademicCapIcon } from "@heroicons/react/solid";
import { educations } from "../data";

const Education = () => {
  return (
    <section id="educations" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-2">
            Education
          </h1>
        </div>
        <div className="flex flex-wrap m-4 ">
          {educations.map((education) => (
            <div key={education.name} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-400 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <span>
                    <img
                      alt="logos"
                      src={education.logo}
                      className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                  </span>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-teal-400 text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {education.degree}
                    </span>
                    <span className="text-white text-sm uppercase text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {education.university}
                    </span>
                    <span className="text-gray-200 text-sm uppercase text-shadow sm:text-shadow-sm md:text-shadow-md">
                      {education.date}
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

export default Education;
