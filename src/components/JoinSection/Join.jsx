import React from 'react'
import style from "../JoinSection/Join.module.css"


const Join = () => {
  return (
    <>
    <div className={style.contentwrapper}>
        <div className={style.Head}>
            <div className={style.head1}>
                LET'S <span>TOGETHER</span> "REACH THE
            </div>
            <div className={style.head2}>UNREACHBALE"</div>
        </div>
        <div className={style.joinbutton}>
            <button className={style.button}>
                JOIN OUR REVOULTION
            </button>
        </div>
    </div>
    </>
  )
}

export default Join
