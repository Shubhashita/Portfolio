import React, { useEffect, useRef, useState } from 'react';
import './cursor.css';

const Cursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const outline = useRef({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(pointer: fine)');
        const update = () => setEnabled(mq.matches && window.innerWidth > 992);
        update();
        mq.addEventListener('change', update);
        window.addEventListener('resize', update);
        return () => {
            mq.removeEventListener('change', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    useEffect(() => {
        if (!enabled) return undefined;

        const moveCursor = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }
        };

        const onOver = (e) => {
            if (e.target.closest('a, button, .skills__item, .projects__btn, .projects__card, .about__box, .certifications__item, .button')) {
                setHovered(true);
            }
        };
        const onOut = (e) => {
            if (e.target.closest('a, button, .skills__item, .projects__btn, .projects__card, .about__box, .certifications__item, .button')) {
                setHovered(false);
            }
        };

        let frame;
        const animate = () => {
            outline.current.x += (mouse.current.x - outline.current.x) * 0.18;
            outline.current.y += (mouse.current.y - outline.current.y) * 0.18;
            if (outlineRef.current) {
                outlineRef.current.style.transform = `translate3d(${outline.current.x}px, ${outline.current.y}px, 0) translate(-50%, -50%)`;
            }
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            <div
                ref={dotRef}
                className={`custom-cursor ${hovered ? 'hovered' : ''}`}
            />
            <div
                ref={outlineRef}
                className={`custom-cursor-outline ${hovered ? 'hovered' : ''}`}
            />
        </>
    );
};

export default Cursor;
