import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/khageshvaraImageLogo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.imageLogoContainer}>
          <img src={logo} alt="Logo" />
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
