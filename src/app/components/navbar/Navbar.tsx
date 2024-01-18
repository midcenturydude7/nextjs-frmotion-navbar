"use client";
import React from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className={`${Styles.navbar} ${Styles.active}`}>
      <div className={Styles.navigation}>
        <button className={Styles.button}>learn More</button>
        <div className={Styles.burgerMenuContainer}>
          <div className={Styles.burgerMenuTrigger}></div>
          <div className={Styles.burgerMenu}></div>
        </div>
      </div>
      <div className={Styles.content}>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">portfolio</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
