import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import topimage from '../../assets/background_About_page.jpg';
import VEDANSH_AGGARWAL from '../../assets/member_images/VEDANSH AGGARWAL.jpg';
import EliseReyes from '../../assets/member_images/Elise Reyes.jpeg';
import Piyaal from '../../assets/member_images/Piyal Chaudhary.jpg';
import Swasti from '../../assets/member_images/Swasti Dubey.jpeg';
import style from '../BusinesTeam/BusinessTeam.module.css';

const BusinessTeam = () => {
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
            Business <span>Strategic</span> Team
          </div>
          <div className={style.team_members}>
            <div className={style.member}>
              <div className={style.member_image}>
                <img src={VEDANSH_AGGARWAL} alt="Vedansh Aggarwal"/>
              </div>
              <div className={style.member_info}>
                <div className={style.member_name}>Vedansh Aggarwal</div>
                <div className={style.member_position}>Business Development Lead</div>
                <div className={style.about_member}>
                  <p>A diligent third-year Bachelor's student at BITS Pilani, serving as the Business Development Lead at Khageshvara Aviation Technology Private Limited. Demonstrating a strategic mindset, this individual plays a crucial role in propelling company growth and cultivating essential partnerships, showcasing exemplary leadership and business acumen.</p>
                  <ul>
                    <li>To get the startup funding</li>
                    <li>To ensure that the tech team is getting proper equipment</li>
                    <li>Develop the business and financial plan of the company</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={style.member}>
              <div className={style.member_image}>
                <img src={EliseReyes} alt="Elise Reyes"/>
              </div>
              <div className={style.member_info}>
                <div className={style.member_name}>Elise Reyes</div>
                <div className={style.member_position}>Social Impact + Sustainability Advisor</div>
                <div className={style.about_member}>
                  <p>Althea Reyes is the Social Impact + Sustainability Advisor at Khageshvara. In her day job, she is a Research Analyst at Corporate Knights, a Toronto-based sustainability-focused investor research firm. She possesses more than three years of experience in helping educators, government leaders, nonprofits, and companies realize their impact and sustainability strategies.</p>
                  <p>Advising business development on incorporating sustainability and the SDGs across component procurement, strategy, and product development.</p>
                </div>
              </div>
            </div>
            <div className={style.member}>
              <div className={style.member_image}>
                <img src={Swasti} alt="Swasti Dubey"/>
              </div>
              <div className={style.member_info}>
                <div className={style.member_name}>Swasti Dubey</div>
                <div className={style.member_position}>Marketing and Content Strategy Lead</div>
                <div className={style.about_member}>
                  <p>Develop marketing strategies and oversee content creation to drive brand growth and engagement.</p>
                </div>
              </div>
            </div>
            <div className={style.member}>
              <div className={style.member_image}>
                <img src={Piyaal} alt="Piyal Chaudhary"/>
              </div>
              <div className={style.member_info}>
                <div className={style.member_name}>Piyal Chaudhary</div>
                <div className={style.member_position}>Strategic Collaboration Lead</div>
                <div className={style.about_member}>
                  <p>Plan and strategize the collaborations of K.A.T.</p>
                  <ul>
                    <li>Understand and integrate all verticals.</li>
                    <li>Contact companies for procurement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={style.heading1}>
            Meet <span>Our</span> Team
          </div>
          <div className={style.redirect_links}>
            <Link className={style.link} to="/about">Co-Founders</Link>
            <Link className={style.link} to="/about/tech">Tech Team</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessTeam;