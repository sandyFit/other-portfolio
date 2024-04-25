import React, { useState, useEffect, useRef } from 'react';
import { HiArrowDownRight} from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';


const Test = () => {
    const [isActive, setIsActive] = useState(false);
    const date = new Date();

    
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1, // slightly faster
                delay: 3
            }
        });

            tl.fromTo('.small-title',
                { opacity: 0 },
                {opacity: 1, stagger: 0.5}
            
        )

        return () => tl.kill();
    }, []);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.to('.overlay-first', { duration: 1.2, left: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1.2, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
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
            className='w-full min-h-screen flex flex-col  bg-zinc-900 relative hero-content'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />

            <article className='flex justify-end items-center gap-5 pt-48 mr-24'>
                <p className='w-[30%] font-[100] text-xsmall'>
                    Hello, I'm Trish, a creative frontend developer based in Colombia.<br/>
                    Eager for full-time roles or project collabs.<br/>
                    Feel free to dive into my portfolio of projects.
                </p>

                <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    className="group relative w-36 h-12 rounded-full border border-zinc-500 bg-transparent px-8 
                    text-petal-200">
                    <Link to='projects'
                        className="relative inline-flex overflow-hidden font-robotoCondensed text-xl">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                            group-hover:skew-y-12">
                            My Work
                        </div>
                        <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 
                            group-hover:skew-y-0 text-zinc-50 ">
                            My Work
                        </div>
                    </Link>
                </button>
            </article>            
            <hr className='w-[92%] border-t-[1px] border-zinc-600 absolute top-[25rem] left-16' /> 

            <p className='text-xsmall absolute top-[23rem] left-16'>
                (folio
            </p>
            <p className='text-xsmall absolute top-[23rem] right-16'>
                / v.1.0 )
            </p>


            <article className="w-[80%] flex flex-col items-start text-zinc-400 uppercase pt-40 pl-16
                relative text-title">
                
                <div className="flex flex-col">

                    <div className="w-full flex flex-col tracking-[-5px] ">
                          
                        <div className="flex text-petal-200">
                            <h1 className='mr-5 '>
                                <TextShimmerHero text='crtv' /> </h1>

                            <span className=''>
                            <TextShimmerHero text= 'frontend' /></span>
                        </div>  
                        <div className="flex">
                            <span className='text-petal-200 mr-5'>
                            <TextShimmerHero text= 'developer' /></span>
                            <span className=''>
                            <TextShimmerHero text= 'with a' /></span>
                        </div>

                    </div>

                    <div className="flex ">
                        <span className='flex '  >
                            <TextShimmerHero text="keen" /></span>                           
                            <span className='flex  pl-4 '  >
                            <TextShimmerHero text="eye" /></span>
                            <span className='flex  mx-4'  >
                            <TextShimmerHero text="for" /></span>
                        <span className='flex  '  >
                            <TextShimmerHero text="design" /></span>
                    </div>
                </div>
                
            </article> 
            <div className="flex flex-col relative">                      
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownRight className='text-[10rem] text-zinc-500 mb-2 absolute -bottom-6 right-[2rem]'/> 
                </Link>  
                <p className='text-xsmall-min absolute right-[3.4rem]'>scroll to explore</p>
            </div> 
           
        </section>
    )
}

export default Test;

