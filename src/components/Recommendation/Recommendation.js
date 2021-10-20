// import styles from "./Recommendation.module.css";
import "./Recommendation.css";
import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import { recommendations } from "../../utils/data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Recommendation = () => {
  const [readMore, setreadMore] = useState(false);
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(recommendations);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div id="recommendations" className="recommendations">
      <Title title="Recommendations" />
      {/* <div className={styles.recomBox}> */}
      <div className="recomBox">
        {recommendations.map(
          ({ img, name, title, company, text }, personIndex) => {
            let position = "nextSlide";

            if (personIndex === index) {
              position = "activeSlide";
            }

            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = "prevSlide";
            }

            return (
              <article key={personIndex} className={position}>
                {/* <article key={personIndex} className={`${styles}.${position}`}> */}
                <img src={img} alt="" className="imagee" />
                {/* <img src={img} alt="" className={styles.imagee} /> */}
                <p className="articleName">{name}</p>
                <p className="articleTitle">{title}</p>
                <p className="text">
                  {readMore ? text : `${text.substring(0, 300)}... `}
                  <button onClick={() => setreadMore(!readMore)}>
                    {readMore ? "Show less" : "Read more"}
                  </button>
                </p>
              </article>
            );
          }
        )}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Recommendation;
