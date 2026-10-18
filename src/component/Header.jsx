import React, { useState, useEffect } from 'react';
import './header.css';
import { scrollToTarget } from '../hooks/useLenis';

const navLinks = [
    { href: '#home', label: 'Home', icon: 'uil-estate' },
    { href: '#about', label: 'About', icon: 'uil-user' },
    { href: '#skills', label: 'Skills', icon: 'uil-file-alt' },
    { href: '#experience', label: 'Experience', icon: 'uil-briefcase-alt' },
    { href: '#degree', label: 'Academics', icon: 'uil-graduation-cap' },
    { href: '#projects', label: 'Projects', icon: 'uil-briefcase' },
    { href: '#certifications', label: 'Certifications', icon: 'uil-award' },
    { href: '#contact', label: 'Contact', icon: 'uil-message' },
];

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('selected-theme') || 'dark';
    });

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
        localStorage.setItem('selected-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace('#', ''));
        const observers = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveSection(id);
                },
                {
                    rootMargin: '-10% 0px -60% 0px',
                    threshold: 0,
                }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        showMenu(false);
        scrollToTarget(href);
    };

    return (
        <header className={`header${scrolled ? ' scroll-header' : ''}`}>
            <nav className="nav container">
                <a
                    href="#home"
                    className="nav_logo"
                    onClick={(e) => handleNavClick(e, '#home')}
                >
                    Portfolio.
                </a>

                <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
                    <ul className="nav_list">
                        {navLinks.map(({ href, label, icon }) => {
                            const id = href.replace('#', '');
                            const isActive = activeSection === id;
                            return (
                                <li className="nav_item" key={id}>
                                    <a
                                        href={href}
                                        className={`nav_link${isActive ? ' active-link' : ''}`}
                                        onClick={(e) => handleNavClick(e, href)}
                                    >
                                        <i className={`uil ${icon} nav__icon`}></i>
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <i
                        className="uil uil-times nav__close"
                        onClick={() => showMenu(false)}
                    ></i>
                </div>

                <div className="nav__buttons">
                    {/* Theme Toggle Button */}
                    <button
                        type="button"
                        className="change-theme"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        <i className={`uil ${theme === 'dark' ? 'uil-sun' : 'uil-moon'} change-theme-icon`}></i>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
