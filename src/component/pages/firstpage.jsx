// first page\
import React from 'react'
import Navbar from '../nav/navbar'
import SecFour from '../secFour'
import SectionOne from '../secOne'
import SecThree from '../secThree'
import SecTwo from '../secTwo'
import styles from "./first.module.css"

function First() {
  return (
    <div className={styles.Mone}> 
    <Navbar/>
    <div> 
    
      <SectionOne/>
      <SecTwo/>
      <SecThree/>
      <SecFour/>

    </div>
    </div>
  )
}

export default First