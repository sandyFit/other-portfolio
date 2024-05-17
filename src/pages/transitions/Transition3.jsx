import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Transition3 = () => {
    

    return (
        <section id='t3'          
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative overflow-hidde
                pb-20 about-content'>
            <div className="flex flex-col items-start mx-16" border-cut="footer-btm"> 
                    
                    <div className="flex justify-between relative mt-16">
                        <div className='title-h2'>
                            <TextShimmerEffect text={"⋙ In my work, I focus"}/>
                            <TextShimmerEffect text={"on design fidelity & "}/>
                            <TextShimmerEffect text={"technical precision to"}/>
                            <TextShimmerEffect text={"make sure each project"}/>
                            <TextShimmerEffect text={"is visually appealing & "}/>
                            <TextShimmerEffect text={"functionally robust."}/>
                    </div>
                    
                    <div className="flex flex-col text-right morganite-extra-bold text-[24rem] font-[500]
                        text-zinc-700 text-opacity-40 absolute -bottom-44 -right-[35.5rem]">
                        <span className=''>Work</span>                      
                    </div>
                        
                </div>
                
                <div className="flex gap-32 justify-end mt-20">
                    {/* <div className='w-3 h-3 bg-violet-500 absolute top-[.4rem] left-0'></div> */}
                    <div className='text-xsmall w-[28%]' >
                        Each project is crafted for optimal performance and user engagement using technologies like
                        SCSS, JavaScript, ReactJS, NextJS, and REST APIs, hosted on AWS and Vercel.                                         
                    </div>      
                    
                    
                </div>


                    {/* <div className='flex flex-col items-center'>                    
                        <span className='flex bigger-title text-center gap-8 [word-spacing:0.1em]'>
                            <TextShimmerEffect text={'selected projects'}/>

                        </span>

                        <div className="w-[48%] flex flex-col gap-6 justify-start ml-[32rem] relative">
                            <div className='w-3 h-3 bg-violet-500 absolute top-[.4rem] left-0'></div>
                            <p className='w-full flex text-xsmall uppercase text-zinc-400  indent-8'>
                                Each crafted for optimal performance and user engagement using technologies like
                                SCSS, JavaScript, ReactJS, NextJS, and REST APIs, hosted on AWS and Vercel.<br/>
                                My focus on design fidelity and technical precision ensures each project is visually appealing
                                and functionally robust.
                            </p>
                        </div>
                        
                    </div>*/}
            </div> 
            
                        
        </section>
    );
}

export default Transition3;
