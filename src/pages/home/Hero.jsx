import React, { useState, useEffect } from 'react';
import { HiArrowDownLeft, HiArrowDownRight } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { BsAsterisk } from 'react-icons/bs';
import TimeZone from '../../components/ui/TimeZone';
import TextShimmerHero from '../../components/featured/TextShimmerHero';

const Hero = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1.2, // slightly faster
                delay: 3
            }
        });

            tl.fromTo('.small-title',
                { opacity: 0 },
                {opacity: 1, stagger: 0.5}
            
        )

        return () => tl.kill();
     }, []);



    return (
        <section data-cursor-color='#f9a8d4' id="index"
            className='w-full min-h-screen bg-zinc-900'>
            <Cursor isActive={isActive} />
            <article className="w-[90%] flex flex-col text-[10rem] fontTitle font-[500] text-zinc-50 leading-[130px]
                uppercase pt-52 tracking-tighter relative justify-start ml-12">
                {/* <span className='text-small text-base absolute left-3 top-44'>
                folio / v.1.0
                </span> */}
                <BsAsterisk className='absolute text-zinc-500 rotating-icon text-5xl bottom-[12.8rem] left-[75.3rem]' />
                <p className='w-[9.1%] text-left text-small absolute bottom-[17rem] left-[53.2rem] small-title'>
                    based in colombia
                 </p>
                <h1 className='w-full text-[10rem] fontTitle font-[500] text-zinc-50'> <TextShimmerHero text='frontend'/> </h1>
                <span className='text-skyIce-300 '><TextShimmerHero text='developer'/></span>
                <span className='w-[80%] ml-[20rem]  '><TextShimmerHero text='with an'/> </span>
                <span className='w-[20%]  absolute bottom-[9.6rem] text-skyIce-300 left-[63rem] font-playfair italic 
                    lowercase text-[10rem] font-[100] z-10 '>
                    <TextShimmerHero text='eye' />
                </span>
                <span className='w-[96%] ml-[31rem] '><TextShimmerHero text='for design'/></span>                
            </article>

            <p className='text-left text-small absolute bottom-[14.5rem] left-[3.8rem] small-title'>
                say hello / <br/> info@trishramos.com
            </p>

            <div className="flex relative">   
                   
                <Link to='about'
                    onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}> 
                    <HiArrowDownLeft className='text-[10rem] text-skyIce-300 mb-2 absolute -bottom-3 left-[2rem]'/> 

                </Link>
                
            </div>

            <span className='text-center text-small text-base absolute left-[29.3rem] bottom-[6.5rem] small-title'>
                available<br/> for work 
            </span>
            
        </section>
    )
}

export default Hero;
