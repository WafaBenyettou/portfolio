import React, { useState } from 'react';

function Terminal({ onClose }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    "@@@,-.@@@@@@@_,---._@__@@/@@\\",
    "@@/@)@@@@.-'@@@@@@@`./@/@@@\\",
    "@( (@@@,'@@@@@@@@@@@@`/@/@@/|",
    "@\\@@`-\"@@@@@@@@@@@@@'\\@/@@|",
    "@@`.@@@@@@@@@@@@,@@@\\@\\@/@@|",
    "@@/`.@@@@@@@@,@'-`----Y@@@|",
    "@(@@@@@@@@@@@;@@@@@@@@|@@@'",
    "@@|@,-.@@@@,-'@@@@@@@@|@@/",
    "@@|@|@(@@|@@@@@@@@hja@|@/",
    "@@)@|@\\@`.___________|/",
    "@@`--'@@`--'"
  ]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setOutput([...output, `$ ${input}`, `You thought '${input}' would work ?`]);
      setInput('');
    }
  };

  return (
    <div className="bg-black text-green-500 font-mono h-full w-full p-4">
      
      <div className="overflow-y-auto h-full">
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        <div>
          $ <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="bg-black border-none outline-none text-green-500 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Terminal;
