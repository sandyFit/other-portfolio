import React, { useState, useEffect } from 'react';
import { HiArrowDownRight } from "react-icons/hi2";
import Cursor from '../../components/ui/Cursor';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Transition from '../transitions/Transition';
import Transition2 from '../transitions/Transition2';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import TimeZone from '../../components/ui/TimeZone';

const Test = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 1, // slightly faster
                delay: 2
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

        tl.to('.overlay-first', { duration: 1, left: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
    }, []);

    const date = new Date();

    return (
        <section id="index"
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative'>
            <Transition />
            <Transition2/>
            <Cursor isActive={isActive} />
            <div className="flex flex-col font-syne mt-6 ml-12 gap-6">
                <div className="flex flex-col justify-start items-start relative">
                    <p className='text-cyan-400 text-[3.2rem] font-[700] uppercase'>
                        <TextShimmerHero text={'trish ramos'}/>
                    </p>
                     <p className='w-[30%] font-[100] text-xsmall indent-28'>
                        Creative frontend developer with a keen eye for design —
                        Currently seeking new dev opportunities to innovate and collaborate! 
                    </p>

                </div>

                <div className="flex gap-6">

                <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    className="group relative  h-12 rounded-full border border-zinc-500 bg-transparent px-12
                    text-cyan-400">
                    <a href='#'
                        className="relative inline-flex overflow-hidden font-syne text-xl">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                            group-hover:skew-y-10">
                            Resume
                        </div>
                        <div className="absolute translate-y-[110%] skew-y-10 transition duration-500 group-hover:translate-y-0 
                            group-hover:skew-y-0 text-zinc-50 ">
                            Resume
                        </div>
                    </a>
                </button>               
            </div>
                           
            </div>
            <article className=" flex flex-col justify-end items-end font-syne text-[8rem] font-[600] pt-[8rem] pr-12
                text-zinc-200 leading-[90px] uppercase tracking-tighter relative ">
                <div className="flex flex-col gap-3">

                    <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                    className="group relative text-zinc-50 flex justify-end">
                        <div 
                            className="relative inline-flex overflow-hidden font-syne text-[8rem] uppercase">
                            <div className="translate-y-0  transition duration-500 group-hover:-translate-y-[110%] text-outline
                                ">
                                <TextShimmerHero text={'frontend'}/> 
                            </div>
                            <div className="absolute translate-y-[110%] transition duration-500 group-hover:translate-y-0 
                                 text-zinc-50 left-24 text-outline">
                               creative
                            </div>
                        </div>
                    </button>

                    <div className="flex relative ">
                        <div className="w-[17%] px-6 absolute -bottom-1 left-[50rem] text-xsmall">
                            <span className='flex text-left '>
                                portfolio <br/>/&nbsp; &nbsp;issue 1.0
                            </span>
                        </div>

                        <span className='pr-[7.8rem] text-cyan-400'>
                            <TextShimmerHero text={'developer'}/>
                        </span>
                        <button className='absolute top-28 -right-4'><HiArrowDownRight/></button>
                    </div>
                    <div className="flex justify-end fontTitle font-[300] mt-1 mr-[8rem] textSlidingLeft">

                        <AiOutlineCopyrightCircle className='text-[6.8rem] mt-[-1rem] font-[200]'/>
                        {date.getFullYear()}
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
