import React from 'react';
import AboutImage from '../assets/me.jpeg';

function AboutMe() {
  return (
    <div className="p-4" style={{ fontFamily: 'monospace' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      <div className="flex bg-gray-800 p-4 rounded-lg">
        <div className="mr-4">
          <ul className="text-white space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Profile</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Skills</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Projects</li>
            <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Contact</li>
          </ul>
        </div>
        <img src={AboutImage} alt="Wafa Nesrine BENYETTOU" className="w-40 h-40 mr-4 rounded-lg border-2 border-gray-300" />
        <div>
          <p className="text-white">Hello! I'm Wafa Nesrine BENYETTOU, a passionate developer with a strong background in information systems security. I love creating innovative solutions and exploring new technologies.</p>
          <p className="text-white mt-2">In my free time, I enjoy contributing to open-source projects, participating in CTF competitions, and learning about the latest trends in cybersecurity.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
