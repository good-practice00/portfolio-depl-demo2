import styles from "./Footer.module.css";
import React from "react";
import { socialIcons } from "../../utils/data";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  console.log(thisYear);

  return (
    <section className={styles.footer}>
      <div className={styles.footerCenter}>
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
        {/* <p style={{ border: "1px solid red" }}> */}
        <p>
          COPYRIGHT©{thisYear} <span className={styles.myname}>RYAN PARK</span>{" "}
          ALL RIGHTS RESERVED
        </p>
      </div>
    </section>
  );
};

export default Footer;
