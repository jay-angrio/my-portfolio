import React from "react";
import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkeIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jay-ahir-641707242/",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/jay-angrio",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jayahir12309@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Download CV <IoDocumentOutline size={30} />
        </>
      ),
      href: "/JAY_RESUME",
      download: true,
    },
  ];

  return (
    <div>
      <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 p-12 sm:px-0 justify-start items-center">
        {links.map(({ id, child, href, download, title }) => (
          <li key={id}>
            <a
              href={href}
              className="flex justify-center gap-4 items-center w-full text-white p-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
