import React from "react";
import "./Footer.css";
import {
    FaGithub,
    FaHome,
    FaInstagram,
    FaLinkedin,
    FaMailBulk,
    FaPhone,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={25} style={{ marginRight: "2rem" }} />
                        <div>
                            <p>197- VALAMNAGAR SOC.,</p>
                            <p>SURAT</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ marginRight: "2rem" }} />
                        <h4>9016167621</h4>
                    </div>
                    <div className="email">
                        <FaMailBulk size={22} style={{ marginRight: "2rem" }} />
                        <h4>snehkoshiya06@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>
                        My name is Sneh Koshiya and I completed B-Tech Computer
                        Engineering in Institute of Advanced Research.
                    </p>
                    <div className="social">
                        <a
                            href="https://www.linkedin.com/in/sneh-koshiya-800519249/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                size={30}
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                        <a
                            href="https://github.com/sneh302"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub
                                size={30}
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/sneh_koshiya/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                size={30}
                                style={{ marginRight: "1rem" }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
