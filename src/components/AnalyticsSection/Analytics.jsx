import React, { useEffect } from 'react'
import style from "./Analytics.module.css"
import Video1 from "../../assets/videos/graph1.mp4"
import data1 from "../../assets/mapImage.jpg"
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/logo2.svg"
import map_video from "../../assets/videos/MAP_video.mp4"


const Analytics = () => {
  return (
    <>
    {/* <div className={style.wrapper}>
        <div className={style.heading}>
            <div className={style.headin1}>REACH THE</div>
            <div className={style.heading2}>UNREACHABLE</div>
        </div>
        <div className={style.data}>
            <div className={style.data1}>
                <div className={style.data1a}>
                    <p>Time to destination: KAT v/s other transit system.</p>
                </div>
                <div className={style.data1b}>
                    <img src={data1} alt="" />
                </div>
                <div className={style.data1c}>
                    <div className={style.data1c_A}>
                        <div className={style.data1c_a}>
                            <img src={icon1} alt="" />
                        </div>
                        <div className={style.data1c_a_a}>
                            <div className={style.data1c_a_a_a}>
                                <span>Distance</span>
                            </div>
                            <div className={style.data1c_a_a_b}>
                                <span>289 Km</span>
                            </div>
                        </div>
                        <div className={style.data1c_a_b}>
                            <div className={style.data1c_a_b_a}>
                                <span>Time</span>
                            </div>
                            <div className={style.data1c_a_b_b}>
                                <span>4 hour 49 min</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.data1c_C}></div>
                    <div className={style.data1c_B}>
                        <div className={style.data1c_b}>
                            <img src={icon2} alt="" />
                        </div>
                        <div className={style.data1c_b_a}>
                            <div className={style.data1c_b_a_a}>
                                <span>Distance</span>
                            </div>
                            <div className={style.data1c_b_a_b}>
                                <span>264 Km</span>
                            </div>
                        </div>
                        <div className={style.data1c_b_b}>
                            <div className={style.data1c_b_b_a}>
                                <span>Time</span>
                            </div>
                            <div className={style.data1c_b_b_b}>
                                <span>1 hour 21 min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.data2}>
                <div className={style.data2a}>
                    <p>Annual Megacity Resident Traffic Time Wasted (hours)</p>
                </div>
                <div className={style.data2b}>
                    <video className={style.play} autoPlay muted width="1402px" height="1042px" speed="1" >
                        <source className={style.play_1} src={Video1} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    </div> */}
    <div className={style.analytics_wrapper}>
            <div className={style.heading}>
                    <div className={style.heading1}>REACH THE</div>
                    <div className={style.heading2}>UNREACHABLE</div>
            </div>
            <div className={style.map_video_container}>
                <video className={style.map_Video} autoPlay loop muted preload="auto">
                    <source src ={map_video} type="video/mp4"/>
                </video>
            </div>
    </div>
    </>
  )
}

export default Analytics
