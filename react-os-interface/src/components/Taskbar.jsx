import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaTerminal, FaHackerNews, FaMedium, FaPhone, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import terminalIcon from '../assets/Linux-Terminal-icon.png';

function Taskbar({ openTerminal }) {
  const socialMedia = [
    { id: 1, title: 'GitHub', icon: <FaGithub className="w-10 h-10 bg-black rounded-full" />, link: 'https://github.com/WafaBenyettou' },
    { id: 2, title: 'LinkedIn', icon: <FaLinkedin className="w-10 h-10 linkedin bg-white rounded" />, link: 'https://www.linkedin.com/in/wafa-nesrine-benyettou-726b25215/' },
    { id: 3, title: 'Twitter', icon: <FaTwitter className="w-10 h-10 twitter rounded p-[2px]" />, link: 'https://twitter.com/WafaoBen' },
    { id: 4, title: 'Medium', icon: <FaMedium className="w-10 h-10 bg-black" />, link: 'https://medium.com/@benwafa951' },
    { id: 5, title: 'Email', icon: <MdEmail className="w-10 h-10 bg-black rounded p-2" />, link: 'mailto:benyettouwafa16@gmail.com' },
    { id: 5, title: 'Phone', icon: <FaPhoneAlt className="w-10 h-10 phone p-2 rounded bg-white" />, link: '0664708645' },
  ];

  return (
    <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2 text-white taskbar-bg flex items-center p-2 space-x-4 rounded-lg shadow-lg z-50">
      <div className="flex items-center space-x-2">
        <div 
          className="taskbar-icon flex items-center cursor-pointer p-2 rounded"
          onClick={openTerminal}
        >
          <img src={terminalIcon} className="w-8 h-8 project-icon taskbar-icon" alt="Terminal" />
        </div>
        {socialMedia.map(platform => (
          <a 
            key={platform.id} 
            href={platform.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="taskbar-icon project-icon flex items-center cursor-pointer p-2 rounded"
            title={platform.title}
          >
            {platform.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Taskbar;
