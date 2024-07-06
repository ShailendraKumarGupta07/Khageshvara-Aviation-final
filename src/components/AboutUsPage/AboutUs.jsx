import React from "react";
import {Link, Routes,Route , BrowserRouter} from 'react-router-dom';
import style from './AboutUs.module.css';
import topimage from '../../assets/background_About_page.jpg';
import Ritvik from '../../assets/member_images/ritvik yadav.png';
import Shayandeep  from '../../assets/member_images/Shayandeep Das.png';
import BusinessTeam from "../BusinesTeam/BusinessTeam";
import TechTeam from "../TechTeam/TechTeam";


const AboutUs = () => {
  return (
    <>
    <div className={style.contentwrapper}>
      <div className={style.topImage}>
        <img src={topimage} alt="" />
      </div>
      <div className={style.aboutUs}>
        <div className={style.heading}>
          About <span>Us</span>
        </div>
        <div className={style.para}>
          <div>Established in 2023, Khageshvara Aviation Technology Private Limited is at the forefront of innovation in aerial mobility. Our focus lies in developing cutting-edge Electric Vertical Take-Off and Landing (E-VTOL) solutions. Committed to revolutionizing air travel, we combine state-of-the-art technology with a passion for sustainability. At Khageshvara Aviation, we aspire to redefine the future of transportation, creating a world where efficient and eco-friendly aerial mobility is accessible to all.</div>
        </div>
      </div>
      <div className={style.members}>
        <div className={style.co}>
          Co - <span>Founders</span>
        </div>
        <div className={style.team_members}>
          <div className={style.member}>
              <div className={style.member_image}>
                <img src={Ritvik}/>
              </div>
              <div className={style.member_info}>
                <div className={style.member_name}>
                  Ritivik Yadav
                </div>
                <div className={style.member_position}> CEO & Co-Founder </div>
                <div className={style.about_member}>
                  <div>In the tapestry of my life, aerospace has been a continuous thread, woven since childhood. Drones and UAVs were my youthful muses. Amid the intricate fabric of my engineering life, destiny led me to contribute to Uber Elevate's Air Taxi concept—a juncture that propelled me into a love affair with the skies, echoing the mythical journey of Khageshvara.</div>
                  <div>My key roles are majorly designing and analyzing components of our EVTOL , along with parts procurement for the same. </div>
                </div>
              </div>
          </div>
          <div className={style.member}>
              <div className={style.member_image}>
                <img src={Shayandeep}/>
              </div>
              <div className={style.member_info}>
                <div className={style.member_name}>
                  Shayandeep Das
                </div>
                <div className={style.member_position}>Co-Founder </div>
                <div className={style.about_member}>
                  <div>Shayandeep Das is one of K.A.T's co-founders. He is currently a Master's in Health Economics and Statistics at Oxford University and a Data Analyst. He was formerly a Board Member of a nonprofit. He is passionate about machine learning and the electrification of drones. Let's together Reach the Unreachable.</div>
                  <div>Responsible for the Business Development and Strategy of the K.A.T </div>
                </div>
              </div>
          </div>
        </div>
        <div className={style.heading1}>
            Meet <span>Our</span> Team
        </div>
        <div className={style.redirect_links}>
            <a className={style.link} href="/about/business">Business Strategic Team</a>
            <a className={style.link} href="/about/tech"> Tech Team</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default AboutUs