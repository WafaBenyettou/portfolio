import React from 'react';
import { FaFileAlt, FaLaptopCode, FaUserGraduate, FaShieldAlt, FaHandsHelping } from 'react-icons/fa';

const experiences = [
  {
    id: 'cybersecurity-intern-mn',
    title: 'Cybersecurity Intern',
    company: 'MN Advising Group',
    date: 'Apr 2024 - Present',
    icon: <FaShieldAlt />,
    details: 'Led the implementation of a platform for ransomware attack analysis, enabling real-time monitoring and response. Authored multiple technical articles on cybersecurity topics contributing to industry knowledge and awareness.',
  },
  {
    id: 'cybersecurity-intern-ha',
    title: 'Cybersecurity Intern',
    company: 'Hackers Academy',
    date: 'Aug 2023 - Nov 2023',
    icon: <FaLaptopCode />,
    details: 'Mastered advanced ethical hacking techniques through rigorous, hands-on lab exercises, significantly improving practical cybersecurity skills. Performed comprehensive penetration testing, uncovering critical vulnerabilities and providing actionable recommendations, leading to a 40% increase in network security resilience.',
  },
  {
    id: 'web-development-mentor',
    title: 'Web Development Mentor',
    company: 'ITHUB',
    date: 'Jun 2022 - Sep 2022',
    icon: <FaUserGraduate />,
    details: 'Provided mentorship in web development, focusing on secure coding practices, resulting in improved code quality and security awareness among mentees. Implemented continuous feedback mechanisms, enhancing mentoring effectiveness and achieving a 25% improvement in mentee performance.',
  },
  {
    id: 'apprentice-steam4girls',
    title: 'Apprentice',
    company: 'STEAM4GIRLS Program by US Embassy',
    date: 'Nov 2021 - Jun 2022',
    icon: <FaHandsHelping />,
    details: 'Participated in a rigorous STEAM education program, developing strong communication, problem-solving, and teamwork skills. Completed the program with distinction, acquiring a solid foundation in industry-specific knowledge and practical skills.',
  },
  {
    id: 'technical-writer-algerium',
    title: 'Technical Writer',
    company: 'Algerium',
    date: 'Nov 2019 - Present',
    icon: <FaFileAlt />,
    details: 'Developed and refined technical documentation, improving communication between team members and clients. Delivered high-quality legal and technical writing, with an emphasis on impact analysis, contributing to successful project outcomes.',
  },
];

function ExperienceContent() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="grid grid-cols-1 gap-4">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-card border p-4 rounded shadow-lg">
            <div className="icon-title flex items-center mb-2">
              <div className="icon mr-2">
                {exp.icon}
              </div>
              <div className="title-company">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-gray-500">{exp.company} - {exp.date}</p>
              </div>
            </div>
            <div className="details">
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceContent;
