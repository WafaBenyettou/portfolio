import React from 'react';
import cvIcon from '../assets/cv-icon.png';  
import CVFile from '../assets/Wafa_Nesrine_BENYETTOU_CV.pdf'; 

function CvIcon() {
  return (
    <a href={CVFile} download="Wafa_Nesrine_BENYETTOU_CV.pdf" className="icon flex flex-col items-center">
      <img src={cvIcon} alt="CV" className="w-16 h-16 hover:scale-110 transition-transform" />
      <span className="text-white mt-2">Download CV</span>
    </a>
  );
}

export default CvIcon;
