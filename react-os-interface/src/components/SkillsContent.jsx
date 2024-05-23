import React from 'react';
import { FaCode, FaDatabase, FaShieldAlt, FaNetworkWired, FaFileAlt, FaJs, FaPython, FaJava, FaBug, FaKey } from 'react-icons/fa';
import Icon from './Icon'; 
import projectIcon from '../assets/folder-purple.webp'; 

const skills = [
  { id: 'programming', name: 'Programming', icon: <FaCode />, details: ['JavaScript', 'Python', 'Java'] },
  { id: 'database', name: 'Database Management', icon: <FaDatabase />, details: ['SQL', 'MongoDB', 'PostgreSQL'] },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: <FaShieldAlt />, details: ['Vulnerability Assessment', 'Penetration Testing', 'Ethical Hacking'] },
  { id: 'network', name: 'Network Security', icon: <FaNetworkWired />, details: ['Network Security Protocols', 'Firewall Management'] },
  { id: 'writing', name: 'Technical Writing', icon: <FaFileAlt />, details: ['Technical Documentation', 'Impact Analysis'] },
];



function SkillsContent({ openFolder }) {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {skills.map(skill => (
          <div key={skill.id} className="folder" onDoubleClick={() => openFolder(skill.name, skill.details)}>
            <div className="icon flex flex-col items-center">
              <Icon title={skill.name} icon={projectIcon} />
             
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsContent;
