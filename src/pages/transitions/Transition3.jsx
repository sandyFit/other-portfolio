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
            <div className="flex flex-col items-start mx-16" border-cut="footer-btm"> 
                    
                    <div className="flex justify-between relative mt-16">
                        <div className='title-h2'>
                            <TextShimmerEffect text={"⋙ I strive to focus"}/>
                            <TextShimmerEffect text={"on design fidelity & "}/>
                            <TextShimmerEffect text={"technical precision to"}/>
                            <TextShimmerEffect text={"make sure each project"}/>
                            <TextShimmerEffect text={"is visually appealing & "}/>
                            <TextShimmerEffect text={"functionally robust."}/>
                    </div>
                    
                    <div className="flex flex-col text-right morganite-extra-bold text-[24rem] font-[500]
                        text-zinc-700 text-opacity-40 absolute -bottom-[9.2rem] -right-[35.5rem]">
                        <span className=''>Work</span>                      
                    </div>

                <button className='text-[2rem] text-violet-500 absolute -right-[36rem] -bottom-[6rem]'>
                    <HiArrowDown/>
                </button>
                        
                </div>
                <hr className='w-[91vw] border-t-[1px] border-zinc-500 absolute bottom-60' />
                <div className="flex justify-end">
                    <div className="w-[38%] flex flex-col mt-[4.5rem]">
                        
                        <div className='text-xsmall w-[98%] mb-3' >
                            Each project is crafted for optimal performance and user engagement using technologies like
                            SCSS, JavaScript, ReactJS, NextJS, and REST APIs, hosted on AWS and Vercel.                                         
                        </div>       
                        
                        
                    {/* <div className="flex justify-center items-center py-1">
                            <span className='text-small uppercase before:content-[""] before:inline-block before:w-20 
                                before:h-[2px] before:bg-violet-500 before:mr-5 before:mb-1 after:content-[""] after:inline-block after:w-20 
                                after:h-[2px] after:bg-violet-500 after:ml-5 after:mb-1'>
                                scroll to explore &nbsp; &#129123;
                            </span>
                        </div>

                        <hr className='w-full border-t-[1px] border-violet-500' /> */}
                    </div>                   
                </div>
            </div>                                   
        </section>
    );
}

export default Transition3;
