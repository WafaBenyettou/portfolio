import { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';

function Window({ title, content, onClose }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  return (
    <Draggable handle=".handle">
      <div className={`absolute bg-gray-900 border border-gray-400 shadow-lg rounded-lg ${isMaximized ? 'w-full h-full' : 'min-w-[300px] max-w-[800px]'} ${isMinimized ? 'hidden' : ''} resize overflow-hidden`}>
        <div className="handle bg-gray-900 text-white p-2 flex justify-between items-center rounded-t-lg cursor-move">
          <span className="font-bold">{title}</span>
          <div className="flex items-center space-x-2">
            <button className="w-3 h-3 bg-green-500 rounded-full" onClick={handleMaximize}></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full" onClick={handleMinimize}></button>
            <button className="w-3 h-3 bg-red-500 rounded-full" onClick={onClose}></button>
          </div>
        </div>
        <div className="p-4 overflow-auto max-h-[400px]">{content}</div>
      </div>
    </Draggable>
  );
}

export default Window;
