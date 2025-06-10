import React, { useRef } from 'react';
import '../styles/Projects.css';
import aztracon from '../assets/projects/aztracon.jpg'
import dbquest from '../assets/projects/dbquest.jpg'
import stsapp from '../assets/projects/STSAPP.jpg'
import stsweb from '../assets/projects/STSWEB.png'
import smartbot from '../assets/projects/Smartbot.jpg'
import weather from '../assets/projects/weather.png'

const projectsData = [
  { id: 1, title: 'Alzamil', description: 'Developed mobile applications for real-time ERP maintenance.', img: aztracon, link: 'https://play.google.com/store/search?q=al+zamil+app&c=apps&hl=en' },
  { id: 2, title: 'DBQuest', description: 'Developed mobile applications for an IT company, enabling employees and administrators to manage attendance, worksheets, and various other tasks efficiently.', img: dbquest },
  { id: 3, title: 'Pavillion (APP)', description: 'Wedding Pavillion App', img: stsapp },
  { id: 4, title: 'Pavillion (WEB)', description: 'Multi-screen interface with elegant UI for Weddings, Receptions, and Private Events', img: stsweb, link: 'https://stsmahal-web.vercel.app/' },
  { id: 5, title: 'Smartbot', description: 'ChatGpt Clone', img: smartbot, link: 'https://drive.google.com/file/d/1WMQ4aKaYmEA2VbteG001lX684j0GIL7Q/view?usp=drive_link' },
  { id: 6, title: 'Weather App', description: 'Weather app providing current weather and forecast with cities-based search', img: weather, link: 'https://weather-app-smoky-chi.vercel.app/' },
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
          &#8250;
        </button>
      </div>
    </div>
  );
}

export default Projects;