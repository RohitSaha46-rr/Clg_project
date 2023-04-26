import React from "react";
import './header.css';
import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      <NavLink to="/login">
      <button className="btn1">Login</button>
      </NavLink>
      <NavLink to="/signup">
      <button className="btn2">SignIn</button>
      </NavLink>
    </div>
  );
}

export default Header;
