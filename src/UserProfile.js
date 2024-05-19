import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaComments, FaYoutube } from 'react-icons/fa';
import mypic from './backgroundpics/mypic.jpg';

const UserProfile = () => {
  return (
    <div className="h-[100%] p-2 bg-gray-200 flex">
      {/* Left Section */}
      <div className="w-[30%] h-full flex flex-col items-center justify-center">
        <img
          src={mypic}
          alt="Profile"
          className="w-[70%] h-auto border rounded-full dark:bg-gray-500 dark:border-gray-300"
        />
        <div className="flex space-x-4 mt-2">
          <a href="https://github.com/smaranneducations" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-800 hover:text-violet-600">
            <FaGithub className="w-[130%] h-auto" />
          </a>
          <a href="https://www.linkedin.com/in/bhasker-kumar-a797113/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-800 hover:text-violet-600">
            <FaLinkedin className="w-[130%] h-auto" />
          </a>
          <a href="mailto:contact_bhasker@yahoo.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-gray-800 hover:text-violet-600">
            <FaEnvelope className="w-[130%] h-auto" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Chat" className="text-gray-800 hover:text-violet-600">
            <FaComments className="w-[130%] h-auto" />
          </a>
          <a href="https://youtu.be/phmT0TMtGNo" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-800 hover:text-violet-600">
            <FaYoutube className="w-[130%] h-auto" />
          </a>
        </div>
      </div>
      
      {/* Separator */}
      <div className="border-l-2 border-gray-300 mx-[1vw]"></div> {/* Separator */}

      {/* Right Section */}
      <div className="w-[69%] h-full flex flex-col justify-center text-left">
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
