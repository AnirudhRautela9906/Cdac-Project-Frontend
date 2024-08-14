import React from "react";
import "./Style.scss";
import LinkedIn from "../../Home_images/bxl--linkedin-square.svg";
import Instagram from "../../Home_images/mdi--instagram.svg";
import Copyright from "../../Home_images/mdi--copyright.svg";


const Footer = () => {
  return (
    <>
      <div id="footer">
        <p>A freelancing website, made with ❤️ for ALL !!!</p>
        <div id="social">
          <p id="follow">Follow Us</p>
          <div>
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={Instagram} alt="Instagram" />
          </div>
          
        </div>
        <hr />
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
