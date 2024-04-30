import React , {useState, useEffect} from 'react'
import style from "../FutureSection/Future.module.css"
import img1 from "../../assets/carousel_images/img1.webp"
import img2 from "../../assets/carousel_images/img3.webp"
import img3 from "../../assets/carousel_images/img2.jpg"
import previous from "../../assets/carousel_images/left.svg"
import next from "../../assets/carousel_images/right.svg"

const Future = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextButton = () => {
    console.log('click hua');
    setCurrentIndex((prevIndex) =>
      prevIndex === 2 ? 0 : prevIndex + 1
    );
  };

  const prevButton = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? 2 : prevIndex - 1
    );
  };

  const setCurrentSlide = (index) =>{
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.Head}>
            <div className={style.sub1}>
                OUR FUTURE <span>FLEET</span>
            </div>
            <div className={style.sub2}>
                Offering services in Military, Commercial and Logistics domain.
            </div>
        </div>
        <div className={style.carouselContainer}>
        <div className={style.carousel}>

        <div className={style.btn_cont}>
        <button className={style.left} onClick={prevButton}>
          <img src={previous} alt="Previous" />
        </button>
        <button className={style.right} onClick={nextButton}>
          <img src={next} alt="Next" />
        </button>
        </div>
          <div className={style.cards} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            <div className={style.card}>
              <img src={img1} alt="Image 1" />
              <div className={style.description}>
                <p className={style.head}>Commercial</p>
                <p>Description</p>
                <p>A groundbreaking approach to urban mobility is being introduced, offering an efficeint means of transportation from airports to central city areas that circumvents congensted traffic conditions. This design is prominently centred on the paramount aspects of safety and passenger comfort.</p>
                <p></p>
                <p style={{margin: "0"}}>Target Market</p>
                <p style={{margin: "0"}}>Market Daily urban commuters and affluent travellers</p>
              </div>
            </div>
            <div className={style.card}>
              <img src={img2} alt="Image 2" />
              <div className={style.description}>
                <p className={style.head}>Logistics</p>
                <p>Description</p>
                <p>The model will be purposefully designed to cater to the specific needs of heavy material transport, with a primary focus on optimising both speed and efficency. This innovation has the potential to bring about a transformative shift in supply chain operations. </p>
                <p></p>
                <p style={{margin: "0"}}>Target</p>
                <p style={{margin: "0"}}>Delivery and logistics companies</p>
              </div>
            </div>
            <div className={style.card}>
              <img src={img3} alt="Image 3" /> 
              <div className={style.description}>
                <p className={style.head}>Military</p>
                <p>Description</p>
                <p>This model is purpose-built for military demands, excelling in harsh weather and remote terrains to enhance operational readiness by securely transporting personnel and equipment Target Market.</p>
                <p></p>
                <p style={{margin: "0"}}>Target</p>
                <p style={{margin: "0"}}>Military Vehicles</p>
              </div>
            </div>
          </div>
        <div className={style.change}>
            <div className={style.change_1} onClick={()=> setCurrentSlide(0)} style={{background: currentIndex===0 ? 'white': 'rgba(0,0,0,0.2)'}}></div>
            <div className={style.change_2} onClick={()=> setCurrentSlide(1)} style={{background: currentIndex===1 ? 'white': 'rgba(0,0,0,0.2)'}}></div>
            <div className={style.change_3} onClick={()=> setCurrentSlide(2)} style={{background: currentIndex===2 ? 'white': 'rgba(0,0,0,0.2)'}}></div>
        </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Future