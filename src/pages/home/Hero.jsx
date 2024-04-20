import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft, HiArrowDownRight } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { BsAsterisk } from 'react-icons/bs';

const Hero = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Define the animation
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out", // This easing creates a more natural movement
                duration: 1.8
            }
        });

        // Animating title1 and title2 with stagger
        tl.fromTo(".title", 
            { transformOrigin: "bottom", rotateX: 90, opacity: 0 },
            {
                rotateX: 0, opacity: 1, stagger:
                {
                    each: 0.4,

                },
                x: 100,
                cycle: { y: [100, -100] ,
                    rotation: [120, -120]
                },
                
            }
        );
        
        

        // Return a function to kill the timeline to prevent memory leaks
        return () => tl.kill();
    }, []);


    return (
        <section data-cursor-color='#f9a8d4' id="index"
            className='w-full min-h-screen bg-zinc-900'>
            <Cursor isActive={isActive} />
            <article className="w-[90%] flex flex-col text-[10rem] fontTitle font-[500] text-zinc-50 leading-[130px]
                uppercase pt-52 tracking-tighter relative justify-start ml-12">
                <BsAsterisk className='absolute text-zinc-500 rotating-icon text-5xl bottom-[12.8rem] left-[75.3rem]' />
                <p className='text-center text-small absolute bottom-[17rem] left-[53.2rem]'>
                    available<br/>/ for work
                 </p>
                <h1 className='w-full '> frontend </h1>
                <span className='text-skyIce-300'>developer</span>
                <span className='w-[80%] ml-[20rem] '>with an </span>
                <span className='w-[20%]  absolute bottom-[9.6rem] text-skyIce-300 left-[63rem] font-playfair italic 
                    lowercase text-[10rem] font-[100] z-10'>
                    eye</span>
                <span className='w-[96%] ml-[31rem]'>for design</span>                
            </article>

            <p className='text-left text-small absolute bottom-[14.5rem] left-[11rem]'>
                contact: / <br/> hello@trishramos.com
            </p>

            <div className="flex relative">   
                   
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownLeft className='text-[10rem] text-skyIce-300 mb-2 absolute -bottom-3 left-[2rem]'/> 

                </Link>
                
            </div>
           
            {/* <span className='text-small text-base absolute left-[10rem] bottom-6'>
                scroll
            </span> */}

            <span className='text-center text-small text-base absolute left-[31.3rem] bottom-[6.5rem]'>
                folio <br/> / v.1.0
            </span>
            
        </section>
    )
}

export default Hero;
