import React from "react";
import { useState } from "react";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.imageLogoContainer}>
          <img src="src/assets/khageshvaraImageLogo.svg" alt="Logo" />
        </div>
        <div className={styles.name}>KAGHESHVARA</div>

        <div className={styles.list}>
          <div className={styles.listElement}>Company</div>
          <div className={styles.listElement}>Technology</div>
          <div className={styles.listElement}>Careers</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
