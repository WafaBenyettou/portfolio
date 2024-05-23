import React from 'react';
import AboutImage from '../assets/me.jpeg';

function AboutMe() {
  return (
    <div className="p-4" style={{ fontFamily: 'monospace' }}>
      <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
      <div className="flex">
        <img src={AboutImage} alt="Your Name" className="w-40 h-40 mr-4 " />
        <div>
          <p className="text-gray-700">Hello! I'm Wafa Nesrine BENYETTOU, a passionate developer with a strong background in information systems security. I love creating innovative solutions and exploring new technologies.</p>
          <p className="text-gray-700 mt-2">In my free time, I enjoy contributing to open-source projects, participating in CTF competitions, and learning about the latest trends in cybersecurity.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
