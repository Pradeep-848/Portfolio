import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Example icons for work and education
import '../styles/Experience.css'
import { SiFuturelearn } from 'react-icons/si';

const experienceData = [
  {
    id: 1,
    title: 'Software Developer',
    company: 'DBQuest Business Solutions',
    duration: 'Mar 2024 - Present',
    description: 'Developed and maintained web & app applications using React, React Native, SpringBoot, MSSql and AWS services.',
    icon: <FaBriefcase />, 
  },
  {
    id: 2,
    title: 'FreeLancing',
    duration: 'September 2023 - Jan 2024',
    description: 'Developed web and app applications',
    icon: <SiFuturelearn />,
  },
  {
    id: 3,
    title: 'InternShip',
    company: 'Amypo Technologies Pvt Ltd',
    duration: 'Feb 2023 - August 2023',
    description: 'Developed live web applications, collaborated on projects, and improved coding skills.',
    icon: <FaGraduationCap />,
  },
];

function Experience() {
  return (
    <div className="experience-container">
      <h4 className="experience-title">💼 Experience</h4>
      <VerticalTimeline>
        {experienceData.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            date={experience.duration}
            icon={experience.icon}
            iconStyle={{ background: '#3498db', color: '#fff' }} // Customize the icon color
            contentStyle={{
              background: window.innerWidth < 768 ? 'white' : '#f9f9f9',
              color: window.innerWidth < 768 ? 'white' : 'grey',
            }} // Customize card background
            contentArrowStyle={{ borderRight: '7px solid #f9f9f9' }} // Customize arrow color
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.company}</h4>
            <p className="vertical-timeline-element-description">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
