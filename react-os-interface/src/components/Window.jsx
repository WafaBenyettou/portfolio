import { useState } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaWindowMinimize, FaWindowMaximize } from 'react-icons/fa';

function Window({ id, title, content, onClose, onMinimize, onMaximize, isMinimized, isMaximized }) {
  return (
    <Draggable handle=".handle" cancel=".no-drag">
      <div
        className={`absolute bg-gray-900 border border-gray-700 shadow-lg rounded-lg ${
          isMaximized ? 'w-full h-full' : 'min-w-[300px] max-w-[800px]'
        } ${isMinimized ? 'hidden' : ''} resize overflow-hidden`}
        style={{ touchAction: 'none' }}
      >
        <div className="handle bg-gray-900 text-white p-2 flex justify-between items-center rounded-t-lg cursor-move touch-none">
          <div className="flex items-center space-x-2">
            <button className="w-3 h-3 bg-green-500 rounded-full" onClick={() => onMaximize(id)}></button>
            <button className="w-3 h-3 bg-yellow-500 rounded-full" onClick={() => onMinimize(id)}></button>
            <button className="w-3 h-3 bg-red-500 rounded-full" onClick={() => onClose(id)}></button>
          </div>
          <span className="font-bold flex-grow text-center">{title}</span>
          <div className="w-6"></div>
        </div>
        <div className="bg-gray-900 text-white p-4 overflow-y-auto no-drag" style={{ maxHeight: 'calc(100vh - 50px)' }}>
          {content}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
