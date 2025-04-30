import React, { useRef } from 'react';
import '../styles/Projects.css';
import weather from '../assets/projects/weather.png'
//import vintage from '../assets/projects/Vintage.jpg'
import smartbot from '../assets/projects/Smartbot.jpg'
import stsweb from '../assets/projects/STSWEB.png'
//import games from '../assets/projects/games.png'
import aztracon from '../assets/projects/aztracon.jpg'
import dbquest from '../assets/projects/dbquest.jpg'

const projectsData = [
  { id: 1, title: 'Alzamil', description: 'Developed mobile applications for real-time ERP maintenance.', img: aztracon, link: 'https://play.google.com/store/search?q=al+zamil+app&c=apps&hl=en'  },
  { id: 2, title: 'DBQuest', description: 'Developed mobile applications for an IT company, enabling employees and administrators to manage attendance, worksheets, and various other tasks efficiently.', img: dbquest  },
  { id: 3, title: 'Smartbot', description: 'ChatGpt Clone', img: smartbot, link: 'https://drive.google.com/file/d/1WMQ4aKaYmEA2VbteG001lX684j0GIL7Q/view?usp=drive_link'  },
  //{ id: 3, title: 'Vintage Spare Parts', description: 'Vintage Spare Parts specializes in sourcing, restoring, and providing authentic, high-quality spare parts for classic vehicles.', img: vintage },
  { id: 4, title: 'STS Pavillion (WEB)', description: 'Multi-screen interface with elegant UI for Weddings, Receptions, and Private Events', img: stsweb, link: 'https://stsmahal-web.vercel.app/' },
  { id: 5, title: 'Weather App', description: 'Weather app providing current weather and forecast with cities-based search', img: weather, link: 'https://weather-app-smoky-chi.vercel.app/' },
  //{ id: 5, title: 'Games', description: 'Small Works', img: games, link: 'https://games-rho-pearl.vercel.app/'  }, 
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





// import React from 'react';
// import Slider from 'react-slick';
// import { motion } from 'framer-motion';
// import '../styles/Projects.css';
// import aztracon from '../assets/projects/aztracon.jpg';
// import dbquest from '../assets/projects/dbquest.jpg';
// import stsweb from '../assets/projects/STSWEB.png'
// import smartbot from '../assets/projects/Smartbot.jpg';
// // import games from '../assets/projects/games.png';
// import weather from '../assets/projects/weather.png';

// const projectsData = [
//   { id: 1, title: 'Alzamil', description: 'Developed mobile applications for real-time ERP maintenance.', img: aztracon, link: 'https://play.google.com/store/search?q=al+zamil+app&c=apps&hl=en'  },
//   { id: 2, title: 'DBQuest', description: 'Developed mobile applications for an IT company, enabling employees and administrators to manage attendance, worksheets, and various other tasks efficiently.', img: dbquest  },
//   { id: 3, title: 'Smartbot', description: 'ChatGpt Clone', img: smartbot, link: 'https://drive.google.com/file/d/1WMQ4aKaYmEA2VbteG001lX684j0GIL7Q/view?usp=drive_link'  },
//   //{ id: 3, title: 'Vintage Spare Parts', description: 'Vintage Spare Parts specializes in sourcing, restoring, and providing authentic, high-quality spare parts for classic vehicles.', img: vintage },
//   { id: 4, title: 'STS Pavillion (WEB)', description: 'Multi-screen interface with elegant UI for Weddings, Receptions, and Private Events', img: stsweb, link: 'https://stsmahal-web.vercel.app/' },
//   { id: 5, title: 'Weather App', description: 'Weather app providing current weather and forecast with cities-based search', img: weather, link: 'https://weather-app-smoky-chi.vercel.app/' },
//   //{ id: 5, title: 'Games', description: 'Small Works', img: games, link: 'https://games-rho-pearl.vercel.app/'  }, 
// ];

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 600,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 992,
//       settings: { slidesToShow: 2 }
//     },
//     {
//       breakpoint: 768,
//       settings: { slidesToShow: 1 }
//     }
//   ]
// };

// function Projects() {
//   return (
//     <div className="projects-container">
//       <motion.h1
//         className="projects-title"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         📈 Projects
//       </motion.h1>

//       <Slider {...settings} className="projects-carousel">
//         {projectsData.map((project) => (
//           <motion.div
//             key={project.id}
//             className="project-card"
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <a href={project.link} target='_blank' rel='noopener noreferrer'>
//               <img src={project.img} alt={project.title} className="project-image" />
//               <h4 className="title">{project.title}</h4>
//             </a>
//             <p className="description">{project.description}</p>
//           </motion.div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Projects;
