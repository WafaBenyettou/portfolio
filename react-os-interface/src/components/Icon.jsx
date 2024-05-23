import Draggable from 'react-draggable';

function Icon({ title, icon, onDoubleClick }) {
  return (
    <Draggable>
      <div className="flex flex-col items-center cursor-pointer rounded" onDoubleClick={onDoubleClick}>
        <img src={icon} alt={title} className="w-12 h-12" />
        <span className="text-white text-sm mt-1">{title}</span>
      </div>
    </Draggable>
  );
}

export default Icon;
