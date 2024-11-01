import React from 'react'
import style from "../RevolutionSection/Revolution.module.css"
import Img1 from "../../assets/img1.svg"
import Img2 from "../../assets/img2.svg"
import Img3 from "../../assets/img3.svg"
import Img4 from "../../assets/img4.svg"
import Img5 from "../../assets/img5.svg"
import Img6 from "../../assets/img6.svg"
import Img7 from "../../assets/img7.svg"
import Img8 from "../../assets/img8.svg"
import Img9 from "../../assets/img9.svg"
import EVTOL from "../../assets/EVTOL_plane.webp"
import EVTOL2 from "../../assets/videos/Features.mp4"

const Revolution = () =>{
  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.heading}>
            <div className={style.heading_1}>INDIA'S FLIGHT</div>
            <div className={style.heading_2}>REVOLUTION</div>
        </div>
        <div className={style.Evtol_video}>
            <video className={style.v2} autoPlay loop muted>
                <source src={EVTOL2} type="video/mp4"/>
            </video>
        </div>
    </div>
{/*
    <div className={style.contentwrapper}>
        <div className={style.revolution_header}>
            <div className={style.heading}>
                <span className={style.heading_1}>INDIA'S AIR TAXI</span>
                <span className={style.heading_2}>REVOLUTION</span>
            </div>
            <div className={style.Video_Container}>
                <video className={style.v2} autoPlay loop muted>
                    <source src={EVTOL2} type="video/mp4"/>
                </video>
            </div>
        </div>
    </div> */}
    </>
  )
}

export default Revolution
