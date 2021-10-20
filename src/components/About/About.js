import styles from "./About.module.css";
import React from "react";
import Title from "../Title/Title";
import { skills } from "../../utils/data";
import { learningSkills } from "../../utils/data";

const About = () => {
  return (
    <div id="about">
      <Title title="About" />
      <div className={styles.aboutBox}>
        <div className={styles.aboutText}>
          <p>
            Hi my name is <span className={styles.aboutId}>Ryan</span> or you
            can call me Minsu (my Korean name). I'm a{" "}
            <span className={styles.aboutId}>philosopher</span>,{" "}
            <span className={styles.aboutId}>dreamer</span> and{" "}
            <span className={styles.aboutId}>self-taught developer.</span>
          </p>
          <p>
            I always believe that{" "}
            <span className={styles.aboutName}>
              "technologies advance has always made our lives and the whole
              world better."
            </span>{" "}
            My journey for becoming a developer has started from this motto.
          </p>
          <p>
            Among many technologies, Web is one of the amazing technologies that
            has contributed to making our lives better by connecting this whole
            world on the Internet.
          </p>
          <p>
            <span className={styles.aboutName}>
              To fulfill that sacred motto
            </span>{" "}
            and to be a part of the ones who can contribute and create this
            world better,{" "}
            <span className={styles.aboutName}>I've decided to become</span> a
            person from being a recipient of all the advantages of technologies
            to a <span className={styles.aboutName}>creator</span>, a{" "}
            <span className={styles.aboutName}>contributor</span> and a{" "}
            <span className={styles.aboutName}>provider</span> by becoming a
            developer.
          </p>
          <p>Here are a few technologies that I've been working with:</p>
          <ul className={styles.aboutSkills}>
            {skills.map((skill) => {
              const { name, icon } = skill;
              return (
                <li
                  style={{
                    // border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                  {name}
                </li>
              );
            })}
          </ul>
          <br />
          <p>Here are new technologies that I'm learning :</p>
          <ul className={styles.aboutSkills}>
            {learningSkills.map((skill) => {
              const { name, icon } = skill;
              return (
                <li
                  style={{
                    // border: "1px solid white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {icon}
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.aboutImage}>
          <img className={styles.imagee} src="/images/mee.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

/*
( Why I started learning to code? )

Hi my name is Ryan and I'm a philosopher and a dreamer before a developer. 

I always believe that "technologies evolution advance always make our lives and the whole world better" and my 
journey for becoming a developer has started from this motto.

Among many technologies, Web is one of the amazing technologies that has contributed to making our lives better by connecting this whole world on the Internet.

To fulfill that sacred motto and to be a part of the ones who can contribute and create this world better, I've decided to become a person from being a recipient of all the advantages of technologies to a creator and a contributor by becoming a developer.


WHAT
Here are a few technologies that I've been working with and it will be added more. 
You can listen to "About Me" more detail on this Youtube Video. (from when I started learning  / each experience story ) 
*/
