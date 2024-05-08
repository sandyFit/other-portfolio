import React, { useState, useEffect } from 'react';
import { HiArrowDown, HiArrowDownRight } from "react-icons/hi2";
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

    


    //  useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const heroTimeline = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: "#index",
    //             start: "top top", // Triggering as soon as it enters the top of the viewport
    //             end: "bottom top", // End when the bottom of the trigger hits the top of the viewport
    //             scrub: true, // Smooth scrubbing
    //             toggleActions: 'play none none reverse', // Reverse when scrolling back up
    //         }
    //     });

    //     // Fade out the Hero content
    //     heroTimeline.to('.hero-content', { opacity: 0, duration: 0.5 });

    // }, []);


    return (
        <section id="index" 
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative hero-content'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <div border-cut="bottom-left-black"
                className="flex flex-col font-syne mt-6 ml-12">
                <div className="flex flex-col justify-start items-start relative">
                    <div className='text-logo'>
                        <TextShimmerHero text={'trish ramos'}/>
                    </div>
                    <div className='w-3 h-3 bg-violet-500 absolute bottom-[3.4rem] left-0'></div> 
                        <p className='w-[27.1%] font-[100] indent-7 text-xsmall mt-[-.5rem] uppercase'>
                            Frontend developer with a designer's eye. currently seeking 
                            opportunities where I can innovate & collaborate.
                        </p>
                </div>
                 <button className='text-[2rem] text-violet-500 absolute right-10 top-28'>
                        <HiArrowDown/>
                    </button>

                <div className="flex mt-6 relative">
                    <button onMouseOver={() => { setIsActive(true) }}
                        onMouseLeave={() => { setIsActive(false) }}
                        border-cut="bottom-left-purple"
                        className="group relative capitalize px-11 h-12">
                    
                        <Link to='projects'
                            className="relative inline-flex overflow-hidden text-buttons text-zinc-50">
                            <div className="translate-y-0 skew-y-0 transition duration-500 
                            group-hover:-translate-y-[110%] group-hover:skew-y-6">
                                see my work
                            </div>
                            <div className="absolute translate-y-[110%] skew-y-6 transition 
                            duration-500 group-hover:translate-y-0 
                                group-hover:skew-y-0 text-violet-400">
                                see my work
                            </div>
                        </Link>                              
                    </button>               
                </div>                          
            </div>

            <article className="w-full flex flex-col justify-center items-center relative">
                <div className="w-full flex flex-col justify-center items-center relative pt-10">                      
                     <div className="w-[7%] absolute bottom-[26.5rem] right-16 text-small uppercase">
                        <span className='flex pl-2 leading-[24px] '>
                            portfolio  <br/>/ &nbsp; &nbsp; &nbsp;©2024
                        </span>
                    </div>

                    

                    <div className="flex justify-center">                                            
                        <span className='xl-title '>
                            <TextShimmerHero text={'frontend developer'}/>
                        </span>                       
                    </div>

                       
                    {/* <div className="w-full flex mr-24">
                        <span className='big-title '>
                            <TextShimmerHero text={"with a designer's eye"}/>
                        </span>                                                           
                                                       
                    </div> */}

                   
               </div>
                                   
            </article> 
            
        </section>
    )
}

export default Test;
