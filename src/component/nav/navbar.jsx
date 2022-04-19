import React from 'react'
import styles from "./nav.module.css"
import { HiOutlineX } from "react-icons/hi";

import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [open , setOpen] = React.useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className={styles.None}>
      <div className={open ? styles.Ntwo : styles.Nclo } onClick={handleClick} >
        <div className={styles.Cloo}> <HiOutlineX/></div>
        <div><Navitem miss={`Mission Statement`} place={`two`} click={handleClick}/></div>
        <div> <Navitem miss={`Road Map`} place={`three`} click={handleClick}/></div>
        <div className={styles.Maii}><NavIcons/></div>
        <div><Navitem miss={`Payout Schedule`} place={`four`} click={handleClick}/></div>
        <div><Navitem miss={`FAQs`} place={`four`} click={handleClick}/></div>
        {/* </div> */}
      </div>
      {/* for mobile` */}
      
      <div className={styles.Mobi} >
        <img src={require("../../photos/tre.png")}/>
        <div onClick={()=>setOpen(!open)}> 
        { open ? <HiOutlineX/> :
        <img src={require("../../photos/Menu.png")}/>
        }</div>

      </div>
    </div>
  )
}

export default Navbar

// navItems
export function Navitem({miss,place,click}){
  return(<div className={styles.Ntem}>
    <Link to={place}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <p onClick={click}>{miss}</p></Link>
  </div>)
}

// Icons and text
export function NavIcons() {
  return(<div className={styles.Icon }>
    <img src={require("../../photos/jaja.png")} alt="logo" />
  </div>
    )
}