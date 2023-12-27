import React from 'react'
import styles from "./Hero.module.css"
import bgImage from "../../assets/heroBgImage.webp"
const Hero = () => {
  return (
    <>
        <div className={styles.wrapper}>
        <img src={bgImage} alt="" className={styles.bgImage}/>
        <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.bigTextWrapper}>
          NEXT GEN <span>MOBILITY</span> 
          </div>
          <div className={styles.smallTextWrapper}>
          Khageshvara's Groundbreaking <span>'Air Taxi'</span> , Your Express Ticket to Faster, Smoother Trips.
          </div>
        </div>
          <div className={styles.btnWrapper}>
            <button className={styles.btn}>Join Our Revolution</button>
          </div>
        </div>
        </div>
    </>
  )
}

export default Hero