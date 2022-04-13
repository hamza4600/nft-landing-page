import React from 'react'
import styles from "./two.module.css"

function SecTwo() {
  return (
    <div className={styles.Stwo}>
        {/* Scroll */}
        <div className={styles.Scroll}>
        <h1>Scroll</h1>        
        </div>
        {/* Bottom */}
        <div className={styles.Sthree}>
            {/* left */}
             <ExtTwo/>
            {/* {right} */}
            <ExtTwoLeft/>             
        </div>
    </div>
  )
}

export default SecTwo

// extion two right side
export function ExtTwo() {
    return(<div className={styles.Extwo}>
        <h1>Right</h1>
    </div>)
}

// extion two Left side
export function ExtTwoLeft() {
    return(<div className={styles.ExIma}>
        <h1>Image</h1>
    </div>)
}