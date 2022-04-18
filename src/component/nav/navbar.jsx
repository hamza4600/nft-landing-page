import React from 'react'
import styles from "./nav.module.css"

// import "../../fonts/peepo/Peepo.ttf"
import { FiXCircle } from "react-icons/fi";


function Navbar() {
  const [open , setOpen] = React.useState(false)
  return (
    // onClick={Open}  className={styles.Nthree} style={{top: open ? "0px" : "-503px"}}
    <div className={styles.None}>
      <div className={open ? styles.Ntwo : styles.Nclo } onClick={()=>setOpen(!open)}>
        <div className={styles.Cloo}> <FiXCircle/></div>
        <div><Navitem miss={`Mission Statement`}/></div>
        <div> <Navitem miss={`Road Map`}/></div>
        <div className={styles.Maii}><NavIcons/></div>
        <div><Navitem miss={`Payout Schedule`}/></div>
        <div><Navitem miss={`FAQs`}/></div>
        {/* </div> */}
      </div>
      {/* for mobile` */}
      
      <div className={styles.Mobi} >
        <img src={require("../../photos/tre.png")}/>
        <div onClick={()=>setOpen(!open)}> 
        { open ? <FiXCircle/> :
        <img src={require("../../photos/Menu.png")}/>
        }</div>

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