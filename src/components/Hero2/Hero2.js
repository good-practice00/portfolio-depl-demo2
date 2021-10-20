import styles from "./Hero2.module.css";
import React from "react";
import { socialIcons } from "../../utils/data";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroSection}>
        <h1>Ryan Park</h1>
        <h1>Fullstack Developer</h1>
        <br />
        <p>
          I'm a worldwide remote Software Developer who loves making ideas come
          true into a real world through digital experiences.{" "}
        </p>
        <div className={styles.heroIcons}>
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
        <button className={styles.btn}>Get In Touch</button>
      </div>
      <div className={styles.animation}>
        <img src="/images/background.png" alt="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
