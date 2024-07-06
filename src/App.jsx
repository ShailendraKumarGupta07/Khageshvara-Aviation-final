import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import VisionSection from "./components/VisionSection/VisionSection";
import Analytics from "./components/AnalyticsSection/Analytics";
import Revolution from "./components/RevolutionSection/Revolution";
import Future from "./components/FutureSection/Future";
import Join from "./components/JoinSection/Join";
import Support from "./components/SupportedBySection/Support";
import Footer from "./components/FooterSection/Footer";
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import AboutUs from "./components/AboutUsPage/AboutUs";
import BusinessTeam from "./components/BusinesTeam/BusinessTeam";
import TechTeam from "./components/TechTeam/TechTeam";
import "./App.css";
import Technology from "./components/TechnologyPage/Technology";
import Career from "./components/Career/Career";

function App() {
  const sectionRefs = {
    navbar: useRef(null),
    hero: useRef(null),
    vision: useRef(null),
    analytics: useRef(null),
    revolution: useRef(null),
    future: useRef(null),
    join: useRef(null),
    support: useRef(null)
  };

  const sectionIds = Object.keys(sectionRefs);

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    sectionIds.forEach(id => {
      if(sectionRefs[id]?.current){
        sectionRefs[id].current.style.display = "block";
      }
    });
  }, []);
  var nextIndex =(currentSectionIndex + 1) % sectionIds.length;
  const scrollToNextSection = (event) => {
    const nextSectionId = sectionIds[nextIndex];
    event.preventDefault();
    const nextSectionRef = sectionRefs[nextSectionId];
    if (nextSectionRef && nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
      if(nextIndex==6){
        setCurrentSectionIndex(-1);
      }else{
        setCurrentSectionIndex(nextIndex);

      }
    }
  };

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <div className="container my-5">
        <Routes>
          <Route exact path= "/" element={
            <div className="container my-5">
              <div ref={sectionRefs.navbar} style={{ display: "none" }}>
                <Hero />
              </div>
              <div ref={sectionRefs.hero} style={{ display: "none" }}>
                <VisionSection />
              </div>
              <div ref={sectionRefs.vision} style={{ display: "none" }}>
                <Analytics />
              </div>
              <div ref={sectionRefs.analytics} style={{ display: "none" }}>
                <Revolution />
              </div>
              <div ref={sectionRefs.revolution} style={{ display: "none" }}>
                <Future />
              </div>
              <div ref={sectionRefs.future} style={{ display: "none" }}>
                <Join />
              </div>
              <div ref={sectionRefs.join} style={{ display: "none" }}>
                <Support />
              </div>
              <div className="scroll_button" role="button" onClick={(event) => scrollToNextSection(event)} tabIndex="0"
              style={{transform : (nextIndex==0) ? 'rotate(180deg)':'rotate(0deg)'}}>
                <div className="wrapper">
                  <a className="cta" href="#">
                    <span>
                      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
                          <path
                            className="one"
                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="rgb(252, 185, 0)"></path>
                          <path
                            className="two"
                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="rgb(252, 185, 0)"></path>
                          <path
                            className="three"
                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="rgb(252, 185, 0)" ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          }></Route>
        </Routes>
        <Routes>
          <Route exact path="/about" element={ <div className="container my-5">
                                          <AboutUs/>
                                          </div>} />
          <Route exact path="/technology" element={<Technology/>} />
          <Route exact path="/about/business" element={<BusinessTeam/>}></Route>
          <Route exact path="/about/tech" element={<TechTeam/>}></Route>
        </Routes>
      </div>
      <div ref={sectionRefs.support} style={{ display: "none" }}>
        <Footer />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
