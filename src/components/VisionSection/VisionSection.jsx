import React from 'react'
import styles from "./VisionSection.module.css"
import plane from "../../assets/visionPlane.webp"
import bottom from "../../assets/visionBottom.svg"
const VisionSection = () => {
  return (
    <>
        <div className={styles.pageWrapper}>
          <div className={styles.heading}>WHO IS <span>KAT</span> ?</div>
          <div className={styles.content}>
            <div className={styles.planeImage}>
              <img src={plane} alt="" />
            </div>
            <div className={styles.textContent}>
              <div className={styles.text}>
                <span className={styles.textHeading}>OUR VISION</span>
                <p className={styles.textPara}>Our vision is to lead an eVTOL ecosystem transformation, turning skies into eco-friendly highways, cutting aviation carbon emissions, and fostering sustainable growth, with roots in Asia and a global reach: the forefront of next-gen mobility.</p>
              </div>
              <div className={styles.text}>
                <span className={styles.textHeading}>OUR MISSION</span>
                <p className={styles.textPara}>Our mission to redefine the future of transportation with next-gen, safe, fast, and sustainable mobility solutions. Our commitment is encapsulated in our ethos: "Reaching the Unreachable," as we strive to access remote areas, serve underserved communities, and push the boundaries of innovation. </p>
              </div>
            </div>
          </div>
          <div className={styles.bottomImage}>
            <img src={bottom} alt="" />
          </div>
        </div>
    </>
  )
}

export default VisionSection