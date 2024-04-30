import React, { useState, useEffect } from 'react';
import { HiArrowDownRight } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';
import TimeZone from '../../components/ui/TimeZone';

const Test = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1, // slightly fasters
                // delay: .5,
               
            }
        });

            tl.fromTo('.small-title',
                { opacity: 0 },
                {opacity: 1, stagger: 0.5, delay: 2.5}
            
        )
        tl.fromTo('.sliding-text',
            { translateX: '-100%', opacity: 0 },
            {translateX: 0, opacity: 1,   ease: "power3.inOut"}
        )

        return () => tl.kill();
    }, []);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.to('.overlay-first', { duration: 1, left: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
    }, []);

     useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#index",
                start: "top top", // Triggering as soon as it enters the top of the viewport
                end: "bottom top", // End when the bottom of the trigger hits the top of the viewport
                scrub: true, // Smooth scrubbing
                toggleActions: 'play none none reverse', // Reverse when scrolling back up
            }
        });

        // Fade out the Hero content
        heroTimeline.to('.hero-content', { opacity: 0, duration: 0.5 });

    }, []);


    return (
        <section id="index"
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative hero-content'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <div className="flex flex-col font-syne mt-6 ml-12 gap-6">
                <div className="flex flex-col justify-start items-start relative">
                    <p className='text-purple-300 text-[3.3rem] font-[700] uppercase'>
                        <TextShimmerHero text={'trish ramos'}/>
                    </p>
                     <p className='w-[30%] font-[100] text-xsmall indent-32'>
                        Creative frontend developer with a keen eye for design —
                        Currently seeking new dev opportunities to innovate and collaborate! 
                    </p>

                </div>

                <div className="flex gap-6">

                <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    className="group relative  h-12 rounded-full border border-purple-300 bg-transparent px-12
                    text-zinc-50">
                    <a href='#'
                        className="relative inline-flex overflow-hidden font-syne text-xl">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                            group-hover:skew-y-10">
                            Resume
                        </div>
                        <div className="absolute translate-y-[110%] skew-y-10 transition duration-500 group-hover:translate-y-0 
                            group-hover:skew-y-0 text-purple-300 ">
                            Resume
                        </div>
                    </a>
                </button>               
            </div>
                           
            </div>
            <article className="w-full flex flex-col justify-end items-end font-syne text-[8rem] font-[700] pt-[8rem] pr-12
                text-purple-300 leading-[90px] uppercase tracking-tighter relative ">
                <div className="flex flex-col gap-3">

                    <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                        className="group relative text-purple-300 flex justify-end ">
                        <div 
                            className="relative inline-flex overflow-hidden font-syne text-[8rem] uppercase">
                            <div className="translate-y-0  transition duration-500 group-hover:-translate-y-[110%] 
                             ext-purple-300 ">
                                <TextShimmerHero text={'frontend'}/> 
                            </div>
                            <div className="absolute translate-y-[110%] transition duration-500 group-hover:translate-y-0 
                                 text-purple-300 left-24 ">
                               creative
                            </div>
                        </div>
                    </button>

                    <div className="flex relative ">
                        <div className="w-[27%] px-6 absolute bottom-[6rem] -left-3 text-xsmall-min">
                            <span className='flex text-left leading-[24px] small-title'>
                                folio &nbsp; / &nbsp; v. 1.0
                            </span>
                        </div>

                        <span className='flex text-purple-300 text-[9rem] text-outline'>
                            
                            <TextShimmerHero
                                text={`developer`} />
                        </span>
                        <button className='absolute top-28 -right-4 text-purple-300'>
                            <HiArrowDownRight />
                        </button>
                    </div>
                    <div className="flex justify-end font-syne text-[9rem] font-[700] leading-[100px] mr-[10rem]">    
                        <TextShimmerHero
                            text={`©${new Date().getFullYear()}`}
                        />
                        
                    </div>

                </div>   

                 <div className="w-full flex justify-between items-center pl-12 relative">
                    <span className=' text-left text-small absolute -bottom-4'>
                        based in colombia
                        <TimeZone/>
                    </span>
                </div>
                
            </article> 
           
        </section>
    )
}

export default Test;
