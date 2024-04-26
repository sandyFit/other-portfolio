import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBar from '../../layout/SectionBar';
import FeatureParagraph from '../../components/featured/FeatureParagraph';


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
            className='w-full min-h-screen relative bg-zinc-900 py-40 '>          

            <div className="text-zinc-50">
                <SectionBar section={'about me'}/>
            </div>
            
            
            <div className="parent-container flex justify-center items-end  mx-32  relative">
                <div className='about-text-mayus sticky-side w-[350px] h-[500px] bg-cyan-400'>
                    <img src="/me-bn.png" alt="my pic"/>
                </div>
                <div className="animated-side scroll-content flex flex-col justify-start items-start pl-32">
                    <h3 className='title-small text-cyan-400'>
                        <TextShimmerEffect text='who i am'/>
                    </h3>
                    <div className='text-2xl font-[200] text-zinc-100'>                        
                        I'm a graphic design graduate who turned her enthusiasm for all things digital into a full-blown
                        love affair with web development.
                        <br/><br/>
                                      
                        Based in Colombia, self-taught and always curious, I've honed my skills to specialize in the art of frontend.
                        <br /><br />
                   
                        Today, as a creative frontend developer, I focus on crafting fluid animations, engaging transitions,
                        and complex layouts that transform user experiences from meh to mesmerizing.
                        <br/><br/>
                                
                        When I'm not coding up a storm, I'm usually exploring the dynamic worlds of kinetic
                        typography, diving into motion graphics, or tinkering with the unpredictable art of generative
                        design.
                        <br /><br />

                        Off-duty, you might catch me pumping iron at the nearest gym, scribbling doodles
                        on every scrap of paper, or ruling the kitchen as the supreme queen of baking yum yums 🧁.
                        <br /><br />
                        I've been a freelance designer since 2019, now seeking full-time roles or project collaborations that
                        challenge my coding and design skills.<br/>
                        I'm passionate about merging aesthetics with functionality
                        in my work. For inquiries or opportunities, contact me at 
                        <span className='text-zinc-50 ml-1'>info@trishramos.com</span>.                     
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default About;
