import React from "react";
import "./App.css";
import securedochub from "../assets/portfolio/securedochub.png";
import allukbuilder from "../assets/portfolio/allukbuilder.png";
import saidevelopers from "../assets/portfolio/saidevelopers.png";
import qms from "../assets/portfolio/qms.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: securedochub,
      name: "SecureDocHub",
      url: "https://dochub-e5625.web.app/",
    },
    {
      id: 2,
      src: allukbuilder,
      name: "MyUkBuilders",
      url: "https://www.myukbuilders.co.uk/",
    },
    {
      id: 3,
      src: saidevelopers,
      name: "SaiDevelopers",
      url: "https://saidevelopers-website.web.app/index.html",
    },
    {
      id: 4,
      src: qms,
      name: "QueSync",
      url: "https://getquesync.web.app/login",
    },
  ];

  const openWebsite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white project-space md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center"
                  onClick={() => openWebsite(url)}
                >
                  {name}
                  <span className="px-3">
                    <BsBoxArrowUpRight />
                  </span>
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
