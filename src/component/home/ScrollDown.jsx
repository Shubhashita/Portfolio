import React from 'react';
import { scrollToTarget } from '../../hooks/useLenis';

const ScrollDown = () => {
    return (
        <div className="home_scroll">
            <a
                href="#about"
                className="home_scroll-button button--flex"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToTarget('#about');
                }}
            >
                <span className="home_scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home_scroll-arrow"></i>
            </a>
        </div>
    );
};

export default ScrollDown;
