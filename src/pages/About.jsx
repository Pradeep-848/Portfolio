import React from 'react';
import '../styles/About.css';
import Profile from '../assets/4profile.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="about-photo">
        <img src={Profile} alt="Profile" />
      </div>
      <div className="about-content">
        <h1 className='text'>I am Pradeep M</h1>
        <h4 style={{ color: '#fff000', marginBottom: '10px' }}>Software Developer</h4>
        <p>
          Hello! I am a passionate developer with experience in building
          web applications. I enjoy creating user-friendly interfaces
          and solving complex problems.
        </p>
        <p>
          In my spare time, I love exploring new technologies,
          working on personal projects, and sharing knowledge with others.
        </p>
        <button><a href='https://drive.google.com/file/d/1gtQ5LLO6jfs-f9JIK2u7jJDwtebhvBcu/view?usp=drive_link' style={{ textDecoration: 'none' }}>Resume</a></button>
      </div>
    </div>
  );
}

export default About;
