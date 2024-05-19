import React from 'react';
import MovingOctagons from './MovingOctagons';
import MovingOctagons1 from './MovingOctagons1';
import './App.css';
import ProcessFlow from './ProcessFlow';
import CarouselComponent from './CarouselComponent';
import ProgramManagement from './backgroundpics/ProgramManagement.jpg';
import datagovernance from './backgroundpics/datagovernance.jpg'; 
import stakeholdermanagent from './backgroundpics/stakeholdermanagent.jpg'; 
import support from './backgroundpics/support.jpg'; 
import appsolution from './backgroundpics/appsolution.jpg'; 
import training from './backgroundpics/training.jpg'; 
import UserProfile from './UserProfile';

const CarouselComponentItems = [
    { image: ProgramManagement, text: 'Program Management' },
    { image: datagovernance, text: 'Data Governance' },
    { image: stakeholdermanagent, text: 'Stakeholder Management' },
    { image: support, text: 'Support' },
    { image: appsolution, text: 'App Solutions' },
    { image: training, text: 'Training' },
];

const handleItemClick = (item) => {
    alert(`You clicked on ${item.text}`);
};

const Home = () => {
    return (
        <div className="flex w-[100vw] h-[80vh] bg-white-300">
            {/* Left Spacer */}
            <div className="w-[.5vw] bg-white-300"></div>
            
            {/* First Column */}
            <div className="w-[38vw]  bg-white-300 flex flex-col justify-between overflow-hidden">
                <div className="h-[.5vh] bg-white-200">
                    <p>abc</p>
                </div>
                {<div className=" h-[30vh] flex items-center justify-cneter overflow-hidden">
                    <UserProfile />
                </div>}
                <div className="h-[.5vh] bg-white">
                <p></p>
                </div>
                <div className="flex-grow h-[50vh] bg-blue-300 flex items-center justify-center">
                    <CarouselComponent items={CarouselComponentItems} onItemClick={handleItemClick} />
                </div>
                <div className="h-[.5vh] bg-white-300">
                    {/* Empty space */}
                </div>
            </div>
            
            {/* Center Spacer */}
            <div className="w-[0.5vw] bg-white-300"></div>
            
            {/* Second Column */}
            <div className="w-[61vw] h-[70vh] flex flex-col overflow-hidden">
                <div className="h-[.5vh]">
                    {/* Empty space */}
                </div>
                {/* First Row */}
                <div className="h-[30vh] bg-gray-200 flex items-center justify-center">
                    <ProcessFlow />
                </div>
                
                {/* Spacer */}
                <div className="h-[2vh]">
                    {/* Empty space */}
                </div>
                
                {/* Second Row */}
                <div className="h-[63vh] bg-green-300 flex items-center justify-center">
                    <MovingOctagons1 />
                    <MovingOctagons />
                </div>
            </div>
            
            {/* Right Spacer */}
            <div className="w-[0.5vw] bg-gray-200"></div>
        </div>
    );
};

export default Home;
