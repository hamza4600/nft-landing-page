// first page\
import React from 'react'
import Navbar from '../nav/navbar'
import SectionOne from '../secOne'
import SecThree from '../secThree'
import SecTwo from '../secTwo'
import styles from "./first.module.css"

function First() {
  return (
    <div className={styles.Mone}> 
    <Navbar/>
    <div className={styles.Mone}> 
    
      <SectionOne/>
      <SecTwo/>
      <SecThree/>

    </div>
    </div>
  )
}

export default First