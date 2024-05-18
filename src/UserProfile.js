import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaComments, FaYoutube } from 'react-icons/fa';
import mypic from './backgroundpics/mypic.jpg';

const UserProfile = () => {
  return (
    <div className="w-[38vw] h-[15vh] p-0 dark:bg-gray-50 dark:text-gray-800 flex">
      {/* Left Section */}
      <div className="w-[30%] h-full flex flex-col items-center justify-center p-0">
        <img
          src={mypic}
          alt="Profile"
          className="w-[50%] h-auto border rounded-full dark:bg-gray-500 dark:border-gray-300 m-0"
        />
        <div className="flex space-x-1 mt-2">
          <a href="https://github.com/smaranneducations" aria-label="GitHub" className="text-gray-800 hover:text-violet-600">
            <FaGithub className="w-[30%] h-auto m-0" />
          </a>
          <a href="https://www.linkedin.com/in/bhasker-kumar-a797113/" aria-label="LinkedIn" className="text-gray-800 hover:text-violet-600">
            <FaLinkedin className="w-[30%] h-auto m-0" />
          </a>
          <a href="mailto:contact_bhasker@yahoo.com" aria-label="Email" className="text-gray-800 hover:text-violet-600">
            <FaEnvelope className="w-[30%] h-auto m-0" />
          </a>
          <a href="#" aria-label="Chat" className="text-gray-800 hover:text-violet-600">
            <FaComments className="w-[30%] h-auto m-0" />
          </a>
          <a href="https://youtu.be/phmT0TMtGNo" aria-label="YouTube" className="text-gray-800 hover:text-violet-600">
            <FaYoutube className="w-[30%] h-auto m-0" />
          </a>
        </div>
      </div>
      
      {/* Separator */}
      <div className="border-l-2 border-gray-300 mx-0"></div> {/* Separator */}

      {/* Right Section */}
      <div className="w-[69%] h-full flex flex-col justify-center text-left p-0">
        <h4 className="text-[1.2vw] font-semibold">Bhasker Kumar</h4>
        <p className="text-[0.8vw] dark:text-gray-600">
          Solution Abstraction || Prototyping || Program Management || EPM Architect
        </p>
        <p className="text-[0.8vw] dark:text-gray-600">Opfikon, Zurich, Switzerland</p>
        <div className="flex items-center mt-2 space-x-[1vw]">
          <p className="text-[0.8vw]">
            <FaPhone className="inline mr-[0.5vw]" /> +41 754339331
          </p>
          <p className="text-[0.8vw]">
            <FaEnvelope className="inline mr-[0.5vw]" /> contact_bhasker@yahoo.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
