import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { BsAsterisk } from 'react-icons/bs';


const Hero2 = () => {

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
            className='w-full min-h-screen bg-skyIce-300'>
            <Cursor isActive={isActive} />
            <article className="w-[60%] flex flex-col text-[8rem] fontTitle font-[500] text-skyIce-900 leading-[120px]
                uppercase justify-center pt-60 ml-24 tracking-tighter relative">
                <BsAsterisk className='absolute rotating-icon text-5xl bottom-[25.5rem] left-4' />
                
                <h1 className=' ml-[3.5rem]'> frontend </h1><br />
                <span className='w-[60%]  ml-[25.6rem] mt-[-8.3rem] text-pink-50'>developer</span><br/>
                <span className='w-[80%]  ml-[26rem] mt-[-8.3rem]'>with an </span>
                <span className='w-[20%]  absolute bottom-[8.4rem] text-pink-50 left-[61rem] font-playfair italic 
                    lowercase text-[9.5rem] font-[100] z-10'>
                    eye</span>
                <span className='w-[96%] ml-[35rem] mt-[-.8rem] '>for design_</span>                
            </article>

            <div className="flex relative">   
                   
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownLeft className='text-[6rem] text-pink-50 mb-2 absolute -bottom-3 left-[31.4rem]'/> 

                </Link>
                
            </div>

            <article className="w-[40%] flex flex-col justify-start items-start h-full  relative ">                                              
                <div className="flex w-[480px] h-56 justify-center items-center bg-zinc-950 bg-opacity-30 absolute 
                    bottom-20"></div> 
                <div className="flex w-[280px] h-[300px] z-20 absolute bottom-0 left-48 ">
                    {/* <img src="/me-bn.png" alt="Trish Avatar"/> */}
                </div>                       
            </article>    
            
            <span className='array-text-light absolute left-10 bottom-4'>
                portfolio v.1.0
            </span>
        </section>
    )
}

export default Hero2