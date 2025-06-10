import React from 'react';
import '../styles/Skills.css';
import images from '../res/images';
import Marquee from 'react-fast-marquee';

// Importing skill images
const html = images.values.html;
const css = images.values.css;
const js = images.values.js;
const java = images.values.java;
const react = images.values.react;

// Skill data array
const skillsData = [
  { id: 1, title: 'HTML5', img: html },
  { id: 2, title: 'CSS3', img: css },
  { id: 3, title: 'JavaScript', img: js },
  { id: 4, title: 'Java', img: java },
  { id: 5, title: 'React Native', img: react },
];

function Skills() {
  return (
    <div className="skills-container">
      <h1 className="skills-title">🚀 Skills</h1>
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
