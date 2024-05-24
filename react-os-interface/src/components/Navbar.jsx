import { useState, useEffect } from 'react';
import { FaBars, FaMemory, FaMicrochip, FaBell, FaNetworkWired } from 'react-icons/fa';

function Navbar() {
  const [cpuUsage, setCpuUsage] = useState(30); 
  const [memoryUsage, setMemoryUsage] = useState(45); 
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-950 text-white flex items-center justify-between p-2">
      <div className="flex items-center space-x-4">
        <button className="bg-gray-900 rounded hover:bg-gray-700">
          <FaBars />
        </button>
       
      </div>
      <div className="flex items-center space-x-4">
        <FaBell />
        <FaNetworkWired />
        <span>{time}</span>
      </div>
    </div>
  );
}

export default Navbar;
