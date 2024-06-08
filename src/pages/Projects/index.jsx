import React from 'react';
import Pageheader from '../../components/Pageheader';
import {BsFillFolderFill} from 'react-icons/bs';
import ProjectCard from './ProjectCard';
import diceimg from '../../../public/dice.webp'
//import './Projects.scss'


export default function Projects() {
  const projects = [
    {
      name: "Dice Game using ReactJS ",
      description: "Developed an interactive and visually appealing frontend interface for a <b>dice</b> game using ReactJS ,Utilized State management techniques in ReactJS to efficiently manage and update the game state and Developed and managed game logic for a dice game using ReactJS, incorporating user interactions",
      date: "Jan’24",
      image: diceimg,
    },
    {
      name: "Real-Time Facial Recognition System",
      description: "Developed a Siamese Neural Network for facial recognition, based on the research paper",
      date: "Dec’23",
      image:"./face.gif"
    },
    {
      name: "Spotify Clone Website ",
      description: "Developed a responsive web application emulating Spotify’s core features using HTML, CSS, and JS",
      date: "Mar’24",
      image:"./spotify.gif"
    },
    {
      name: "A fROSty winter | IIT Bombay",
      description: "2-member group workshop on Robot operating system using ROS and Gazebo",
      date: "Dec’23",
      image:"./bot.gif"
    },
    {
      name: "Machine Learning ",
      description: "Effectively utilized statistical formulas for data preprocessing, optimizing algorithm development",
      date: "May’23-Aug’23",
      image:"./ml.gif"
    },
    {
      name: "Excel for Big Data Analysis ",
      description: "Proficient in Excel, utilizing its powerful functions and formulas for data analysis and manipulation",
      date: "July’23",
      image:"./excel.gif"
    }
  ];
  return (
    <section>
      <Pageheader
      headerText="Projects"
      icon = {<BsFillFolderFill size={40} />}
      />
      <div className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          date={project.date}
          image={project.image}
        />
      ))}
    </div>
    </section>
  )
}
