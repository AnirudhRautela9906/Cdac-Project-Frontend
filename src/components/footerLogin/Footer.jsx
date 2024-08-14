import React from "react";
import "./style.scss";
import LinkedIn from "../../Home_images/bxl--linkedin-square.svg";
import Instagram from "../../Home_images/mdi--instagram.svg";
import Copyright from "../../Home_images/mdi--copyright.svg";


const Footer = () => {
  return (
    <>
<div id="footer">
        <div id="sign">

          <img src={Copyright} alt="Copyright" />
          <p>2024 Seeker Pvt. Ltd</p>
          <ul>
            <li>
                <p>Privacy</p>
            </li>
          </ul>
        </div>
        </div>
    </>
  );
};

export default Footer;
