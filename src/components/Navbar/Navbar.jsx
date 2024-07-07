import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/khageshvaraImageLogo.svg";
import { Sling as Hamburger } from 'hamburger-react';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [isColorChanged, setColorChanged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    const handleMouseMove = (e) => {
      if (e.clientY <= 50) {
        setVisible(true);
      }
    };


    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
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
          <Link  to="/" className={styles.name}>KHAGHESHVARA</Link>
        </div>

        <div className={styles.list}>
          <div className={styles.listElement}>
             <Link className={styles.about} to="/about">About Us</Link>
          </div>
          <div className={styles.listElement}>
            <Link className={styles.technology} to="/technology">Technology</Link>
          </div>
          <div className={styles.listElement}>
            <Link className={styles.career} to="/career">Careers</Link>
          </div>
        </div>

        <div className={styles.hamburger} onClick={handleHamburgerClick}>
          <Hamburger toggled={isOpen} toggle={setOpen} easing="ease-in" duration={0.3} ></Hamburger>
          {isOpen && (
            <div className={styles.dropdown} onClick={disable}>
              <div className={styles.dropdownElement}>
                <Link className={styles.about} to="/">Home</Link>
              </div>
              <div className={styles.dropdownElement}>
                <Link className={styles.about} to="/about">About Us</Link>
              </div>
              <div className={styles.dropdownElement}>
                <Link className={styles.technology} to="/technology">Technology</Link>
              </div>
              <div className={styles.dropdownElement}>
                <Link className={styles.career} to="/career">Careers</Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
