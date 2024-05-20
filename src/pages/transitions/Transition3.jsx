import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { HiArrowDown, HiChevronDoubleDown } from 'react-icons/hi2';
import Cursor from '../../components/ui/Cursor';

const Transition3 = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <section id='t3' data-cursor-color='#d946ef'         
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative 
                pb-20 about-content'>
            <Cursor isActive={isActive}/>
            <div className="w-full flex flex-col items-start px-16" border-cut="footer-btm">                    
                <div className="flex justify-between relative mt-12">
                    <div className='title-h2'>
                            <TextShimmerEffect text={"⋙ CHECK OUT MY PROJECTS"}/>
                            <TextShimmerEffect text={"WHERE FORM MEETS FUNCTION,"}/>
                            <TextShimmerEffect text={"CREATING ENGAGING USER "}/>
                            <TextShimmerEffect text={"EXPERIENCES. ∎ I'M JUST"}/>
                            <TextShimmerEffect text={"STARTING OUT, BUT I'M"}/>
                            <TextShimmerEffect text={"THRILLED TO SHARE WHAT"}/>
                            <TextShimmerEffect text={"I'VE BUILD SO FAR."}/>
                            
                    </div>
                        
                    <div className="flex flex-col text-right morganite-extra-bold text-[23rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[4.4rem] -right-[26rem]'>
                            Work
                        </span>                      
                    </div>

                    <button className='text-[2rem] text-violet-500 absolute -right-[25rem] -bottom-[11rem] '>
                        <HiArrowDown/>
                    </button>                       
                </div>

                {/* <hr className='w-[91vw] border-t-[1px] border-violet-500 absolute bottom-64' /> */}
                <div className="flex  justify-end">
                    <div className="flex gap-32 justify-end mt-16">
                        <div className='text-xsmall w-[55%] columns-2 gap-[2em]'>
                            Each project is designed to be fast, secure, visually appealing and functinally robust, utilizing advanced web
                            technologies like CSS, JavaScript, ReactJS, NextJS, headless CMS, and APIs. <br />
                            These projects are hosted on AWS and Vercel to ensure optimal performance and reliability.                                                  
                        </div>                  
                    </div>
                                   
                </div>
            </div>                                   
        </section>
    );
}

export default Transition3;
