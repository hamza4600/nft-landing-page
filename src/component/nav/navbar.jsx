import React from 'react'
import styles from "./nav.module.css"

import "../../fonts/peepo/Peepo.ttf"

function Navbar() {
  return (
    <div className={styles.None}>
      <div className={styles.Ntwo}>
        <div><Navitem miss={`Mission Statement`}/></div>
        <div> <Navitem miss={`Road Map`}/></div>
        <div><NavIcons/></div>
        <div><Navitem miss={`Payout Schedule`}/></div>
        <div><Navitem miss={`FAQs`}/></div>
      </div>
    </div>
  )
}

export default Navbar

// navItems
export function Navitem({miss}){
  return(<div className={styles.Ntem}>
    <p>{miss}</p>
  </div>)
}

// Icons and text
export function NavIcons() {
  return(<div className={styles.Icon }>
    <img src={require("../../photos/jaja.png")} alt="logo" />
  </div>
    )
}