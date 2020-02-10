import React from 'react'
import './footer.styles.scss'
import { IconContext } from "react-icons";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <IconContext.Provider value={{ color: "#e2e0d3", size: "2.5em", className: "globalFooter" }}>
                    <div className="insta">  <FaInstagram /> </div>
                    <div className="facebook"> <FaFacebook /> </div>
                    <div className="twitter">  <FaTwitter /></div>
                </IconContext.Provider>
            </div>
            <div className="footerText">Made with love by Dan</div>
        </div>
    )
}

export default Footer;