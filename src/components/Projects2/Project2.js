import styles from "./Project2.module.css";
import React, { useState } from "react";
// import wiki from "../../assets/11234.gif";

const Project2 = ({
  id,
  img,
  number,
  title,
  description,
  techstack,
  icons,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className={styles.project}>
      {/* <img src="/images/wiki4.jpg" alt="img" className={styles.projectImage} /> */}
      <img src={img} alt="img" className={styles.projectImage} />
      {/* <img src="/images/wiki3.jpg" alt="img" className={styles.projectImage} /> */}
      <div className={styles.projectInfo}>
        <span>{number}</span>
        <h3>{title}</h3>
        <p className={styles.textBox}>
          {readMore ? description : `${description.substring(0, 50)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? " Show less" : " Read more"}
          </button>
        </p>
        <div className={styles.projectTechstack}>
          <ul>
            {techstack.map((tech, index) => {
              return (
                <li>
                  <a>{tech}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className={styles.projectIcons}>
            {icons.map((item) => {
              const { url, icon } = item;
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
      </div>
    </article>
  );
};

export default Project2;
