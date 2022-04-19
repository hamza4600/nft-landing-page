// first page\
import React from 'react'
import MintFooter from '../footer'
import Navbar from '../nav/navbar'
import SecFour from '../secFour'
import SectionOne from '../secOne'
import SecThree from '../secThree'
import SecTwo from '../secTwo'
import styles from "./first.module.css"

function First() {
  return (
    <div> 
    <Navbar/>

      <SectionOne/>
      <SecTwo/>
      <SecThree/>
      <SecFour/>
      <MintFooter/>
    </div>
  )
}

export default First