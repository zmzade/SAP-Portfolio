import React from "react";
import "animate.css";
import img1 from "../assets/photo1.jpg";
import img2 from "../assets/photo2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className=" mx-auto flex px-3 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:flex-grow lg:flex-row md:w-1/2 lg:px-10 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="container lg:px-10 mx-auto flex md:flex-row flex-col">
            <img
              className="object-cover object-center p-10 w-full h-full animate__animated animate__rotateIn animate__slow"
              alt="my photo with my son"
              src={img1}
            />
          </div>
          <div className="container lg:px-10 mx-auto md:flex-row flex-col ">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 mt-8 animate__animated animate__flash animate__slow animate__delay-4s text-shadow sm:text-shadow-sm md:text-shadow-md">
              About Me
            </h1>
            <p className="mb-8 leading-relaxed text-white p-2">
              Hi! My name is Jalal. I am passionate about SAP and finding
              solutions for the business needs. I consider myself as a solution
              provider who enjoys share knowledge and support business. I
              started learning SAP 12 years ago and during my career, I have
              been in various positions like SAP User, SAP key user, SAP
              Consultant (Logistics area) and SAP logistics team lead. I
              participated in four SAP ECC6 full cycle implementations. I moved
              to Denmark in 2016 and right now, I am production master data
              specialist. In my free time, I like to spend time with my son and
              family, listen to music and play online chess.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-amber-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 rounded text-lg text-shadow sm:text-shadow-sm md:text-shadow-md"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-shadow sm:text-shadow-sm md:text-shadow-md"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="container mx-auto lg:px-10 flex md:flex-row flex-col mt-12 lg:mt-0">
            <img
              className="object-cover object-center w-full h-full p-10 animate__animated animate__rotateIn animate__slow"
              alt="my photo with my son"
              src={img2}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
