import React from 'react'
import {Link, Routes,Route , BrowserRouter} from 'react-router-dom';
import topimage from '../../assets/background_About_page.jpg';
import Anh_Nguyen from '../../assets/member_images/Anh Nguyen.png';
import Deepanshu from '../../assets/member_images/Deepanshu Jain.jpg';
import Vani from '../../assets/member_images/Vani-Sadadiwala.jpeg';
import Madhav from '../../assets/member_images/Madhav Menon.png'
import style from '../BusinesTeam/BusinessTeam.module.css'

const TechTeam =() => {
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
          <p>Established in 2023, Khageshvara Aviation Technology Private Limited is at the forefront of innovation in aerial mobility. Our focus lies in developing cutting-edge Electric Vertical Take-Off and Landing (E-VTOL) solutions. Committed to revolutionizing air travel, we combine state-of-the-art technology with a passion for sustainability. At Khageshvara Aviation, we aspire to redefine the future of transportation, creating a world where efficient and eco-friendly aerial mobility is accessible to all.</p>
        </div>
      </div>
      <div className={style.members}>
        <div className={style.co}>
          Tech <span> Team </span>
        </div>
        <div className={style.team_members}>
            <div className={style.member}>
                <div className={style.member_image}>
                    <img src={Anh_Nguyen}/>
                </div>
                <div className={style.member_info}>
                    <div className={style.member_name}>
                    Anh Nguyen
                    </div>
                    <div className={style.member_position}> Data & Analytics Lead  </div>
                    <div className={style.about_member}>
                    <p>With a foundation in public services and advanced skills with analytics, I aspire to harness data to refine operations and strategy at K.A.T. My focus lies in utilizing analytical tools and models to thoughtfully engage with challenges, ensuring our business navigates the present and future with precision and foresight.</p>
                    <p>
                        <li>Analytics</li>
                        <li>Economic & Operations Modelling</li>
                        <li>Business Development</li>
                        <li>Optimization</li>
                    </p>
                    </div>
                </div>
            </div>
            <div className={style.member}>
                    <div className={style.member_image}>
                    <img src={Deepanshu}/>
                    </div>
                    <div className={style.member_info}>
                    <div className={style.member_name}>
                        Deepanshu Jain
                    </div>
                    <div className={style.member_position}> Electronics Circuital Design Lead </div>
                    <div className={style.about_member}>
                        <p>
                        <li>BLDC Motors</li>
                        <li>Thermionic Circuital Design </li>
                        <li>Research</li>
                        </p>
                    </div>
                    </div>
            </div>
            <div className={style.member}>
                <div className={style.member_image}>
                    <img src={Madhav}/>
                </div>
                <div className={style.member_info}>
                    <div className={style.member_name}>
                    Madhav Menon
                    </div>
                    <div className={style.member_position}> Propulsion Systems </div>
                    <div className={style.about_member}>
                    <p>Provide Thrust and Control the EVTOL requires for the various mission phases.Design, develop and test various electro-mechanical systems needed for the propulsion system</p>
                    </div>
                </div>
            </div>
            <div className={style.member}>
                <div className={style.member_image}>
                    <img src={Vani}/>
                </div>
                <div className={style.member_info}>
                    <div className={style.member_name}>
                    Vani Sadadiwala
                    </div>
                    <div className={style.member_position}> Avionics engineer </div>
                    <div className={style.about_member}>
                    <p>
                        <li>Structures</li>
                        <li>Analysis</li>
                        <li>Research</li>
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.heading1}>
           Meet <span>Our</span> Team
        </div>
        <div className={style.redirect_links}>
            <Link className={style.link} to="/about">Co-Founders</Link>
            <Link className={style.link} to="/about/business"> Business Strategic Team</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default TechTeam