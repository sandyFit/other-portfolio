import React, { useState, useEffect } from 'react'
import TextShimmerEffect from '../../components/featured/TextShimmerEffect'
import gsap from 'gsap';
import '../../assets/css/borders.css';
import ToolTable from '../../components/ui/ToolTable';

const Test2 = () => {

    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         repeat: -1, // Infinite loop
    //         defaults: { ease: "none" },
    //     });

    //     // Ensure you calculate the actual width of the content to scroll correctly
    //     const slideContainer = document.querySelector('.slide-container');
    //     const slideWidth = slideContainer.scrollWidth / 2; // Divide by 2 because we have duplicated content

    //     tl.to('.slide-container', {
    //         x: -slideWidth, // Move by the width of one set of content
    //         duration: 60, // Control the speed of the scroll
    //         ease: "linear",
    //     });
    // }, []);


    return (
        <section id="who's-this"
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative overflow-hidde
                pb-20 about-content'>
            <div className="flex flex-col  items-start mx-16" border-cut="top-and-bottom-about">                        

                <div className="flex flex-col items-start mt-32">
                    <div className="flex justify-between relative">
                        <div className='title-h2'>
                            <TextShimmerEffect text={"⋙ I'm a graphic designer"}/>
                            <TextShimmerEffect text={"who turned frontend"}/>
                            <TextShimmerEffect text={"developer. ∎ keenly"}/>
                            <TextShimmerEffect text={"focused on balancing"}/>
                            <TextShimmerEffect text={"code functionality &"}/>
                            <TextShimmerEffect text={"visual aesthetics."}/>
                        </div>

                        <div className="flex flex-col text-right morganite-extra-bold text-[18rem] font-[500]
                            leading-[210px] text-zinc-700
                            text-opacity-40 absolute -right-[34rem] -bottom-6">
                            <span className=''>Who's <br/> this</span>                      
                        </div>
                    </div>
                    <div className="flex gap-32 justify-end mt-16">

                        <div className='text-xsmall w-[55%] columns-2 gap-[2em]' >
                            My love for the craft of design drives me to adopt a holistic approach, striving to preserve the
                            original creative vision while navigating the unique constraints and challenges of web development.
                            <br /><br />
                            In my journey as a self-taught frontend developer specializing in the React ecosystem, I'm
                            passionate about designing smooth animations, crafting engaging transitions, and resolving
                            complex layouts.
                            <br /><br />
                            Off duty,  I enjoy working on kinetic typography, motion graphics, and generative design.
                            <br />
                            Offline, I'm often doodling, baking yum yums or pumping iron at the gym.
                            <br /><br />
                            I've been a freelance designer since 2019, now seeking full-time dev roles or project collaborations.
                            <br />
                            For inquiries or opportunities, please contact me at 
                            <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.                                                  
                        </div>                  
                    </div>
                </div>                
            </div>

            <div className="flex flex-col w-[51%] justify-end ml-[43rem] mt-12 relative">
                <div border-cut="frame-toolkit"
                    className="flex justify-center w-full h-[8%]  px-12 py-4">
                    <p className='font-roboto text-6xl font-[900] text-zinc-50  tracking-widest uppercase'>
                        core tools
                    </p>
                </div>
                <div className="flex w-full border-[1px] border-violet-500 bg-violet-500">
                    <p className='text-xxxsmall-black px-8 py-3'>
                      
                        Yes, I value the fundamentals of web development, yet I remain eager to explore new
                        processes and tools that can boost efficiency and productivity. <br />
                        My current toolkit, which is centered around the JAMstack architecture, includes:
                            
                    </p>
                </div>

                <div className="flex ">
                    <ToolTable/>
                </div>

                
            </div>     
               
        </section>

    )
}

export default Test2;