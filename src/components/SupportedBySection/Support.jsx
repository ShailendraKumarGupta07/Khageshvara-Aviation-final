import React from 'react'
import style from "../SupportedBySection/Support.module.css"
import bits from "../../assets/supportedbysection/BITS.svg"
import PIEDS from "../../assets/supportedbysection/PIEDS.svg"
import Yspace from "../../assets/supportedbysection/Yspace.png"
import Oxford from "../../assets/supportedbysection/oxford.webp"
import ISB from "../../assets/supportedbysection/ISB.webp"
import DLABS from "../../assets/supportedbysection/dlabs.png"
import min from "../../assets/supportedbysection/min_st.svg"
import nidhiprayas from "../../assets/supportedbysection/nidhiprayas.webp"
import startupindia from "../../assets/supportedbysection/startupindia.webp"

const Support = () => {
  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.supportedby}>
            <div>Supported by</div>
            <div className={style.supportorg}>
                <div className="org">
                    <img src={bits} alt="" />
                </div>
                <div className="org">
                    <img src={PIEDS} alt="" />
                </div>
                <div className="org">
                    <img src={Yspace} alt="" />
                </div>
                <div className="org">
                    <img src={Oxford} alt="" />
                </div>
                <div className="org">
                    <img src={ISB} alt="" />
                </div>
                <div className="org">
                    <img src={DLABS} alt="" />
                </div>
            </div>
        </div>
        <div className={style.Grantsby}>
            <div>Grants given by</div>
            <div className={style.grantsorg}>
                <div className="Org">
                    <img src={min} alt="" />
                </div>
                <div className="Org">
                    <img src={nidhiprayas} alt="" />
                </div>
                <div className="Span">
                    <img src={startupindia} alt="" />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Support