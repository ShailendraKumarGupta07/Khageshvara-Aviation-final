import React ,{useState} from "react";
import styles from "./Hero.module.css";
import bgImage from "../../assets/herobgImage2.png";
import topvideo from "../../assets/videos/top_video.mp4"

const Hero = () => {
  return (
    <>

      {/* use this if you need the image UI  */}
      {/* <div className={styles.wrapper}>
        <img src={bgImage} alt="" className={styles.bgImage} />
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.bigTextWrapper}>
              NEXT GEN <span>MOBILITY</span>
            </div>
            <div className={styles.smallTextWrapper}>
              Khageshvara's Groundbreaking <span>'Air Taxi'</span>, Your Express
              Ticket to Faster, Smoother Trips.
            </div>
          </div>
          <div className={styles.btnWrapper}>
            <button className={styles.btn}>Join Our Revolution</button>
          </div>
        </div>
      </div> */}


      {/* Use this if you need the video UI  */}
      <div className={styles.wrapper}>
        <video className={styles.bgVideo} autoPlay loop muted preload="auto">
                <source src ={topvideo} type="video/mp4"/>
        </video>
      </div>

    </>
  );
};

export default Hero;
