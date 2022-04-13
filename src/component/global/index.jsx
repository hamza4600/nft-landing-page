import React from 'react'
import styles from "./glob.module.css"

function Gone() {
  return (
    <div>Gone</div>
  )
}

export default Gone

// Gradient color
// Blue color
export  function BgBlue() {
    return(<div className={styles.Blue} ></div>)
}

// Blue color
export  function BgOrang() {
    return(<div className={styles.Orange} ></div>)
}