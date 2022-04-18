import React from 'react'
import { BgBlue, BgOrang, FaqQuesx, HeaderSe, Peppo } from '../global'
import styles from "./thre.module.css"
import VectorTree from './VectorTree'
import ScrolLe from '../global/scroll'


function SecThree() {
     
  return (
    <div className={styles.Tone}>
        <HeaderSe text="Road Map"/>
         <div className={styles.Tonesvg}><VectorTree /></div> 
      {/* five section of text */}
      {/* Another div that hold the top margin */}
      <div className={styles.Fives}> 

      <div className={styles.TopMargin}>
        <Scroll/>
      
      <TreeSections date={`April 9 th`} head={`Product Launch`} text={` Our website, socials and mint page will be up at this point so the community can interact with us and see what we're about.Inital minting of 200 NFTs for giveaways, and rewards!`} />
      
      <TreeSectionsTwo date={`April 23 rd`} head={`Owner Vote`} text={`Here we will work out the details on how many validators our community will be setting up as well as how often our owners would like to see a payout.We will have validators on at least 1 network by end of day April 23rd.`} />

      <TreeSections date={`April 30 th`} head={`First payout`} text={`One option for our first payout, based on if our owners want to go with weekly payouts, biweekly payouts, or monthly payputs.`} />

      <TreeSectionsTwo date={`June 1 st`} head={`First Owner Evaluation`} text={`After a little over a month of our validator nodes being online we will be hosting a live chat with owners in our discord to discuss the direction we want to head in. More Validators, more payouts, and an oppurtunity for owners to discuss with us about other projects on chain they would like to see us get involved in. Owner Evalutions will take place every three months after our first one on June 1st.`} />
      
      <TreeSections date={`April 30 2023`} head={`Yield Change`} text={`After 1 full year of our project being launched we will host a live chat with Owners about adjusting yield payouts.(The intial yield payout percentage is 50% with 45% being restaked with our validator nodes. The finial 5% will be seperated into 4 sections:1.5% for Maintaining the project,1% in reserve for any costs we may face as Node Trees while defending our project, 0.5% for our marketing team and 0.5% for our Founder, 1.5% for offchain projects at the descreation of the Owners.)`}  />
      </div>
      </div>
    </div>
  )
}

export default SecThree

// Tree sections One
export function TreeSectionsTwo({date, head, text}) {
  return(<div className={styles.SeTreeTwo}>
        <Para head={head} text={text}/>
        <div className={styles.PoloTwo}><FaqQuesx text={date}/></div>        
  </div>)
  }

// Tree sections One
export function TreeSections({date,head,text}) {
  return(<div className={styles.April}>
        <div className={styles.Polo}><FaqQuesx text={date}/></div>        
        <Para head={head} text={text}/>
      {/* Bg colors */}
        <div className={styles.BgCo}>
          <div className={styles.BLeft}><BgBlue/></div>
          <div className={styles.Boran}><BgOrang/> </div> 
        </div>
  </div>)
}


// Para
export function Para({head,text}) {
  return(<div className={styles.Para}>
    <FaqQuesx text={head}/>
    <Peppo text={text}/>
  </div>)
}

// scrool animation
export function Scroll() {
  return(<div  className={styles. Reef}  >
    <ScrolLe/>
  </div>)
}
 