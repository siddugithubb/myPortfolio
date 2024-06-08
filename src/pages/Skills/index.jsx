import React from 'react';
import Pageheader from '../../components/Pageheader';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import "./style.scss"

export default function Skills() {
  const SkillsData = [
    {
      label: "Programming",
      data: [
        {
          Skills: "C++",
          percentage: "90"
        },
        {
          Skills: "Python",
          percentage: "90"
        },
        {
          Skills: "MATLAB",
          percentage: "70"
        },
        {
          Skills: "LATEX",
          percentage: "60"
        },
      ]
    },
    {
      label: "Development",
      data: [
        {
          Skills: "HTML",
          percentage: "90"
        },
        {
          Skills: "CSS",
          percentage: "80"
        },
        {
          Skills: "JavaScript",
          percentage: "70"
        },
        {
          Skills: "ReactJS",
          percentage: "75"
        },
      ]
    },
    {
      label: "Software",
      data: [
        {
          Skills: "Excel",
          percentage: "85"
        },
        {
          Skills: "Git/GitHub",
          percentage: "80"
        },
        {
          Skills: "Jupyter",
          percentage: "70"
        },
      ]
    },
    {
      label: "Data Science",
      data: [
        {
          Skills: "Numpy",
          percentage: "80"
        },
        {
          Skills: "Pandas",
          percentage: "75"
        },
        {
          Skills: "Tensorflow",
          percentage: "70"
        },
        {
          Skills: "Scikit-learn",
          percentage: "65"
        },
        {
          Skills: "Keras",
          percentage: "60"
        },
        {
          Skills: "Matplotlib",
          percentage: "70"
        },
      ]
    }
  ];
  
  
  return (
    <section>
      <Pageheader
      headerText="Skills"
      icon = {<BsFillBriefcaseFill size={40} />}
      />
      <div className="skills-container">
      {SkillsData.map((category, index) => (
        <div key={index} className="skills-category">
          <h3>{category.label}</h3>
          {category.data.map((skill, i) => (
            <div key={i} className="skill-bar">
              <span className="skill-label">{skill.Skills}</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className="percentage">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>

    </section>
  )
}
