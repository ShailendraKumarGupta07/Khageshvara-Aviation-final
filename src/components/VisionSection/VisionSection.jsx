import React, {useEffect,useState, useRef} from 'react'
import styles from "./VisionSection.module.css"
import plane from "../../assets/visionPlane.webp"
import bottom from "../../assets/visionBottom.svg"
import v from "../../assets/videos/EVTOL.mp4"
import IM1 from '../../assets/KHAG.png'
import IM2 from '../../assets/khag3.png'
const VisionSection = () => {

  const [percent, setPercent] = useState(50);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const newPercent = (x / width) * 100;
        setPercent(newPercent);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  return (
    <>
        <div className={styles.pageWrapper}>
          <div className={styles.heading}>WHO IS <span>KAT</span> ?</div>

          <div className={styles.content1}>
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



          <div className={styles.content2}>
              <div className={styles.hello} ref={containerRef}>
              <img className={styles.test_image1} src={IM1} alt="" style={{ clipPath: `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)` }} />
              <img  className={styles.test_image} src={IM2} alt="" style={{ clipPath: `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)` }} />
              </div>
          </div>

          <div className={styles.bottomImage}>
            <video className={styles.v1} autoPlay loop muted>
              <source src ={v} type="video/mp4"/>
            </video>
          </div>
        </div>
    </>
  )
}

export default VisionSection