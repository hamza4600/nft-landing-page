import React from 'react'
import { BgBlue, BgOrang, FaqQuesx, HeaderSe } from '../global'
import styles from './four.module.css'

function SecFour() {
  return (
    <div className={styles.Fone}> 
     {/* small div */}
        <SmFaq/>

         {/*Faq section  */}
        <HeaderSe text={`FAQ`}/>
    <div className={styles.Bigfa}>
        {/* right */}
        <BigfaRight/>
        {/* Left */}
        <BigfaLeft/>
        {/* Bg colors */}
        <BgLast/>
    </div>
  </div>)
}

export default SecFour

// SmFaq
export function SmFaq() {
    return(<div className={styles.SmF}>
        <HeaderSe text={`Payout Schedule`}/>
        <button>View PDF</button>

{/* Bg colors */}
        <div className={styles.SmallBG}>
            <div className={styles.SLeft}><BgBlue/></div>
            <div className={styles.SRight}><BgOrang/></div>
        </div>
    </div>)
}

// Right
export function BigfaRight() {
    return(<div className={styles.FaRight}>
        <img src={require("../../photos/NFT.gif")} alt=""/>
    </div>)
}

// Left
export function BigfaLeft() {
    return(<div className={styles.FaLeft}>
        <FaqQues text={`Who is Node Trees? `}/>
        <FaqQues text={`How does Node Trees make me passive income?`}/>
        <FaqQues text={`What is a Validator Node?`}/>
        <FaqQues text={`How does Node Trees provide a return above 15%?`}/>
        <FaqQues text={`Why buy a “Node Tree”?`}/>
        <FaqQues text={`How long does Node Trees plan on running their Validators?`}/>
    </div>)
}

// questions
export function FaqQues({text}) {
    return(<div className={styles.FaqQ}>
            <div className={styles.FTwo}>
                <FaqQuesx text={text}/>
                <img src={require("../../photos/plus.png")} alt="icon"/>
            </div>
            <p></p>

        </div>
    )
}

// Bg colors for last section
export function BgLast() {
    return(<div className={styles.BGH}>
        <div className={styles.Leed}><BgOrang/></div>
        <div className={styles.Rii}><BgBlue/></div>   
    </div>)
}