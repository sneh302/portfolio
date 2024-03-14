import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img
                    className="bg-img"
                    src="https://www.fgdc.gov/img/slider/slider-bg-network.jpg/image"
                    alt=""
                />
            </div>
            <div className="content">
                <p>HI, I'M SNEH KOSHIYA.</p>
                <h1>Software Developer</h1>
                <div>
                    <Link to="/project" className="btn">
                        Project
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/1v3qM7Ljdds1OP5aACJEiJxvyNXzmwQ06/view?usp=sharing"
                        className="btn btn-light"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
