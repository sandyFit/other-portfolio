import React, { useEffect, useRef } from 'react';
import { BsInfinity } from "react-icons/bs";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Transition5 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const element = sectionRef.current;
        if (!element) return;

        // Ensure the container is fully loaded
        const slides = gsap.utils.toArray('.slide', element);
        if (slides.length < 1) return;

        // Clone and append for continuous effect
        element.firstChild.appendChild(slides[0].cloneNode(true));

        gsap.to('.slide-container', {
            xPercent: -40,
            ease: 'none',
            scrollTrigger: {
                trigger: element,
                pin: true,
                scrub: 1,
                end: () => `+=${element.offsetWidth}`
            }
        });
    }, []);

    return (
        <section ref={sectionRef} id="t5" className='flex justify-start w-full min-h-screen overflow-hidden
            relative bg-zinc-950'>
            <div className="slide-container flex justify-start pb-[30rem]">
                <div className="slide flex w-full bg-violet-500 py-6 justify-start">
                    <p className='big-title2 text-zinc-50 mr-6'>design + technology =</p>
                    <div className="flex text-[8rem] w-60 h-60 bg-zinc-50 rounded-[50px] justify-center items-center">
                        <BsInfinity />
                    </div>
                </div>
                {/* Clone of the first slide is appended in useEffect */}
            </div>
        </section>
    );
}

export default Transition5;
