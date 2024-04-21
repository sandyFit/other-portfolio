import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import MotionText from '../../components/ui/MotionText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useEffect(() => {
        // Initialize your animation inside useEffect
        gsap.fromTo(".scroll-content", {
        opacity: 0.5,  // Start with hidden content for the effect
        }, {
        opacity: 1,  // End at full visibility
        duration: 1,  // Duration of the fade effect
        scrollTrigger: {
            trigger: ".scroll-content",
            start: "top bottom-=200", 
            end: "bottom top",
            scrub: true,
        }
        });
    }, []);

    useEffect(() => {
        gsap.to(".animated-side", {
        y: 0, // Ending Y position (original position)
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".animated-side",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
        });
    }, []);


    return (
        <section data-cursor-color='#f9a8d4' id="about-me"
            className='w-full min-h-screen relative bg-zinc-900 py-40 '>
            
            <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-56 left-80'/>

            <div className="flex w-full">

                <MotionText
                    text1={'About Me'}
                    // text2={'About Me'}
                />
            </div>

            <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-40 left-80' />
            
            <div className="parent-container flex justify-center items-end mt-52 mx-32  relative">
                <div className='about-text-mayus sticky-side'>
                    <TextShimmerEffect
                        triggerOnScroll={true}
                        text='graphic'/>
                    <TextShimmerEffect
                        triggerOnScroll={true}
                        text='designer'/>
                    <span className='text-skyIce-300 font-playfair italic lowercase absolute bottom-[17.6rem]'>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='and'/>
                    </span>
                    <span >
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='self-' style={ {marginLeft: '12rem'}} />
                    </span><br />
                    <span className=''>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='taught' style={ {marginTop: '-5.5rem'}} />
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='frontend' />
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='developer' />
                        
                    </span> 

                </div>
                <div className="animated-side scroll-content flex flex-col justify-start items-end pl-52">
                    <p className='text-small-min'>
                        Hello, I'm Trish, 
                        I went to school for graphic design, and, driven by my passion for all things digital,
                        embarked on a self-taught journey to broaden my expertise into web development, specializing
                        in frontend and motion graphics.<br /><br />
                        Today, as a creative developer, I focus on crafting fluid animations, engaging transitions,
                        and complex layouts to enhance user experiences.
                        <br /><br />
                        Away from the screen, I'm indulging in life's varied rhythms, be it engaging in gym workouts,
                        mastering the craft of baking yum yums, or channeling my quirky side through drawing.
                    </p>
                    <div className="text-small-min mt-6 relative">
                        I'm currently on the lookout for full-time roles or project-based collaborations that
                        challenge my skills and stoke my passion for design and development. <br/>
                        For questions or opportunities, please feel free to reach me out at
                        <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.                     
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default About;
