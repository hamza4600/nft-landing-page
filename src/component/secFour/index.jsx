import React, { useEffect, useRef, useState } from 'react'
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
        <img className={styles.FaRimg} src={require("../../photos/NFT.gif")} alt=""/>
        <img className={styles.Circ} src={require("../../photos/Circle.png")} alt=""/>
    </div>)
}

// Left
export function BigfaLeft() {
    return(<div className={styles.FaLeft}>
        <FaqQues text={`Who is Node Trees? `} answer={`Node Trees is a passive income NFT project, you buy a NFT and every Week/Month we reward your account with the NFT a small amount of Eth.`}/>

        <FaqQues text={`How does Node Trees make me passive income?`} answer={`  Node Trees takes the funds raised by the sale of NFTs and Creates/Stakes them in Validator Nodes to provide you a return above 15% a year.`}/>

        <FaqQues text={`What is a Validator Node?`} answer={`    A validator node is a Node on a Chain that Validates if a transaction is accurate. There are many Validator Nodes that are cross checked to come to a census on what transactions are accurate.`}/>

        <FaqQues text={`How does Node Trees provide a return above 15%?`} answer={`At node trees we only set up validators on Chains that have a reward rate above 15%. A good place to check the current award rates is stakingrewards.com. We typically will choose Chains with a proven track record of payouts.`}/>

        <FaqQues text={`Why buy a “Node Tree”?`} answer={`Although you could stake your crypto on your own, when we pool our funds to stake or set up a validator we have a bigger say in the validator and typically a larger reward yield.`}/>

        <FaqQues text={`How long does Node Trees plan on running their Validators?`} answer={`Node Trees plans on running validators for the next 5 years, at that point we would ask You the owners of our NFTs if we should keep running validators or close up shop.`}/>
    </div>)
}

// questions
export function FaqQues({text,answer}) {
    const [active , setActive] = useState(false);
    const contentRef = useRef(null);

    useEffect(() =>{

        contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);
        
    function Hidde(){
        // hidde text on click
            setActive(!active);
    }
    return(<div className={styles.FaqQ}>
            <div onClick={Hidde} className={styles.FTwo}>
                <FaqQuesx text={text}/>
                <img  src={require("../../photos/plus.png")} alt="icon"/>
            </div>
            <div ref={contentRef} className={active ? styles.FaqA : styles.FaqA2}>
                <p>{answer}</p>
            </div>


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