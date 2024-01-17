"use client";
import React from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.navigation}>
        <button className={Styles.button}>learn More</button>
        <div className={Styles.burgerMenuContainer}>
          <div className={Styles.burgerMenuTrigger}></div>
          <div className={Styles.burgerMenu}></div>
        </div>
      </div>
      <div className={Styles.content}>
        <ul>
          <li><a href="/"></a>home</li>
          <li><a href="/"></a>about</li>
          <li><a href="/"></a>portfolio</li>
          <li><a href="/"></a>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
