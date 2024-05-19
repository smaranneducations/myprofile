import React from 'react';
import MovingOctagons from './MovingOctagons';
import MovingOctagons1 from './MovingOctagons1';
import './App.css';
import ProcessFlow from './ProcessFlow';
import ProcessFlow1 from './ProcessFlow1';
import CarouselComponent from './CarouselComponent';
import ProgramManagement from './backgroundpics/ProgramManagement.jpg';
import datagovernance from './backgroundpics/datagovernance.jpg'; 
import stakeholdermanagent from './backgroundpics/stakeholdermanagent.jpg'; 
import support from './backgroundpics/support.jpg'; 
import appsolution from './backgroundpics/appsolution.jpg'; 
import training from './backgroundpics/training.jpg'; 
import UserProfile from './UserProfile';
import CarouselW from './CarouselW';

const CarouselComponentItems = [
    { image: ProgramManagement, text: 'Program Management' },
    { image: datagovernance, text: 'Data Governance' },
    { image: stakeholdermanagent, text: 'Stakeholder Management' },
    { image: support, text: 'Support' },
    { image: appsolution, text: 'App Solutions' },
    { image: training, text: 'Training' },
];

const techWordsArray = [
    "AWS", "GCP", "AZURE", "MySQL", "SQL Server", "PostgreSQL", "Cosmos DB",
    "DynamoDB", "AWS S3", "Azure Gen 3 Data Lake", "AWS Redshift", "Azure Synapse",
    "Azure Analytics", "BigQuery", "Athena", "Polybase", "Informatica", "Python",
    "SQL", "Excel Macro", "Spark", "Azure Databricks", "Casandra", "Airflow",
    "TensorFlow", "Apache Beam", "AWS Glue", "AWS Kinesis", "Azure Stream Analytics",
    "Kafka", "Hyperion", "Hyperion Essbase", "FDMEE", "Microsoft MDS", "Oracle APEX",
    "Azure Data Catalogue", "Glue Data Catalogue", "PowerBI", "MicroStrategy",
    "Jupyter Notebook", "Distributed Databases", "Data Intensive Application Design",
    "Micro-service Architecture", "Data Warehousing", "Data Fabric/Mesh (Denodo)",
    "AI", "Machine Learning", "Google Cloud Platform", "Azure DevOps", "Git",
    "AWS Code Commit", "GDPR", "API Gateway", "Azure Functions", "AWS Lambda",
    "AWS Amplify", "Azure Web App", "Data Virtualization (Denodo)"
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
            <div className="w-[61vw] h-[100%] flex flex-col overflow-hidden">
                <div className="h-[.5vh]">
                    {/* Empty space */}
                </div>
                {/* First Row */}
                <div className="h-[55%] bg-white-300 flex items-center justify-center">
                    <MovingOctagons1 />
                    <div className="w-[1%]"></div>
                    <MovingOctagons />
                </div>
                {/* Spacer */}
                <div className="h-[1vh]">
                    {/* Empty space */}
                </div>
                <div className="h-[30%] bg-gray-200 flex-col items-left justify-left py-2 "
                style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3)', // 3D effect
                    borderColor: 'rgba(0, 0, 0, 0.5)', // Darker border color for effect
                    borderWidth: '4px', // Ensure border width matches the previous class
                    borderStyle: 'solid' // Ensure border style is solid
                  }}>
                    <ProcessFlow />
                    <div className="h-[1vh]"></div>
                    <ProcessFlow1 />
                </div>
                <div className="h-[1vh]"></div>
                <div className="h-[11%] bg-gray-200 flex items-left justify-left py-2 "
                style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3)', // 3D effect
                    borderColor: 'rgba(0, 0, 0, 0.5)', // Darker border color for effect
                    borderWidth: '4px', // Ensure border width matches the previous class
                    borderStyle: 'solid' // Ensure border style is solid
                  }}>
                     <CarouselW words={techWordsArray} />
                     </div>
                
                
                
            </div>
            
            {/* Right Spacer */}
            <div className="w-[0.5vw] bg-gray-200"></div>
        </div>
    );
};

export default Home;
