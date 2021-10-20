import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import styles from "./Narbar2.module.css";
import { lists } from "../../utils/data";

const Navbar2 = () => {
  const [showLists, setShowLists] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navCenter}>
          <div className={styles.navHeader}>
            <h3>Logo</h3>
            <button
              className={styles.navBtn}
              onClick={() => {
                console.log("clicked");
                console.log(showLists);
                setShowLists(!showLists);
              }}
            >
              <BiMenuAltRight />
            </button>
          </div>
          <div className={styles.navListsBox}>
            <ul
              className={`${styles.navLists} ${showLists && styles.showLists}`}
            >
              {lists.map((list) => {
                const { url, text } = list;
                return (
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
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
