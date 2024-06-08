import React from "react";
import Pageheader from "../../components/Pageheader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './style.scss'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit } from 'react-icons/fa';



export default function About() {
  const personaldata = [
    {
      label: "Name",
      value: " Sidhartha",
    },
    {
      label: "Age",
      value: "21",
    },
    {
      label: "Adress",
      value: "Hyderabad,Telangana",
    },

    {
      label: "Phone.no",
      value: "7288924662",
    },
    {
      label: "Email Adress",
      value: "lakavathsiddharth@gmail.com",
    },
  ];
  const information =
    "I am Lakavath Sidhartha, currently pursuing my B-Tech in Chemical Engineering at IIT Bombay. I completed my 12th grade in Hyderabad, cleared JEE Advanced, and joined IIT Bombay. I have a keen interest in web development and have done several self-projects in front-end development that are user-interactive and user-friendly. Additionally, I am very good at problem-solving and am hardworking. I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using frameworks like React and Angular. My dedication to continuously improving my skills and staying updated with the latest technologies makes me confident in my ability to contribute effectively";
  return (
    <section className="about" id="about">
      <Pageheader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about_content">
        <div className="about_content_personalwrapper">
        <Animate
        play
        duration={1.2}
        delay={0.7}
        start={{
          transform: "translateX(-900px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
        >
      <h2>Introduction</h2>
      <p >{information}</p>
      </Animate>

      <Animate
       play
       duration={1.2}
       delay={0.7}
       start={{
         transform: "translateX(500px)",
       }}
       end={{
         transform: "translateX(0px)",
       }}
      >
        
      <h2 className="personalinfo">Personal Information</h2>
      <ul>
        {
          personaldata.map((item,i)=>(
            <li key={i}>
              <span className="title">  {item.label} </span>
              <span className="value"> {item.value} </span>

            </li>
          ))

        }
      </ul>
      </Animate>
        </div>
        <div className="about_content_serviceswrapper">
          <Animate
           play
           duration={1.2}
           delay={0.7}
           start={{
             transform: "translateX(1000px)",
           }}
           end={{
             transform: "translateX(500px)",
           }}
          >
          <div> <FaHtml5  size={60} color="#f1c40f"/></div>
          <div><FaCss3Alt size={60} color="#f1c40f"/></div>
          <div> <FaJs size={60} color="#f1c40f"/> </div>
          <div> <FaReact size={60} color="#f1c40f"/></div>
          <div> <FaGit size={60} color="#f1c40f"/></div>
          </Animate>
        </div>
        <div className="about_content_serviceswrapper_responsive">
          <Animate
           play
           duration={1.2}
           delay={0.8}
           start={{
             transform: "translateX(90px)",
           }}
           end={{
             transform: "translateX(2px)",
           }}
          >
          <div> <FaHtml5  size={30} color="#f1c40f"/></div>
          <div><FaCss3Alt size={30} color="#f1c40f"/></div>
          <div> <FaJs size={30} color="#f1c40f"/> </div>
          <div> <FaReact size={30} color="#f1c40f"/></div>
          <div> <FaGit size={30} color="#f1c40f"/></div>
          </Animate>
        </div>
       
      </div>
    </section>
  );
}
