import React from 'react';

function ContextMenu({ options, position }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        backgroundColor: 'gray-800',
        border: '1px solid gray-700',
        borderRadius: '0.25rem',
        zIndex: 1000,
        padding: '0.5rem',
      }}
      className='bg-gray-900 rounded '
    >
      {options.map((option, index) => (
        <div key={index} className="p-2 bg-gray-900 text-white hover:bg-gray-700 cursor-pointer" onClick={option.action}>
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default ContextMenu;
