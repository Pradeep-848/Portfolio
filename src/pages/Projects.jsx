import React, { useRef } from 'react';
import '../styles/Projects.css';
import vintage from '../assets/projects/Vintage.jpg'
import aztracon from '../assets/projects/aztracon.webp'
import dbquest from '../assets/projects/dbquest.jpg'

const projectsData = [
  { id: 1, title: 'Vintage Spare Parts', description: 'Vintage Spare Parts specializes in sourcing, restoring, and providing authentic, high-quality spare parts for classic vehicles.', img: vintage },
  { id: 2, title: 'Alzamil', description: 'ERP Application', img: aztracon },
  { id: 3, title: 'DBQuest', description: 'Custom-built Enterprise Application', img: dbquest },  
  // Add more projects as needed
];

function Projects() {
  const scrollContainerRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Scroll right function
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="scroll-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#8249; {/* Left arrow */}
        </button>
        <div className="cards-container" ref={scrollContainerRef}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} className="project-image" />
              <h4 className='title'>{project.title}</h4>
              <p className='description'>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &#8250; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
}

export default Projects;
