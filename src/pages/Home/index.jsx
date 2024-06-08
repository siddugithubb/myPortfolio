import React from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleToNavigateContact = () => {
    navigate("/ContactMe");
  };
  const handleToNavigateResume = () => {
    navigate("/Resume");
  };
  return (
    <section id="home" className="home">
      <div className="home_text_wrapper">
        <Animate
         play
         duration={1.2}
         delay={0.7}
         start={{
           transform: "translateX(200px)",
         }}
         end={{
           transform: "translateX(-110px)",
         }}>
          <div className="home_image">
            <img className="home_image_dp" src="./public/img.jpg" alt="" />
          </div>
        </Animate>
        <div className="home_heading">
        <h1>
          Hello, Iam Sidhartha
          <div>and iam a passionate Frontend Developer</div>
        </h1>
        </div>
      </div>

      <Animate
        play
        duration={1.2}
        delay={0.7}
        start={{
          transform: "translateY(200px)",
        }}
        end={{
          transform: "translatey(0px)",
        }}
      >
        <div className="buttons">
          <button onClick={handleToNavigateResume} className="buttons_Resume">
            Resume
          </button>
          <button onClick={handleToNavigateContact} className="buttons_contact">
            HireMe
          </button>
        </div>
      </Animate>
    </section>
  );
}
