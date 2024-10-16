import React from 'react';
import '../styles/Skills.css'; // Import CSS for styling
import images from '../res/images';
import Marquee from 'react-fast-marquee'; // Import react-fast-marquee

// Importing skill images
const html = images.values.html;
const css = images.values.css;
const js = images.values.js;
const bootstrap = images.values.bootstrap;
const react = images.values.react;
const git = images.values.git;
const sql = images.values.sql;
const spring = images.values.spring;
const postman = images.values.postman;
const vercel = images.values.vercel;

// Skill data array
const skillsData = [
  { id: 1, title: 'HTML5', img: html },
  { id: 2, title: 'CSS3', img: css },
  { id: 3, title: 'JavaScript', img: js },
  { id: 4, title: 'Bootstrap', img: bootstrap },
  { id: 5, title: 'React Native', img: react },
  { id: 6, title: 'Git', img: git },
  { id: 7, title: 'MsSql', img: sql },
  { id: 8, title: 'Spring', img: spring },
  { id: 9, title: 'Postman', img: postman },
  { id: 10, title: 'Vercel', img: vercel },
];

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">Skills</h1>
      {/* Using react-fast-marquee for the scrolling effect */}
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="marquee-content">
          {skillsData.map(skill => (
            <div key={skill.id} className="skill-item">
              {/* Dynamically setting the class name based on skill ID */}
              <img src={skill.img} alt={skill.title} className={`skill-icon skill-icon-${skill.id}`} />
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Skills;
