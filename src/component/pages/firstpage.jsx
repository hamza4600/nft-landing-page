// first page\
import React from 'react'
import Navbar from '../nav/navbar'
import SectionOne from '../secOne'
import styles from "./first.module.css"

function First() {
  return (
    <div> 
    <Navbar/>
    <div className={styles.Mone}> 
      <SectionOne/>
      <h1>Node Tree</h1>

    </div>
    </div>
  )
}

export default First