import "./NavBar.css";
import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { lists } from "../../utils/data";

const NavBar2 = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(showLinks);
    setShowLinks(!showLinks);
    console.log(showLinks);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Logo</h3>
          <button className="nav-btn" onClick={handleClick}>
            <BiMenuAltRight />
          </button>
        </div>
        <div className={`nav-lists-box ${showLinks && "show-lists-box"}`}>
          <ul className="nav-lists">
            {lists.map((list, index) => {
              const { url, text } = list;
              return (
                <div key={index}>
                  <li>
                    <a href={`#${url}`} className="nav-list">
                      {text}
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleClick = () => {
    console.log("clicked");
    setShowLinks(!showLinks);
    console.log(showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log("linksHeight", linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      console.log(linksHeight);
    } else {
      linksContainerRef.current.style.height = `0px`;
      console.log(linksContainerRef.current.style.height);
    }
  }, [showLinks]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Logo</h3>
          <button className="nav-btn" onClick={handleClick}>
            <BiMenuAltRight />
          </button>
        </div>
        <div className="nav-lists-box" ref={linksContainerRef}>
          <ul className="nav-lists" ref={linksRef}>
            {lists.map((list, index) => {
              const { url, text } = list;
              return (
                <div key={index}>
                  <li>
                    <a href={`#${url}`} className="nav-list">
                      {text}
                    </a>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
