import React, {useEffect,useState, useRef} from 'react'
import style from "./VisionSection.module.css"
// import style from "../FutureSection/Future.module.css"
import carousel1 from "../../assets/KHAG.jpg"
import carousel2 from "../../assets/khag3.jpg"
import previous from "../../assets/carousel_images/left.svg"
import next from "../../assets/carousel_images/right.svg"
const VisionSection = () => {

  // const [percent, setPercent] = useState(50);
  // const [direction, setDirection] = useState(1);
  // const containerRef = useRef(null);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPercent(prevPercent => {
  //       let newPercent = prevPercent + direction;
  //       if (newPercent >= 100 || newPercent <= 0) {
  //         setDirection(-direction);
  //         newPercent = prevPercent;
  //       }
  //       return newPercent;
  //     });
  //   }, 50);

  //   return () => clearInterval(interval);
  // }, [direction]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButton = () => {
    console.log('click hua');
    setCurrentIndex((prevIndex) =>
      prevIndex === 1 ? 0 : prevIndex + 1
    );
  };

  const prevButton = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 1 : prevIndex - 1
    );
  };

  const setCurrentSlide = (index) =>{
    setCurrentIndex(index);
  };
  return (
    <>
        {/* <div className={styles.pageWrapper}>
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
        </div> */}

        <div className={style.top_carousel_container}>
          <div className={style.heading}>WHO IS <span>KAT</span> ?</div>
          <div className={style.carouselContainer_top_carousel}>
            <div className={style.carousel_top_carousel}>
              <div className={style.btn_cont_top_carousel}>
                <button className={style.left_top_carousel} onClick={prevButton}>
                  <img src={previous} alt="Previous" />
                </button>
                <button className={style.right_top_carousel} onClick={nextButton}>
                  <img src={next} alt="Next" />
                </button>
              </div>
              <div className={style.cards_top_carousel} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                  <div className={style.card_top_carousel}>
                    <img src={carousel1} alt="Image 1" />
                  </div>
                  <div className={style.card_top_carousel}>
                    <img src={carousel2} alt="Image 2" />
                  </div>
              </div>
              <div className={style.change_top_carousel}>
                  <div className={style.change_1_top_carousel} onClick={()=> setCurrentSlide(0)} style={{background: currentIndex===0 ? 'white': 'rgba(0,0,0,0.2)'}}></div>
                  <div className={style.change_2_top_carousel} onClick={()=> setCurrentSlide(1)} style={{background: currentIndex===1 ? 'white': 'rgba(0,0,0,0.2)'}}></div>
              </div>
              <div className={style.at_low_media_queries}>
                  <div className={style.card_top_carousel}>
                    <img src={carousel1} alt="Image 1" />
                  </div>
                  <div className={style.card_top_carousel}>
                    <img src={carousel2} alt="Image 2" />
                  </div>
              </div>

            </div>
          </div>
      </div>
    </>
  )
}

export default VisionSection