import React from 'react';
import AboutImage from '../assets/me.jpeg';
import ProgrammingIcon from '../assets/me.jpeg';  // Replace with your actual icon path
import SecurityIcon from '../assets/me.jpeg';  // Replace with your actual icon path
import ProjectsIcon from '../assets/me.jpeg';  // Replace with your actual icon path
import ContactIcon from '../assets/me.jpeg';  // Replace with your actual icon path
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython } from 'react-icons/fa';
function AboutMe() {
  return (
    <div className="p-4" style={{ fontFamily: 'monospace' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      <div className="flex bg-gray-800 p-4 rounded-lg relative overflow-hidden">
       
        <img src={AboutImage} alt="Wafa Nesrine BENYETTOU" className="z-[9999] w-40 h-40 mr-10 ml-10 rounded-lg border-2 border-gray-300" />
        <div className="flex flex-col justify-center">
          <h1 className="text-pink-400 text-2xl mb-2"><strong>whoami?</strong></h1>
          <p className="text-white">Hello! I'm Wafa Nesrine BENYETTOU, a passionate developer with a strong background in information systems security. I love creating innovative solutions and exploring new technologies.</p>
          <p className="text-white mt-2">In my free time, I enjoy contributing to open-source projects, participating in CTF competitions, and learning about the latest trends in cybersecurity.</p>
         
          <div className="mt-4">
           
            
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </div>
  );
}

export default AboutMe;