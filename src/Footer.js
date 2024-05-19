import React from 'react';
import './App.css'; // Ensure this import is present to include the CSS

const steps = [
  "Demand", "Project Execution plan", "Business Case", "Executive Summary", "Requirements", 
  "Requirement specifications", "High level solution design", "Technical execution plan", 
  "Build/Agile", "System test", "UAT", "BUG Fixing", "Documentation", "Deployment", "ELS", "Project Closure"
];

const Footer = () => {
  return (
    <div className="bg-gray-200 fixed bottom-0 left-0 right-0" style={{ height: '15vh' }}>
      <div className="flex justify-center items-end w-full h-full">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center justify-end" style={{ flexBasis: '6.25%', height: '100%' }}>
            <span className="text-center transform -rotate-45" style={{ fontSize: 'calc(2vh)', height: '5vh' }}>
              {step}
            </span>
            <div className="flex items-center justify-center border-4 border-green-300 rounded-full vibrate" style={{ width: '5vh', height: '5vh' }}>
              <div className="border-4 border-green-400 rounded-full" style={{ width: '3vh', height: '3vh' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
