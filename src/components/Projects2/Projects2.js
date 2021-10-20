import styles from "./Project2.module.css";
import React from "react";
import { projects2 } from "../../utils/data";
import Title from "../Title/Title";
import Project2 from "./Project2";

const Projects2 = () => {
  const projectLists = projects2.map((project) => {
    const { id, img, number, title, description, techstack, icons } = project;
    return (
      <Project2
        key={id}
        id={id}
        img={img}
        number={number}
        title={title}
        description={description}
        techstack={techstack}
        icons={icons}
      />
    );
  });
  return (
    <div
      id="projects"
      style={{ borderBottom: "1px solid #fff", paddingBottom: "4rem" }}
    >
      <Title title="Other Projects" />

      <div className={styles.flex}>{projectLists}</div>
    </div>
  );
};

export default Projects2;
