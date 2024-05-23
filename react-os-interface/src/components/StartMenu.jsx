import { useState } from 'react';
import { FaFolder, FaProjectDiagram, FaUser, FaEnvelope } from 'react-icons/fa';
import { CgMenuGridR } from "react-icons/cg";

function StartMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-800 text-white p flex items-center  hover:bg-gray-700 transition duration-200"
      >
        <CgMenuGridR className="w-6 h-6" />
        <span className="ml-2">Start</span>
      </button>
      {open && (
        <div className="absolute bottom-full left-0 bg-gray-900 text-white p-4 shadow-lg rounded-md w-56 mt-2">
          <ul>
            <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md transition duration-200">
              <FaProjectDiagram className="mr-2" /> Projects
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md transition duration-200">
              <FaUser className="mr-2" /> Skills
            </li>
            <li className="flex items-center p-2 hover:bg-gray-700 cursor-pointer rounded-md transition duration-200">
              <FaEnvelope className="mr-2" /> Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default StartMenu;
