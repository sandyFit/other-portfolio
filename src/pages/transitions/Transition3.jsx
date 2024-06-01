import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { HiArrowDown, HiChevronDoubleDown, HiOutlineChevronDoubleDown } from 'react-icons/hi2';
import Cursor from '../../components/ui/Cursor';
import HappyFace from '../../components/ui/HappyFace';

const Transition3 = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <section id='my-work' data-cursor-color='#d946ef'         
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative 
                pb-20 about-content'>
            <Cursor isActive={isActive}/>
            <div className="w-full flex flex-col items-start px-16" border-cut="footer-btm">                    
               <div className="flex justify-between relative mt-12">
                    <div className='title-h2 relative'>
                        <TextShimmerEffect text={"⋙ explore my projects:"}/>
                        <TextShimmerEffect text={"Crafted with Care & a"}/>
                        <TextShimmerEffect text={"Dash of Flair. "} />                     
                        <TextShimmerEffect text={"∎ My aim is to design"}/>
                        <TextShimmerEffect text={"every detail to function"}/>
                        <TextShimmerEffect text={"smootly & leave a"}/>
                        <TextShimmerEffect text={"lasting impression."}/>
                    </div>

                    <div className="absolute top-[7.8rem] left-[30rem]">
                        <HappyFace />
                    </div>
                    
                    <span className="absolute top-[6.2rem] left-[33.8rem] text-zinc-50 text-8xl rotating-icon">
                        ⁕
                    </span>
                    
                    <div className="flex flex-col text-right morganite-extra-bold text-[23rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[4.4rem] -right-[33.5rem]'>
                            Work
                        </span>                      
                    </div>

                    <button className='text-[2rem] text-violet-500 absolute -right-[34rem] -bottom-[11.4rem] '>
                        <HiOutlineChevronDoubleDown/>
                    </button>                        
                </div>


                {/* <hr className='w-[91vw] border-t-[1px] border-violet-500 absolute bottom-64' /> */}
                <div className="flex  justify-end">
                    <div className="flex gap-32 justify-end mt-16">
                        <div className='text-xsmall w-[55%] columns-2 gap-[2em]'>
                            Each project is responsive, visually appealing, and optimized for SEO, performance and
                            reliability. <br/>
                            Built with the latest web
                            technologies like CSS, JavaScript, ReactJS, NextJS, and APIs.
                            
                            Hosted on AWS and Vercel.
                            <br/>
                            While I'm still early in my career journey, I'm excited to share what I've built so far and
                            can't wait to grow even more.
                            <br/>
                            Ready to see what a designer with a passion for frontend development can do? Let's take a look!
                        </div>                  
                    </div>
                                   
                </div>
            </div>                                   
        </section>
    );
}

export default Transition3;
