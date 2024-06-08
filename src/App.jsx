import "./App.css";
import {Routes,Route,useLocation} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import ContactMe from "./pages/Contact Me";
import Navbar from "./components/Navbar";
import ParticlesComponent from "./utils/Particles";

export default function App() {
  const location = useLocation();
  const renderParticleInHomepage=location.pathname ==="/";
  return (
    <div>
      {renderParticleInHomepage &&(
        <ParticlesComponent id="particle"/>
      )}
      
      {/* Navbar */}
      <Navbar/>


    {/*  pages */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path ="/ContactMe" element={<ContactMe/>}/>
        <Route path ="/Projects" element={<Projects/>}/>
        <Route path ="/Resume" element={<Resume/>}/>
        <Route path ="/Skills" element={<Skills/>}/>
      </Routes>

    </div>
  )
}
