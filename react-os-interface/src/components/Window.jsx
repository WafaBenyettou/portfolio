import { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';

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
    <Draggable handle=".handle" cancel=".no-drag">
      <ResizableBox
        width={400}
        height={300}
        minConstraints={[300, 200]}
        maxConstraints={[1200, 800]}
        className={`window absolute bg-gray-900 border border-gray-700 shadow-lg rounded-lg ${isMaximized ? 'w-full h-full' : ''} ${isMinimized ? 'hidden' : ''} resize overflow-hidden`}
      >
        <div className="handle bg-gray-900 text-white p-2 flex justify-between items-center rounded-t-lg cursor-move no-drag">
          <div className="flex items-center space-x-2">
            <button className="w-3 h-3 bg-green-500 rounded-full" onClick={handleMaximize}></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full" onClick={handleMinimize}></button>
            <button className="w-3 h-3 bg-red-500 rounded-full" onClick={onClose}></button>
          </div>
          <span className="font-bold flex-grow text-center">{title}</span>
          <div className="w-6"></div>
        </div>
        <div className="bg-gray-900 text-white p-4 overflow-auto h-full">
          {content}
        </div>
      </ResizableBox>
    </Draggable>
  );
}

export default Window;
