import React, { useState } from 'react';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import HappyFace from '../../components/ui/HappyFace';
import ProjectsList from '../../layout/ProjectsList';

const Projects = () => {
    


    return (
        <section id='work' data-cursor-color='#d946ef'         
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative'>
            <div className="w-full flex flex-col items-start px-16" border-cut="footer-btm">                    
               <div className="flex justify-between relative mt-32">
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
                    
                    <div className="flex flex-col text-right morganite-extra-bold text-[26rem] font-[500] leading-[130px]
                        text-zinc-700 text-opacity-40 relative">                   
                        <span className='absolute bottom-[4.4rem] -right-[36rem]'>
                            Work
                        </span>                      
                    </div>

                    {/* <button className='text-[2rem] text-violet-500 absolute -right-[34rem] -bottom-[11.4rem] '>
                        <HiOutlineChevronDoubleDown/>
                    </button>                         */}
                </div>

                <div className="flex  justify-end">
                    <div className="flex gap-32 justify-end mt-16">
                        <p className='text-xsmall w-[56%] columns-2 gap-[2em]'>
                            Each project is responsive, visually appealing, and optimized for SEO, performance and
                            reliability. <br/>
                            Built with the latest web
                            technologies like CSS, JavaScript, ReactJS, NextJS, and APIs.
                            
                            Hosted on AWS and Vercel.
                            <br/>
                            While I'm still early in my career journey, I'm eager to share what I've built so far
                            and continue growing in the field.
                            <br/>
                            Check out what I can do.
                        </p>                  
                    </div>

                </div>
                <ProjectsList/>
            </div>                                   
        </section>
    );
}

export default Projects;
