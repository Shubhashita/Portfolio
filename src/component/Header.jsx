import React, { useState } from "react";
import "./header.css";

const Header = () => {

    // window.addEventListener("scroll", function () {
    //     const header = document.querySelector(".header");
    //     if (this.scrollY >= 80) header.classList.add("scroll-header");
    //     else header.classList.remove("scroll-header");
    // })

    // State to manage the toggle for the menu
    const [Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Shubhashita</a>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="uil uil-estate nav__icon active-link"></i>Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>

                        <li>
                            <a href="#degree" className="nav_link">
                                <i className="uil uil-graduation-cap nav__icon"></i>Academics
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#projects" className="nav_link">
                                <i className="uil uil-briefcase nav__icon"></i>Projects
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
