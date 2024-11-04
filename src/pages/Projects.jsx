import React, { useRef } from 'react';
import '../styles/Projects.css';
import weather from '../assets/projects/weather.png'
import vintage from '../assets/projects/Vintage.jpg'
import games from '../assets/projects/games.png'
import aztracon from '../assets/projects/aztracon.webp'
import dbquest from '../assets/projects/dbquest.jpg'

const projectsData = [
  { id: 1, title: 'Vintage Spare Parts', description: 'Vintage Spare Parts specializes in sourcing, restoring, and providing authentic, high-quality spare parts for classic vehicles.', img: vintage  },
  { id: 2, title: 'Weather App', description: 'Weather app providing current weather and forecast with cities-based search', img: weather, link: 'https://weather-app-smoky-chi.vercel.app/'  },
  { id: 3, title: 'Games', description: 'Small Works', img: games, link: 'https://games-rho-pearl.vercel.app/'  },
  { id: 4, title: 'Alzamil', description: 'ERP Application', img: aztracon, link: 'https://play.google.com/store/search?q=al+zamil+app&c=apps&hl=en' },
  { id: 5, title: 'DBQuest', description: 'Custom-built Enterprise Application', img: dbquest }, 
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
      <h1 className="projects-title">📈 Projects</h1>
      <div className="scroll-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          &#8249; {/* Left arrow */}
        </button>
        <div className="cards-container" ref={scrollContainerRef}>
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">  
              <a href={project.link} target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none' }}>
              <img src={project.img} alt={project.title} className="project-image" />
              <h4 className='title'>{project.title}</h4>
              </a>
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
