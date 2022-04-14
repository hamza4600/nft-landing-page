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

// Header of scetion two AND section three
export function HeaderSe({text}) {
    return(<div className={styles.Htex}>
        <h2>{text}</h2>
    </div>)
}

// Peppo text
export function Peppo({text}) {
    return(<p className={styles.Peep}>{text}</p>)
}

// For Faq
export function FaqQuesx({text}) {
    return(<div className={styles.Ques}>{text}</div>)
}
    