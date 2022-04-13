import React, { useEffect } from 'react'
import styles from "./thre.module.css"
// import VectorTree from './VectorTree'
import icon from "../../photos/Tree.svg"

function SecThree() {
     
  return (
    <div className={styles.Tone}>
        <h1>Section Three</h1>
        {/* <VectorTree/> */}
        <img className={styles.Vector} src={icon} alt="icon" />

    </div>
  )
}

export default SecThree