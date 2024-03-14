import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";

const AboutContent = () => {
    return (
        <div className="about-content">
            <div className="about-left">
                <h1>Who Am I?</h1>
                <p>
                    Im a React Front-End Developer. I completed my bachelor
                    degree in Computer Science. My goal is to open a startup on
                    any Product.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="about-right">
                <div className="image-container">
                    <div className="image-stack-top">
                        <img
                            src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/zRVheeFjiQQHGCo6ZbDgoZkq"
                            alt=""
                        />
                    </div>
                    <div className="image-stack-bottom">
                        <img
                            src="https://media.istockphoto.com/id/1203511380/photo/business-technology-internet-and-network-concept-technical-support-center-customer-service.jpg?s=612x612&w=0&k=20&c=oMQtl7I59PSa03u0Adsx37FuOODmtxzAFXuuTknZkCc="
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
