import React, { useState, useEffect } from "react";
import "./header.css";

const navLinks = [
    { href: "#home", label: "Home", icon: "uil-estate" },
    { href: "#about", label: "About", icon: "uil-user" },
    { href: "#skills", label: "Skills", icon: "uil-file-alt" },
    { href: "#degree", label: "Academics", icon: "uil-graduation-cap" },
    { href: "#certifications", label: "Certifications", icon: "uil-award" },
    { href: "#projects", label: "Projects", icon: "uil-briefcase" },
    { href: "#contact", label: "Contact", icon: "uil-message" },
];

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // ── Scroll Spy via IntersectionObserver ──────────────────────────
    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                {
                    // trigger when section is at least 30% visible; offset for fixed navbar
                    rootMargin: "-10% 0px -60% 0px",
                    threshold: 0,
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                {/* Brand logo */}
                <a href="#home" className="nav_logo">
                    <img src="/logo_ss.png" alt="Shubhashita Singh" className="nav_logo-img" />
                </a>

                {/* Nav menu */}
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list">
                        {navLinks.map(({ href, label, icon }) => {
                            const id = href.replace("#", "");
                            const isActive = activeSection === id;
                            return (
                                <li className="nav_item" key={id}>
                                    <a
                                        href={href}
                                        className={`nav_link${isActive ? " active-link" : ""}`}
                                        onClick={() => showMenu(false)}
                                    >
                                        <i className={`uil ${icon} nav__icon`}></i>
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                </div>

                {/* Hamburger toggle */}
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
