import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import topimage from '../../assets/background_About_page.jpg';
import style from '../BusinesTeam/BusinessTeam.module.css';

const MentorsPage = () => {
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
            <span>Advisors </span>
          </div>
          <div className={style.team_members}>
            <div className={style.member}>
              <div className={style.member_image}>
              </div>
              <div className={style.member_info}>
                <div className={style.about_member}>
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
            <Link className={style.link} to="/about/tech">Technical Team</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorsPage;