import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");

    const navToggle = () => {
        setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
        setIcon(icon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
    };

    return (
        <nav className="nav">
            <Link to="/" className="nav__brand">
                herdoy
            </Link>
            <ul className={active}>
                <li className="nav__item">
                    <Link to="/" className="nav__link">
                        Home
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/about" className="nav__link">
                        About
                    </Link>
                </li>
                <li className="nav__item">
                    <Link to="/login" className="nav__link">
                        Log in
                    </Link>
                </li>

                <li className="nav__item">
                    <Link to="/admin" className="nav__link">
                        Admin
                    </Link>
                </li>


                <li className="nav__item">
                    <Link to="/student" className="nav__link">
                        Student
                    </Link>
                </li>

            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
