import React from 'react'
import comingSoon from '../../assets/comingsoon.svg'
import style from '../Career/Career.module.css'

const Career = () =>  {
  return (
    <>
    <div className={style.contentwrapper}>
      <div className={style.section}>
        <div className={style.image}></div>
        <div className={style.text}>
          Coming <span>Soon...</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Career