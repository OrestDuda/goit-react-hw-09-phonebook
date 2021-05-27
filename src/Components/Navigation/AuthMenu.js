import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthMenu.module.css";
const Navigation = () => (
  <div>
    <NavLink to="/register" exact className={styles.nav_link}>
      Register
    </NavLink>
    <NavLink to="/login" className={styles.nav_link}>
      Login
    </NavLink>
  </div>
);

export default Navigation;
