import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import '../../assets/css/borders.css';
import HeroBtn from '../../components/buttons/HeroBtn';
import ScrollBtn from '../../components/buttons/ScrollBtn';

const Hero = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initial animation for small-title and turning-text
        const initialTimeline = gsap.timeline({ defaults: { ease: "power3.out", duration: 2.5, delay: 0.5 } });
        initialTimeline.fromTo('.small-title', { opacity: 0 }, { opacity: 1, stagger: 0.5, delay: 1.5 });
        initialTimeline.fromTo('.turning-text', { rotateY: '0deg' }, { rotateY: '360deg', ease: "power3.inOut" });

        // Animation for overlay elements
        const overlayTimeline = gsap.timeline();
        overlayTimeline.to('.overlay-first', { duration: 1, left: '-100%', ease: "power3.inOut" });
        overlayTimeline.to('.overlay-second', { duration: 1, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");

        // Scroll-based animation for hero-content
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#index",
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
        scrollTimeline.to('.hero-content', { opacity: 0, duration: 0.5 });

        // Animation for hero-title
        const heroTitle = new SplitType('.hero-title', { types: 'chars' });
        const chars = heroTitle.chars;
        gsap.fromTo(chars,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 2, ease: 'power4.out' });

        return () => {
            initialTimeline.kill();
            overlayTimeline.kill();
            scrollTimeline.kill();
        };
    }, []);

    return (
        <section id="index" className='w-full min-h-screen flex flex-col bg-zinc-950 relative'>
            <button className="">
                <img src="/square-brackets.svg" alt="" className='absolute top-7 right-16' />
                <span className='w-[.9rem] h-[1rem] rounded bg-violet-500 absolute right-[4.376rem] top-[2rem]'></span>
            </button>
            <div border-cut="bottom-right-black" className="flex flex-col mt-6 justify-center items-center">
                <div className="w-full flex flex-col justify-center items-center mt-48 ">
                    <h1 className='big-title2 [word-spacing:0.1em] hero-content hero-title'
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%);' }}>
                        trish ramos
                    </h1>
                    <div className='w-[48vw] flex justify-center mt-8 hero-content'>
                        <p className="title-h3 uppercase w-full ml-5">
                            Frontend developer with a designer's eye. Currently seeking job
                            opportunities where I can innovate & collaborate.
                        </p>
                    </div>
                    <div className="w-[48vw] flex justify-end mt-4 px-2 relative hero-content">
                        <HeroBtn />
                    </div>
                </div>
            </div>
            <article className="w-full flex flex-col justify-center items-center relative mt-36 hero-content">
                <div className="w-full flex flex-col justify-center items-center relative ">
                    <div className="w-full flex justify-between text-xxsmall uppercase px-16">
                        <span className='flex'>
                            based in <span className='text-xxsmall-white ml-1.5'> colombia</span>
                        </span>
                        <span className='flex text-xxsmall-white'>
                            [<ScrollBtn />]
                        </span>
                        <span className='flex text-xxsmall-white'>
                            folio <span className='text-xxsmall ml-1.5'>2024</span>
                        </span>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Hero;
