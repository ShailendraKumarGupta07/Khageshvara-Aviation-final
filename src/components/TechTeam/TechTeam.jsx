import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import topimage from '../../assets/background_About_page.jpg';
import Anh_Nguyen from '../../assets/member_images/Anh Nguyen.png';
import Madhav from '../../assets/member_images/Madhav Menon.png';
import style from '../BusinesTeam/BusinessTeam.module.css';

const TechTeam = () => {
  const membersRef = useRef(null);

  useEffect(() => {
    // Scrolls to the members section on load
    if (membersRef.current) {
      membersRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

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
        <div className={style.members} ref={membersRef}>
          <div className={style.co}>
            Tech <span> Team </span>
          </div>
          <div className={style.team_members}>
            <div className={style.member}>
              <div className={style.member_image}>
                <img src={Anh_Nguyen} alt="Anh Nguyen"/>
              </div>
              <div className={style.member_info}>
                <div className={style.about_member}>
                  <p>With a foundation in public services and advanced skills with analytics, I aspire to harness data to refine operations and strategy at K.A.T. My focus lies in utilizing analytical tools and models to thoughtfully engage with challenges, ensuring our business navigates the present and future with precision and foresight.</p>
                  <ul>
                    <li>Analytics</li>
                    <li>Economic & Operations Modelling</li>
                    <li>Business Development</li>
                    <li>Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.member}>
              <div className={style.member_image}>
                <img src={Madhav} alt="Madhav Menon"/>
              </div>
              <div className={style.member_info}>
                <div className={style.about_member}>
                  <p>As the Propulsion Team Lead, I am responsible for providing the necessary thrust and control for the EVTOL across all mission phases. I lead the design, development, and testing of various electro-mechanical systems essential to the propulsion system, ensuring reliable performance and mission success. This involves overseeing the creation and integration of advanced propulsion technologies to achieve precise control and efficiency throughout each stage of flight.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.heading1}>
            Meet <span>Our</span> Team
          </div>
          <div className={style.redirect_links}>
            <Link className={style.link} to="/about">Co-Founders</Link>
            <Link className={style.link} to="/about/business">Business Strategic Team</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechTeam;