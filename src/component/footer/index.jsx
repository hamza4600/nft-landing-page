import React from "react";
import "./footer.css";
import { BsTwitter, BsFacebook } from "react-icons/bs";

const MintFooter = () => {
  return (
    <>
      <div className="icons-container">
        <h3 className="icons-container-firstText">
          2022 NODE TREE NFT-POWERED BY BLOCTAK
        </h3>
          <Icons className="footerIcons" />
      </div>
    </>
  );
};

export default MintFooter;

// Const Icons
export  const Icons = () => {
    return(
         <div className="iconsContainer">
        <h4 className="iconsContainerText">Follow Us</h4>
        <span className="twitter-icon iconsBox">
          <BsTwitter />
        </span>
        <span className="iconsBox">
          <BsFacebook />
        </span>
      </div>
    )
}