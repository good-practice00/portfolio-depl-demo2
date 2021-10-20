// import "./Experience.css";
import styles from "./Experience.module.css";
import React, { useState } from "react";
// import { experiences } from "../../utils/experiences";
import { experiences } from "../../utils/data";
import Title from "../Title/Title";

const Experience = () => {
  const [value, setValue] = useState(0);
  const experience = experiences[value];

  const { title, dates, duties, company, companyFull, duties2 } = experience;

  return (
    <section id="experience" className={styles.experienceSection}>
      <Title title="Experience" />
      <div className={styles.experienceCenter}>
        <div className={styles.experienceCenterBtnContainer}>
          {experiences.map((experience, index) => {
            const { company } = experience;
            return (
              <button
                key={index}
                className={`${styles.experienceCompanyBtn} ${
                  index === value && styles.activeBtn
                }`}
                onClick={() => setValue(index)}
              >
                {company}
              </button>
            );
          })}
        </div>
        <article className={styles.experienceCenterDescriptions}>
          <h3>{title}</h3>
          <h4>{companyFull}</h4>
          <p>{dates}</p>
          <ul>
            {duties2.map((duty, index) => {
              const { icon, text } = duty;
              return text.map((t) => {
                return (
                  <div style={{ display: "flex", marginBottom: "0.8rem" }}>
                    <li style={{ marginTop: "0.2rem" }}>{icon}</li>
                    <li className={styles.text}>{t}</li>
                  </div>
                );
              });
            })}
          </ul>
          {/* {duties.map((duty, index) => {
            return (
              <div key={index}>
                <p>{duty}</p>
              </div>
            );
          })} */}
        </article>
      </div>
    </section>
  );
};

export default Experience;
