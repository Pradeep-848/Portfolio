import React from 'react';
import '../styles/Tools.css'; // Import CSS for styling
import images from '../res/images';
import Marquee from 'react-fast-marquee'; // Import react-fast-marquee

// Importing skill images
const vscode = images.values.vscode;
const expo = images.values.expo;
const antdesign = images.values.antdesign;
const shadcn = images.values.shadcn;
const tailwind = images.values.tailwind;
const bootstrap = images.values.bootstrap;
const git = images.values.git;
const sql = images.values.sql;
const spring = images.values.spring;
const postman = images.values.postman;
const vercel = images.values.vercel;

// Tool data array
const toolsData = [
  { id: 1, title: 'VSCode', img: vscode },
  { id: 2, title: 'Expo', img: expo },
  { id: 3, title: 'AntDesign', img: antdesign },
  { id: 4, title: 'Bootstrap', img: bootstrap },
  { id: 5, title: 'ShadCN UI', img: shadcn },
  { id: 6, title: 'Tailwind CSS', img: tailwind },
  { id: 7, title: 'Git', img: git },
  { id: 8, title: 'MsSql', img: sql },
  { id: 9, title: 'Spring', img: spring },
  { id: 10, title: 'Postman', img: postman },
  { id: 11, title: 'Vercel', img: vercel },
];

function Tools() {
  return (
    <div className="tools-container">
      <h1 className="tools-title">🔧 Tools</h1>
      {/* Using react-fast-marquee for the scrolling effect */}
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="marquee-content">
          {toolsData.map(tool => (
            <div key={tool.id} className="tool-item">
              {/* Dynamically setting the class name based on tool ID */}
              <img src={tool.img} alt={tool.title} className={`tool-icon tool-icon-${tool.id}`} />
              <p>{tool.title}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Tools;
