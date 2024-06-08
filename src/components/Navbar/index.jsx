import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./style.scss"

const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/About",
  },
  
  {
    label: "Projects",
    to: "/Projects",
  },
  {
    label: "Resume",
    to: "/Resume",
  },
  {
    label: "Skills",
    to: "/Skills",
  },
  {
    label: "Contact",
    to: "/ContactMe",
  },
];

export default function Navbar() {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggle = () => {
    setToggleIcon(!toggleIcon);
  };
  const handleLinkClick = () => {
    setToggleIcon(false); // Close the menu when a link is clicked
  };
  return (
    <div>
      <nav className="navbar">
        <div>
          <span>Sid's Portfolio</span>
        </div>
          <div>
            <ul className={`navbar_container_menu ${toggleIcon ?'active': ''}`}>
            {data.map((item, key) => (
              <li key={key} className="navbar_container_menu_item">
                <Link className="navbar_container_menu_item_link" to={item.to} onClick={handleLinkClick}>
                  {item.label}
                  
                </Link>
              </li>
            ))}
          </ul>
          </div>
        <div className="nav_icon" onClick={handleToggle}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30}/>}
        </div>
      </nav>
    </div>
  );
}
