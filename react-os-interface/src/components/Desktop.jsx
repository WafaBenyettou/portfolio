import { useState, useEffect } from 'react';
import Window from './Window';
import Icon from './Icon';
import Navbar from './Navbar';
import projectIcon from '../assets/folder-purple.webp';
import skillsFolderIcon from '../assets/folder-purple.webp';
import experienceFolderIcon from '../assets/folder-purple.webp';
import aboutIcon from '../assets/txt-64.webp';
import gameIcon from '../assets/tictIcon.png';

import AboutMe from './AboutMe';
import ProjectsContent from './ProjectsContent';
import SkillsContent from './SkillsContent';
import ExperienceContent from './ExperienceContent';
import TicTacToe from './TicTacToe';
import SelectionBox from './SelectionBox';

function Desktop() {
  const [windows, setWindows] = useState([]);
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [contextMenu, setContextMenu] = useState({ visible: false, position: { x: 0, y: 0 }, options: [] });

  const openWindow = (title, content) => {
    const existingWindow = windows.find(window => window.title === title);
    if (existingWindow) {
      setWindows(windows.map(window => 
        window.title === title ? { ...window, isOpen: true } : window
      ));
    } else {
      setWindows([...windows, { id: windows.length, title, content, isOpen: true }]);
    }
  };

  const closeWindow = (id) => {
    setWindows(windows.map(window => 
      window.id === id ? { ...window, isOpen: false } : window
    ));
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      position: { x: event.clientX, y: event.clientY },
      options: [
        { label: 'Open', action: () => console.log('Open') },
        { label: 'Properties', action: () => console.log('Properties') },
        { label: 'Delete', action: () => console.log('Delete') },
      ],
    });
  };

  useEffect(() => {
    const hideContextMenu = () => setContextMenu({ ...contextMenu, visible: false });
    document.addEventListener('click', hideContextMenu);
    return () => document.removeEventListener('click', hideContextMenu);
  }, [contextMenu]);

  const handleSelect = (box) => {
    const selectedIcons = icons.filter((icon) => {
      const iconElement = document.getElementById(icon.id);
      if (!iconElement) return false;
      const iconBox = iconElement.getBoundingClientRect();
      return (
        iconBox.left >= box.left &&
        iconBox.right <= box.right &&
        iconBox.top >= box.top &&
        iconBox.bottom <= box.bottom
      );
    });
    setSelectedIcons(selectedIcons);
  };

  const icons = [
    { id: 'aboutIcon', title: 'About Me', icon: aboutIcon, content: <AboutMe /> },
    { id: 'projectsIcon', title: 'Projects', icon: projectIcon, content: <ProjectsContent openProject={openWindow} /> },
    { id: 'skillsIcon', title: 'Skills', icon: skillsFolderIcon, content: <SkillsContent openFolder={openWindow} /> },
    { id: 'experienceIcon', title: 'Experience', icon: experienceFolderIcon, content: <ExperienceContent /> },
    { id: 'gameIcon', title: 'Tic Tac Toe', icon: gameIcon, content: <TicTacToe /> },
  ];

  return (
    <div className="desktop-background min-h-screen p-4 relative" onContextMenu={handleRightClick}>
      <Navbar />
      <SelectionBox onSelection={handleSelect} />
      <div className="grid grid-cols-3 gap-4 absolute top-16 left-4">
        {icons.map(icon => (
          <div key={icon.id} id={icon.id} onDoubleClick={() => openWindow(icon.title, icon.content)}>
            <Icon title={icon.title} icon={icon.icon} />
          </div>
        ))}
      </div>
      {contextMenu.visible && <ContextMenu options={contextMenu.options} position={contextMenu.position} />}
      {windows.map(window => 
        window.isOpen && (
          <Window key={window.id} title={window.title} content={window.content} onClose={() => closeWindow(window.id)} />
        )
      )}
    </div>
  );
}

export default Desktop;
