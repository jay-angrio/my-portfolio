import React from "react";
import "./App.css";
import SocialLinks from "./SocialLinks";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white about-upper"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hello! I'm Baldaniya Jay B., an aspiring Angular Developer currently
          pursuing my B.Tech in Information Technology. With a solid foundation
          in web development technologies, I am passionate about creating
          dynamic and responsive web applications.
        </p>

        <br />

        <p className="text-xl">
          As a B.Tech IT student, I have dedicated myself to mastering the tools
          and technologies essential for modern web development. My projects
          reflect my commitment to learning and my ability to apply theoretical
          knowledge to practical scenarios.
        </p>

        <br />

        <p className="text-xl">
          I am driven by a passion for continuous learning and innovation. My
          goal is to leverage my skills in Angular and other technologies to
          contribute to impactful projects and grow as a developer. I am excited
          about the opportunities to collaborate with like-minded professionals
          and make meaningful contributions to the tech community.
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default About;
