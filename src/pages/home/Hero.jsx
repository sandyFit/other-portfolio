import React, { useState, useEffect, useRef } from 'react';
import { HiArrowDownRight} from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';


const Hero = () => {
    const [isActive, setIsActive] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);
    
    
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
        const handleLoad = () => setPageLoaded(true);
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    useEffect(() => {
        if (pageLoaded) {
            gsap.registerPlugin(ScrollTrigger);
            const tl = gsap.timeline();

           tl.to('.overlay-first', { duration: 1, top: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1, top: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
        }
    }, [pageLoaded]);


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
            className='w-full min-h-screen flex flex-col relative bg-zinc-950 hero-content'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />

            <article className='flex justify-end items-center gap-5 pt-48 mr-24'>
                <p className='w-[30%] font-[100] text-xsmall'>
                    Hello, I'm Trish, a creative frontend developer with a keen eye for design.<br/>
                    Currently seeking new dev opportunities to innovate and collaborate! 
                </p>

                <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    className="group relative w-36 h-12 rounded-full border border-zinc-500 bg-transparent px-8 
                    text-cyan-400">
                    <Link to='projects'
                        className="relative inline-flex overflow-hidden font-syne text-lg">
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


            <article className="w-[80%] flex flex-col items-start text-cyan-400 uppercase pt-36 pl-16
                relative">                
                <div className="w-full flex flex-col  ">                         
                    <h1 className='font-syne text-outline shine'>
                        <TextShimmerHero text='frontend' />
                    </h1>
                                       
                    <span className='text-[10.85rem] font-[500] tracking-[-.8rem] leading-[60px] shine'>
                    <TextShimmerHero text= 'developer' /></span>
                </div>
                
            </article> 
            <div className="flex flex-col relative">                      
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownRight className='text-[10rem] text-zinc-500 mb-2 absolute -bottom-12 right-[2rem]'/> 
                </Link>  
                <p className='text-xsmall-min absolute -bottom-10 right-[3.4rem]'>scroll to explore</p>
            </div> 
           
        </section>
    )
}

export default Hero;

