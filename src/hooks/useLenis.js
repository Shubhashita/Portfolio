import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

export const getLenis = () => lenisInstance;

export const scrollToTarget = (target, options = {}) => {
    if (!target) return;

    const el =
        typeof target === 'string'
            ? document.querySelector(target)
            : target;

    if (!el) return;

    if (lenisInstance) {
        lenisInstance.scrollTo(el, {
            offset: options.offset ?? -72,
            duration: options.duration ?? 1.35,
            ...options,
        });
        return;
    }

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const useLenis = () => {
    useEffect(() => {
        const prefersReduced = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches;

        if (prefersReduced) return undefined;

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.4,
        });

        lenisInstance = lenis;

        let frameId;
        const raf = (time) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        };
        frameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(frameId);
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);
};

export default useLenis;
