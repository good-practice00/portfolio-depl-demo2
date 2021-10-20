import React, { useState, useRef, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Navbar3.module.css";
import { lists } from "../../utils/data";

const Navbar3 = () => {
  const [showLists, setShowLists] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log("linksHeight: ", linksHeight);

    if (showLists) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
      console.log(linksHeight);
    } else {
      linksContainerRef.current.style.height = `0px`;
      console.log(linksContainerRef.current.style.height);
    }
  }, [showLists]);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <h3>Logo</h3>
            <button
              className={styles.navBtn}
              onClick={() => {
                console.log(showLists);
                setShowLists(!showLists);
              }}
            >
              <BiMenuAltRight />
            </button>
          </div>
          <div className={styles.navListsBox} ref={linksContainerRef}>
            <ul
              //       className={`${styles.navLists} ${showLists && styles.showLists}`}
              className={`${styles.navLists}`}
              ref={linksRef}
            >
              {lists.map((list, index) => {
                const { url, text } = list;
                return (
                  <div key={index}>
                    <li className={styles.navList}>
                      <a
                        href={url}
                        onClick={() => {
                          setShowLists(!showLists);
                        }}
                      >
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
    </>
  );
};

export default Navbar3;
