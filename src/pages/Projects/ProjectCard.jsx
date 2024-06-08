import React, { useState } from 'react';
import './style.scss';

const ProjectCard = ({ name, description, date, image }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">
        <img src={image} alt="Project" />
      </div>
      <div className={`project-info ${hovered ? 'show-details' : ''}`}>
        <h3>{name}</h3>
        <div className="project-details" dangerouslySetInnerHTML={createMarkup(description)} />
        <p>[{date}]</p>
      </div>
    </div>
  );
};

export default ProjectCard;
