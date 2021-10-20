import React, { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Narbar4.module.css";
import { FaLinkedin, FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import mylogo from "../../assets/mylogo3-removebg-preview.png";
import { lists } from "../../utils/data";
import { socialIcons } from "../../utils/data";

const Navbar4 = () => {
  const [showLists, setShowLists] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShow(document.body.getBoundingClientRect().top > scrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show, scrollPos]);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setShowLists(!showLists);
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 85,
    });
  };

  // style={{ top: visible ? "0" : "-80px", transition: "all 0.3s linear" }}
  return (
    <>
      <nav
        className={`${styles.navbar} `}
        // className={`${styles.navbar} ${show ? styles.active : styles.hidden}`}
      >
        {/* <div className={styles.navCenter}> */}
        <div
          className={`${styles.navCenter} ${
            show ? styles.active : styles.hidden
          }`}
        >
          <div className={styles.navHeader}>
            <h2>Logo</h2>
            {/* <img src={mylogo} alt="" className={styles.myLogo} /> */}
            <button
              // className={styles.navBtn}
              className={`${styles.navBtn} ${showLists && styles.hideNavBtn}`}
              onClick={() => {
                console.log(showLists);
                setShowLists(!showLists);
              }}
            >
              <BiMenuAltRight />
            </button>
          </div>
          {/* <div className={styles.navListsBox} ref={linksContainerRef}> */}
          <div className={styles.navListsBox}>
            <ul
              //       className={`${styles.navLists} ${showLists && styles.showLists}`}
              className={`${styles.navLists}`}
              //       ref={linksRef}
            >
              {lists.map((list, index) => {
                const { url, text } = list;
                return (
                  <div key={index}>
                    <li className={styles.navList}>
                      {/* <a
                        href={url}
                        onClick={() => {
                          setShowLists(!showLists);
                        }}
                      > */}
                      <a href={url} onClick={handleClick}>
                        {text}
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <aside
          className={`${styles.sidebar} ${showLists && styles.showSidebar}`}
        >
          <div
            className={styles.sidebarHeader}
            // style={{ border: "3px solid white" }}
          >
            <h2>logo</h2>
            {/* <img src={mylogo} alt="" className={styles.myLogo} /> */}
            <button
              className={styles.sideCloseBtn}
              onClick={() => {
                setShowLists(!showLists);
              }}
            >
              <CgClose />
            </button>
          </div>
          {/* <div style={{ border: "3px solid white" }}> */}
          <div>
            <ul className={styles.sidebarLists}>
              {lists.map((list) => {
                const { id, url, text, icon } = list;
                return (
                  <div key={id}>
                    <li className={styles.sidebarList}>
                      {/* <a
                        href={url}
                        onClick={() => {
                          setShowLists(!showLists);
                        }}
                      > */}
                      <a href={url} onClick={handleClick}>
                        {icon}
                        {text}
                      </a>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
          {/* <div style={{ border: "3px solid white", marginBottom: "2rem" }}> */}
          <div style={{ marginBottom: "2rem" }}>
            <ul className={styles.sidebarIcons}>
              {socialIcons.map((item) => {
                const { icon, url } = item;
                return (
                  <li>
                    <a href={url} target="_blank">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </nav>
    </>
  );
};

export default Navbar4;
