import React from 'react'
import { BgBlue, BgOrang, GreenBtn, HeaderSe, Peppo } from '../global'
import styles from "./two.module.css"

function SecTwo() {
  return (
    <div className={styles.Stwo}>
        {/* Scroll */}
            <Scrolindi/>
        {/* Bottom */}
        <div className={styles.Sthree}>
            {/* left */}
             <ExtTwo/>
            {/* {right} */}
            <ExtTwoLeft/>             
        </div>
            <Bgclor/>
    </div>
  )
}

export default SecTwo


export function Scrolindi() {
    return(<div  className={styles.Scroll}>
        <img src={require("../../photos/Scroll.png")}/>
            <HeaderSe text={`What we Do`}/> 
    </div>)
}


// extion two right side
export function ExtTwo() {
    return(<div id='two' className={styles.Extwo}>
        <div> 
        <Peppo text={`
            We are building a defi project utilizing validator nodes on multiple chains. We plan on creating Validator nodes on chains with a yield of 15% or more. Some examples of Nodes with 15% yields are PanCakeSwap, Osmosis, and ChainX. We want to have our owners input as well. Once a month we will have a vote on what validators to keep and which ones we want to drop/add.`}/>
        </div>
        <div className={styles.Butn}><GreenBtn text={`Email Us Now`}/></div>

    </div>)
}

// extion two Left side
export function ExtTwoLeft() {
    return(<div className={styles.ExIma}>
        <img className={styles.Exnf} src={require("../../photos/NFT.gif")}/>
        <img className={styles.Exci} src={require("../../photos/Circle.png")}/>
    </div>)
}

// gradients
export function Bgclor() {
    return(<div className={styles.BgC}>
        <div className={styles.GRight}><BgOrang/></div>  
        <div className={styles.GLeft}><BgBlue/></div>
</div>)
}