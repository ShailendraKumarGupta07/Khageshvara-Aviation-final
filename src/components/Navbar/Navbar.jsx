import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/khageshvaraImageLogo.svg";
import { Sling as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [isColorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);;
    };
  }, [prevScrollPos]);

  const handleHamburgerClick = () => {
    setColorChanged(prevColor => !prevColor);
  };
  const disable = () => {
    setColorChanged(prevColor => !prevColor);
  };
  

  return (
    <>
      <nav className={`${styles.navbar} ${visible ? styles.active : styles.hidden}`} style={{ backgroundColor: isColorChanged ? 'rgb(255, 255, 255)' : '' }}>
        <div className={styles.imageLogoContainer}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={styles.name}>
          <a href="/">KHAGHESHVARA</a>
        </div>

        <div className={styles.list}>
          <div className={styles.listElement}>Company</div>
          <div className={styles.listElement}>Technology</div>
          <div className={styles.listElement}>Careers</div>
        </div>
        
        <div className={styles.hamburger} onClick={handleHamburgerClick}>
          <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" duration={0.3}></Hamburger>
          {isOpen && (
            <div className={styles.dropdown} onClick={disable}>
              <div className={styles.dropdownElement}>Company</div>
              <div className={styles.dropdownElement}>Technology</div>
              <div className={styles.dropdownElement}>Careers</div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
