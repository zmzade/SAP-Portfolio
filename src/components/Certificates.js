import React from "react";
import { certificates } from "../data";
import { BadgeCheckIcon, DocumentTextIcon } from "@heroicons/react/solid";
import certificate from "../assets/certificate.jpg";

const Certificates = () => {
  return (
    <section id="Certificates">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <DocumentTextIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-shadow sm:text-shadow-sm md:text-shadow-md">
            SAP Certificates
          </h1>
        </div>
        <div className="lg:flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className=" flex-grow flex flex-col p-2">
            <img
              className="object-cover object-center rounded"
              alt="my photo with my son"
              src={certificate}
            />
          </div>
          <div className="flex-grow flex flex-col p-1 ">
            {certificates.map((cerificate) => (
              <div
                key={cerificate}
                className="bg-gray-800 rounded flex p-2 h-full m-1 md:p-0"
              >
                <BadgeCheckIcon className="text-amber-600 w-6 h-6 flex-shrink-0 mx-5 my-4 " />
                <span className="title-font font-medium text-white py-4">
                  {cerificate}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
