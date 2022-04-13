import React from 'react'
import { BgBlue, BgOrang } from '../global'
import styles from "./one.module.css"

function SectionOne() {
  return (
    <div className={styles.SeOne}>
        <div className={styles.Right}>  
          <SecRightOne />
          <SecRightTwo />
        </div>
        
        {/* image of GIFS */}
        <div className={styles.Left}> left</div>
      <BgGradiant/>
    </div>
  )
}

export default SectionOne


// Section Right One
export function SecRightOne() {
   return(<div className={styles.RightOne}>
     <span>Welcome!</span>
     <h1>node</h1>
     <h3>trees nfts</h3>
     <p>We're Node Trees a NFT based Defi project. We believe that passive income shouldn't be difficult. It should be as easy as picking fruits from a tree. To learn more about this, check out the details of our tutorial. If you like what you see, consider donating. You can also follow us on Twitter and Facebook. Feel free to send us an email.</p>
    <li>Components from mint tree</li>
   </div>)
}
// Section Right Two
export function SecRightTwo() {
  return(<div className={styles.SecRight}>

  </div>)
}

// Background Gradients
export function BgGradiant(){
  return(<div className={styles.BgGradiant}>
      <div className={styles.BgBluex}><BgBlue/></div>
      <div className={styles.BgOrangx}><BgOrang/></div>
    </div>
  )
}

// Seprate compon