import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [clickHamburger, setClickHamburger] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => setClickHamburger(!clickHamburger);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <div className="logo">
                <Link to="/">
                    <p>Portfolio</p>
                </Link>
            </div>

            <div className={clickHamburger ? "nav-menu active" : "nav-menu"}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {clickHamburger ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>
        </div>
    );
};

export default Navbar;
