import React from 'react';
import {FaTerminal } from 'react-icons/fa';
import ransomware from '../assets/ransomware-icon.jpg';
import babygardians from '../assets/babygard.png';
import salamat from '../assets/ransomware.png';
import menu from '../assets/square.png'
import terminal from '../assets/Linux-Terminal-icon.png';

function Taskbar({openProject, minimizedWindows, restoreWindow, openTerminal}) {
  const projects = [
    { id: 1, title: 'RanSomeWhere', icon: ransomware, content: 'Details about RanSomeWhere' },
    { id: 2, title: 'BabyGarduians', icon: babygardians, content: 'Details about BabyGarduians' },
    { id: 3, title: 'SALAMAT', icon: salamat, content: 'Details about SALAMAT' },
    { id: 4, title: 'RanSomeWhere', icon: ransomware, content: 'Details about RanSomeWhere' },
    { id: 5, title: 'BabyGarduians', icon: babygardians, content: 'Details about BabyGarduians' },
    { id: 6, title: 'SALAMAT', icon: menu, content: 'Details about SALAMAT' },
  ];

  return (
    <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2 text-white taskbar-bg flex items-center p-2 space-x-4 rounded-lg shadow-lg z-50">
      <div className="flex items-center space-x-2">
      <div 
          className="taskbar-icon flex items-center cursor-pointer p-2  rounded"
          onClick={openTerminal}
        >
          <img src={terminal} className='w-8 h-8 project-icon'/>
        
        </div>
        {projects.map(project => (
          <div 
            key={project.id} 
            className="taskbar-icon flex items-center cursor-pointer p-2 rounded"
            onClick={() => openProject(project.title, project.content)}
          >
            <img src={project.icon} alt={project.title} className="project-icon w-10 h-10 mr-2 rounded-full" />
           
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default Taskbar;
