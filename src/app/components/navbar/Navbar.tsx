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
    </div>
  );
};

export default Navbar;
