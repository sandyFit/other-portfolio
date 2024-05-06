import React, { useState, useEffect } from 'react'
import TextShimmerEffect from '../../components/featured/TextShimmerEffect'
import gsap from 'gsap';
import SectionBar from '../../layout/SectionBar';

const Test2 = () => {

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1, // Infinite loop
            defaults: { ease: "none" },
        });

        // Ensure you calculate the actual width of the content to scroll correctly
        const slideContainer = document.querySelector('.slide-container');
        const slideWidth = slideContainer.scrollWidth / 2; // Divide by 2 because we have duplicated content

        tl.to('.slide-container', {
            x: -slideWidth, // Move by the width of one set of content
            duration: 60, // Control the speed of the scroll
            ease: "linear",
        });
    }, []);


    return (
        <section id="about"
            className='w-full min-h-screen flex flex-col justify-center items-start bg-zinc-950 relative about-content'>
            <div className="text-zinc-50" >
                <SectionBar section={"About me"} />
            </div>

            <div className="flex flex-col  items-start mx-16">                        

                <div className="flex flex-col items-start mt-48">
                    <div className="flex justify-between ">
                        <div className='title-h2'>
                            <TextShimmerEffect text={"⋙ I'm a graphic designer"}/>
                            <TextShimmerEffect text={"who turned frontend"}/>
                            <TextShimmerEffect text={"developer. ∎ keenly"}/>
                            <TextShimmerEffect text={"focused on balancing"}/>
                            <TextShimmerEffect text={"code functionality &"}/>
                            <TextShimmerEffect text={"visual aesthetics."}/>
                        </div>

                        {/* <div className="flex flex-col ml-24">
                            <img src="/me-bn.png" alt="" style={{ width: '330px', height: '360px' }} />                           
                        </div> */}
                    </div>
                    <div className="flex gap-32 justify-end mt-24">

                        <div className='text-xsmall w-[55%] columns-2 gap-[2em]' >
                            In my journey as a self-taught frontend developer specializing in the React ecosystem, I'm
                            passionate about designing smooth animations, crafting engaging transitions, and resolving
                            complex layouts.
                            <br /><br />
                            I aim for a holistic approach, dedicated to preserving the original design's integrity while
                            navigating the inherent constraints and challenges of web development.
                            <br /><br />
                            Off duty,  I delve into kinetic typography, motion graphics, and generative design.
                            <br />
                            Offline, I'm often doodling, baking yum yums or pumping iron at the gym.
                            <br /><br />
                            I've been a freelance designer since 2019, now seeking full-time dev roles or project collaborations.
                            <br /><br />
                            For inquiries or opportunities, please contact me at 
                            <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.
                                                  
                        </div>
                    
                    </div>
                </div>                
            </div>

            <div className="flex w-[92%] h-60 bg-purple-200 rounded-[5px] mx-16 mt-28 flex-col items-center 
                overflow-hidden">
                <h4 className='text-xxsmall-black mt-6'>My toolkit includes:</h4>
                <div className="slide-container flex items-center" style={{ width: '200%' }}>
                    {/* Repeat the list twice for seamless looping */}
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="slide flex items-center justify-start h-20 bg-violet-500 mt-10">
                            <p className='title-small uppercase rounded text-zinc-50'>
                                html &nbsp; &nbsp; | &nbsp; &nbsp; scss &nbsp; &nbsp; | &nbsp; &nbsp; javascript &nbsp; &nbsp;
                                | &nbsp; &nbsp; React &nbsp; &nbsp; | &nbsp; &nbsp; Node js &nbsp; &nbsp;
                                | &nbsp; &nbsp; webgl &nbsp; &nbsp; | &nbsp; &nbsp; next js &nbsp; &nbsp;
                                | &nbsp; &nbsp; gsap &nbsp; &nbsp; | &nbsp; &nbsp; Typescript &nbsp; &nbsp;
                                | &nbsp; &nbsp; Figma &nbsp; &nbsp; | &nbsp; &nbsp; after effects &nbsp; &nbsp;
                                | &nbsp; &nbsp; prismic cms &nbsp; &nbsp; | &nbsp; &nbsp; aws &nbsp; &nbsp;
                                | &nbsp; &nbsp; storybook &nbsp; &nbsp; |
                            </p>                                                   
                        </div>
                    ))}
                </div>                
            </div>
        </section>
    )
}

export default Test2;