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

const Revolution = () =>{
  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.heading}>
            <span className={style.heading_1}>INDIA'S AIR TAXI</span>
            <span className={style.heading_2}>REVOLUTION</span>
            <span className={style.heading_3}>100+ km Range, Affordable, Quiet.</span>
        </div>
        <div className={style.EVTOL}>
            <div className={style.EVTOL_1}>
                <img src={EVTOL} alt="" />
            </div>
            <div className={style.EVTOL_2}>
                <div className={style.EVTOL_2_1}>
                    <div className={style.box1_a}>
                        <img src={Img1} alt="" />
                    </div>
                    <div className={style.box1_b}>
                        <p>Vertical take-off and landing</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_2}>
                    <div className={style.box2_a}>
                        <img src={Img2} alt="" />
                    </div>
                    <div className={style.box2_b}>
                        <p>100% Electric</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_3}>
                    <div className={style.box3_a}>
                        <img src={Img3} alt="" />
                    </div>
                    <div className={style.box3_b}>
                        <p>Cost Effective</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_4}>
                    <div className={style.box4_a}>
                        <img src={Img4} alt="" />
                    </div>
                    <div className={style.box4_b}>
                        <p>Reliable</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_5}>
                    <div className={style.box5_a}>
                        <img src={Img5} alt="" />
                    </div>
                    <div className={style.box5_b}>
                        <p>Quiet</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_6}>
                    <div className={style.box6_a}>
                        <img src={Img6} alt="" />
                    </div>
                    <div className={style.box6_b}>
                        <p>Long Range</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_7}>
                    <div className={style.box7_a}>
                        <img src={Img7} alt="" />
                    </div>
                    <div className={style.box7_b}>
                        <p>4 Passenger</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_8}>
                    <div className={style.box8_a}>
                        <img src={Img8} alt="" />
                    </div>
                    <div className={style.box8_b}>
                        <p>Eco-Friendly</p>
                    </div>
                </div>
                <div className={style.EVTOL_2_9}>
                    <div className={style.box9_a}>
                        <img src={Img9} alt="" />
                    </div>
                    <div className={style.box9_b}>
                        <p>Fast</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Revolution