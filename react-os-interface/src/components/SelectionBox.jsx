import React, { useState, useRef } from 'react';

function SelectionBox({ onSelection }) {
  const [selectionBox, setSelectionBox] = useState(null);
  const selectionBoxRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left click
    const startX = e.clientX;
    const startY = e.clientY;

    setSelectionBox({
      x: startX,
      y: startY,
      width: 0,
      height: 0,
    });

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const currentY = e.clientY;

      setSelectionBox({
        x: Math.min(startX, currentX),
        y: Math.min(startY, currentY),
        width: Math.abs(currentX - startX),
        height: Math.abs(currentY - startY),
      });
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      if (selectionBoxRef.current) {
        const box = selectionBoxRef.current.getBoundingClientRect();
        onSelection(box);
      }
      setSelectionBox(null);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseDown={handleMouseDown}
    >
      {selectionBox && (
        <div
          ref={selectionBoxRef}
          className="absolute border border-blue-500 bg-blue-200 bg-opacity-50"
          style={{
            left: selectionBox.x,
            top: selectionBox.y,
            width: selectionBox.width,
            height: selectionBox.height,
          }}
        ></div>
      )}
    </div>
  );
}

export default SelectionBox;
