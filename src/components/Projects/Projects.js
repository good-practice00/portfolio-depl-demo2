import React from "react";
import { projects } from "../../utils/data";
import Title from "../Title/Title";
import Project from "./Project";

const Projects = () => {
  const projectLists = projects.map((project) => {
    const { id, img, number, title, description, techstack, icons } = project;
    return (
      <Project
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
      <Title title="Featured Projects" />
      {projectLists}
    </div>
  );
};

export default Projects;
