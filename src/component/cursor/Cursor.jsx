import React, { useEffect, useState } from 'react';
import './cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleHover = () => setHovered(true);
        const handleUnhover = () => setHovered(false);

        window.addEventListener('mousemove', moveCursor);

        const interactiveElements = document.querySelectorAll('a, button, .skills__item, .projects__content, .certifications__content');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor ${hovered ? 'hovered' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                className={`custom-cursor-outline ${hovered ? 'hovered' : ''}`}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default Cursor;
