import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profileImage from "../assets/profile.jpg";
import resumePDF from "../../public/Lakshmi-Narasimhan.pdf";

function Home() {
  const linkData = [
    {
      id: 1,
      icon: <FaLinkedin />,
      style: "text-blue-700",
      hoverStyle: "text-blue-500",
      url: "https://www.linkedin.com/in/lakshmi-narasimhan-developer/",
    },
    {
      id: 2,
      icon: <FaGithub />,
      style: "text-black",
      hoverStyle: "text-slate-500",
      url: "https://github.com/LakshmiNarasimhan273",
    },
    {
      id: 3,
      icon: <SiGmail />,
      style: "text-red-700",
      hoverStyle: "text-red-500",
      url: "mailto: lakshminarasimhan511@gmail.com",
    },
  ];
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-gray-100 rounded-lg shadow-xl p-8 sm:p-12 max-w-lg w-full">
        <div className="text-center mb-4">
          <img
            src={profileImage}
            alt="Your Profile"
            className="w-36 h-40 rounded-full mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold mb-2">Lakshmi Narasimhan</h1>
          <div className="flex gap-5 items-center justify-center">
            {linkData.map((data) => (
              <div key={data.id}>
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mr-4 text-3xl ${data.style} hover:${data.hoverStyle}`}
                >
                  {data.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-800 text-md font-semibold mb-4 leading-relaxed">
          Lakshmi Narasimhan: MERN Stack expert with 2.9 years of full-stack
          training experience. Creator of a robust authentication system in MERN
          Stack, ensuring secure access for users.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <a
            href="https://lakshmi-narasimhan-portfolio-new.netlify.app/"
            target="_blank"
            className="bg-slate-800 text-center w-[50%] hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-4 md:mb-0 md:mr-4"
          >
            Portfolio
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center w-[50%] bg-green-800 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            <FaLinkedin className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
