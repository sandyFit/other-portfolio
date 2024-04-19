import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft } from "react-icons/hi2";
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
            className='w-full min-h-screen'>
            <Cursor isActive={isActive} />
            <article className="w-[60%] flex flex-col text-[10rem] fontTitle font-[500] text-skyIce-900 leading-[120px]
                uppercase justify-center pt-80 tracking-tighter relative">
                <BsAsterisk className='absolute rotating-icon text-7xl bottom-[31rem] left-24' />
                
                <h1 className='title ml-[4.5rem]'> frontend </h1><br />
                <span className='w-[60%] title ml-[32rem] mt-[-6.1rem] text-pink-50'>developer</span><br/>
                <span className='w-[60%] title ml-[32.8rem] mt-[-6.1rem]'>with an </span>
                <span className='w-[20%] title absolute bottom-[11.1rem] text-pink-50 left-[76.5rem] font-playfair italic 
                    lowercase text-[12.48rem] font-[100] z-10'>
                    eye</span>
                <span className='w-[86%] ml-[45rem] mt-5 title'>for design_</span>                
            </article>

            <div className="flex relative">   
                   
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
                    <HiArrowDownLeft className='text-[8rem] text-pink-50 mb-2 absolute -bottom-7 left-[38rem]'/> 

                </Link>
                
            </div>

            <article className="w-[40%] flex flex-col justify-start items-start h-full  relative ">                                              
                <div className="flex w-[500px] h-72 justify-center items-center bg-zinc-950 bg-opacity-30 absolute 
                    bottom-28"></div> 
                <div className="flex w-[320px] h-[340px] z-20 absolute bottom-16 left-48 ">
                    <img src="/me-bn.png" alt="Trish Avatar"/>
                </div>                       
            </article>    
            
            <span className='array-text ml-12'>
                portfolio v.1.0
            </span>
        </section>
    );
};

export default Hero;
