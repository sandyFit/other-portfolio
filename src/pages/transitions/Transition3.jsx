import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { HiArrowDown, HiChevronDoubleDown } from 'react-icons/hi2';

const Transition3 = () => {
    

    return (
        <section id='t3'          
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative 
                pb-20 about-content'>
            <div className="w-full flex flex-col items-start px-16" border-cut="footer-btm">                    
                <div className="flex justify-between relative mt-12">
                    <div className='title-h2'>
                            <TextShimmerEffect text={"⋙ Here you can explore "}/>
                            <TextShimmerEffect text={"some selected projects"}/>
                            <TextShimmerEffect text={"meticulously crafted"}/>
                            <TextShimmerEffect text={"for an optimal user "}/>
                            <TextShimmerEffect text={"experience. "}/>
                    </div>
                        
                    <div className="flex flex-col text-right morganite-extra-bold text-[20rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                            <span className='absolute bottom-[3.4rem] -right-[33rem]'>
                                Work
                            </span>                      
                    </div>

                    <button className='text-[2rem] text-violet-500 absolute -right-[34rem] -bottom-[13rem] '>
                        <HiArrowDown/>
                    </button>                       
                </div>

                {/* <hr className='w-[91vw] border-t-[1px] border-violet-500 absolute bottom-64' /> */}
                <div className="flex  justify-end">
                    <div className="flex gap-32 justify-end mt-[8rem]">
                        <div className='text-xsmall w-[55%] columns-2 gap-[2em]' >
                            Each project is designed to maximize performance and engagement, usng advanced technologies
                            like SCSS, JavaScript, ReactJS, NextJS, and REST APIs.<br/>
                            These projects are hosted on AWS and Vercel to ensure robust performance and reliability.                                                  
                        </div>                  
                    </div>
                                   
                </div>
            </div>                                   
        </section>
    );
}

export default Transition3;
