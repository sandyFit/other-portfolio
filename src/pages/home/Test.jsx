import React, { useState, useEffect } from 'react';
import { HiArrowDown, HiArrowDownRight, HiOutlineChevronDoubleDown } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';
import '../../assets/css/borders.css';

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
                {opacity: 1, stagger: 0.5, delay: 3.5}
            
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
        <section id="index" data-cursor-color='#d946ef'
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <div border-cut="bottom-right-black"
                className="flex flex-col font-syne mt-6 ml-16">
                <div className="flex flex-col justify-start items-start relative">
                    <div className='text-logo'>
                        <TextShimmerHero text={'trish ramos'}/>
                    </div>
                    <div className='w-3 h-3 bg-violet-500 absolute bottom-[3.4rem] left-0'></div> 
                        <p className='w-[27.1%] font-[100] indent-7 text-xsmall mt-[-.5rem] uppercase'>
                            Frontend developer with a designer's eye. currently seeking job
                            opportunities where I can innovate & collaborate.
                        </p>
                </div>
                <button className='text-[2rem] text-violet-500 absolute right-16 top-28'>
                    <HiOutlineChevronDoubleDown/>
                </button>

                <div className="flex mt-6 relative">
                    <button onMouseOver={() => { setIsActive(true) }}
                        onMouseLeave={() => { setIsActive(false) }}
                        border-cut="bottom-left-purple"
                        className="group relative px-[4.2rem] h-12">
                    
                        <Link to={"my-work"} class="group relative overflow-hidden text-xsmall-white">
                            <span class="relative inline-flex">
                                <span class="duration-700 [transition-delay:0.02s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    s
                                </span>
                                <span class="duration-700 [transition-delay:0.04s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    e
                                </span>
                                <span class="duration-700 [transition-delay:0.06s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    e
                                </span>
                                
                                <span class="duration-700 [transition-delay:0.12s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    &nbsp;
                                </span>
                                <span class="duration-700 [transition-delay:0.14s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    m
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    y
                                </span>                                    
                                <span class="duration-700 [transition-delay:0.12s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    &nbsp;
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    W
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    o
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    r
                                </span>
                                <span class="duration-700 [transition-delay:0.16s] 
                                group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                    k
                                </span>
                            </span>
                        </Link>                              
                    </button>               
                </div>                          
            </div>

            <article className="w-full flex flex-col justify-center items-center relative mt-40  hero-content">
                <div className="w-full flex flex-col justify-center items-center relative ">                      
                     <div className="w-full flex justify-between text-xsmall uppercase px-16">
                        <span className='flex'>
                            based in <span className='text-zinc-50 ml-1.5'> colombia</span>
                        </span>
                        <span className='flex text-zinc-50'>
                            ©2024 <span className='text-zinc-400 ml-1.5'>folio</span>
                        </span>
                    </div>

                    

                    <div className="flex justify-center mt-20 px-[3.6rem]">                                            
                        <h1 className='xl-title [word-spacing:0.1em]'>
                            <TextShimmerHero text={'frontend developer '}/>
                        </h1>                       
                
                    </div>
                  
               </div>
                                   
            </article> 
            
        </section>
    )
}

export default Test;
