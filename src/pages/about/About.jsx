import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBar from '../../layout/SectionBar';



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
            start: "top center", 
            end: "bottom top",
            scrub: true,
            //markers: true
        }
        });
    }, []);

    useEffect(() => {
        gsap.to(".animated-side", {
        y: -50, // Ending Y position (original position)
        opacity: 1,
        ease: "none",
        scrollTrigger: {
            trigger: ".animated-side",
            start: "top bottom-=50",
            end: "bottom top",
            scrub: true,
            // markers: true
        }
        });
    }, []);


    return (
        <section id="about"
            className='w-full min-h-screen relative bg-zinc-950 py-40 '>          

            <div className="text-zinc-50">
                <SectionBar section={"About Trish"}/>
            </div>
            
            
            <div className=" flex justify-center relative pl-16">
                <div className="flex flex-col">
                    <span className='text-title text-cyan-400' >
                        <TextShimmerEffect text="self-driven grafic designer" />
                        <TextShimmerEffect text="& self-taught frontend " />
                        <TextShimmerEffect text="developer" />
                    </span>
                    <p className='w-[44.5%] text-xsmall text-zinc-900 ml-[47rem] mt-4 indent-40'>
                        Based in Colombia, I'm a graphic design graduate who turned my enthusiasm for all things digital 
                        into a love  for web development, specializing in creating seamless experiences within
                        the React ecosystem.
                        <br/><br/>
                        My focus? Safeguarding design integrity by honoring the vision while embracing the constraints.
                        <br/><br/>
                        I love working on fluid animations, engaging transitions, and complex layouts that transform
                        user experiences from meh to mesmerizing ✨
                        <br /><br />
                        Off duty, I'm usually exploring the dynamic worlds of kinetic typography, diving into motion
                        graphics, or tinkering with the unpredictable art of AI prompting.
                        <br /><br />

                        Away from the screen, you might catch me pumping iron at the nearest gym, scribbling doodles
                        on every scrap of paper, or ruling the kitchen as the supreme queen of baking yum yums 🧁.
                        <br /><br />
                        I've been a freelance designer since 2019, now seeking full-time dev roles or project collaborations that
                        challenge my coding and design skills.
                        <br /><br />
                         For inquiries or opportunities, please contact me at 
                        <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.   
                    </p>
                </div>



                {/* <div className='flex about-text-mayus sticky-side w-[500px] bg-cyan-400'>
                    <img src="/me-bn.png" alt="my pic" width={'540px'}/>
                </div>
                <div className="animated-side scroll-content flex flex-col justify-start items-start pl-24">
                    <h3 className='title-small'>
                        <TextShimmerEffect text='me'/>
                    </h3>
                    <div className='text-[1.5rem] font-syne font-thin text-zinc-200'>                        
                        Based in Colombia, I'm a graphic design graduate who turned her enthusiasm for all things digital into a full-blown
                        love affair with web development.
                        <br/><br/>
                                      
                        As a self-taught and curious frontend developer, I've honed my skills to specialize in
                        the art of crafting seamless user experiences within the React ecosystem. 
                        <br /><br />
                   
                        My focus? Safeguarding design integrity by honoring the vision while embracing the constraints.
                        <br/><br/>
                        I love working on fluid animations, engaging transitions, and complex layouts that transform
                        user experiences from meh to mesmerizing ✨
                        <br/><br/>
                                
                        Off duty, I'm usually exploring the dynamic worlds of kinetic typography, diving into motion
                        graphics, or tinkering with the unpredictable art of AI prompting.
                        <br /><br />

                        Away from the screen, you might catch me pumping iron at the nearest gym, scribbling doodles
                        on every scrap of paper, or ruling the kitchen as the supreme queen of baking yum yums 🧁.
                        <br /><br />
                        I've been a freelance designer since 2019, now seeking full-time dev roles or project collaborations that
                        challenge my coding and design skills.
                        <br /><br />
                        I'm passionate about merging aesthetics with functionality
                        in my work. For inquiries or opportunities, please contact me at 
                        <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.                     
                    </div>
                </div> */}
            </div>

            
        </section>
    )
}

export default About;
