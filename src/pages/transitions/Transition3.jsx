import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';

const Transition3 = () => {
    

    return (
        <section id='t3'>          
            <div className='w-full min-h-screen flex justify-center items-center  relative'>
                <div border-cut="footer-btm"
                    className="w-[90%] h-[40rem] rounded flex flex-col justify-center items-center pb-24 
                    transition-transform">
                    <div className='flex flex-col items-center'>                    
                        <span className='flex bigger-title text-center gap-8'>
                            <TextShimmerEffect text={'selected'}/>
                            <TextShimmerEffect text={'projects'}/>
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
                        
                    </div>
                </div>
            </div>
                        
        </section>
    );
}

export default Transition3;
