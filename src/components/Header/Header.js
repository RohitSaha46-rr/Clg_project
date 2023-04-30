import React, { useEffect, useState } from "react";
import './header.css';
import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { postData } from "../../Api";


function Header() {
  const user_id = localStorage.getItem('user_id');
  const [userName, setUserName] = useState('');
  const [userValid, setUserValid] = useState(false);

  useEffect(() => {
    const apiCall = async () => {
      const res = await postData(`valid_user/${user_id}`);
      if (res.status === 200) {
        setUserName(res.data.name);
        setUserValid(true);

      } else {
        setUserValid(false);
      }

    }

    apiCall()
  }, [])

  const logout=()=>{
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_id");
    window.location.href='/'
  }
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
      {
        userValid ? <>
         <NavLink >
            <button className="btn2" onClick={logout}>Logout</button>
          </NavLink>
           <p>Welcome {userName}</p>
        </> : <>
          <NavLink to="/login">
            <button className="btn1">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="btn2">SignIn</button>
          </NavLink>
        </>
      }

    </div>
  );
}

export default Header;
