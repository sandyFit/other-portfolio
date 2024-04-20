import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextShimmerEffect = ({ text, style, triggerOnScroll = true }) => {
    const [elements, setElements] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        if (typeof text === 'string') {
            const chars = text.split('').map((char, index) => ({
                char,
                id: `char-${index}`,
                isSpace: char === ' '
            }));
            setElements(chars);
        } else {
            console.error('TextShimmerEffect expects a string as the text prop.');
            setElements([]);
        }
    }, [text]);

    useEffect(() => {
        if (!ref.current) return;

        const chars = ref.current.querySelectorAll(".char-scroll");
        if (chars.length > 0) {
            const timeline = gsap.timeline({
                onComplete: () => gsap.to(chars, { opacity: 0.5, duration: 1 })
            });

            timeline.fromTo(chars, { opacity: 1 }, { opacity: 1, stagger: 0.1, repeat: 0, yoyo: true });

            if (triggerOnScroll) {
                ScrollTrigger.create({
                    animation: timeline,
                    trigger: ref.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "restart none none reset",
                });
            }
        }
    }, [elements, triggerOnScroll]);

    return (
        <div ref={ref} className="title-neg" style={style}>
            {elements.map(({ char, id, isSpace }) => (
                <span key={id} className="char-neg" style={{ display: 'inline-block', opacity: 1 }}>
                    {isSpace ? '\u00A0' : char}
                </span>
            ))}
        </div>
    );
};

export default TextShimmerEffect;
