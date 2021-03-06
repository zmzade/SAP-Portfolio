import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { MailOpenIcon } from "@heroicons/react/solid";
import { PhoneIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-xl text-shadow sm:text-shadow-sm md:text-shadow-md"
          >
            Jalal M. Kozekanan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#experiences"
            className="mr-5 hover:text-white text-shadow sm:text-shadow-sm md:text-shadow-md"
          >
            Work Experiences
          </a>
          <a
            href="#projects"
            className="mr-5 hover:text-white text-shadow sm:text-shadow-sm md:text-shadow-md"
          >
            Projects
          </a>
          <a
            href="https://www.linkedin.com/in/jmasoumi/"
            target="_blank"
            className="mr-5 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:jmk.ie7@gmail.com" className="mr-5 hover:text-white">
            <MailOpenIcon className="w-4 h-4 ml-1" />
          </a>
          <PhoneIcon className="w-4 h-4 ml-1 " />
          <p className="text-shadow sm:text-shadow-sm md:text-shadow-md">
            : (+45) 91973388
          </p>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-shadow sm:text-shadow-sm md:text-shadow-md"
        >
          Contact Info
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
