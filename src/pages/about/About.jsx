import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBar from '../../layout/SectionBar';
import Cursor from '../../components/ui/Cursor';



gsap.registerPlugin(ScrollTrigger);

const About = () => {

    const [isActive, setIsActive] = useState(false);

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

//     useEffect(() => {
//     // Ensure the section is initially visible
//     gsap.set(".about-content", { opacity: 1 });

//     // Timeline for the about section fade out
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#about",
//             start: "center center-=200",  // Start animation when the center of "#about" hits the center of the viewport
//             end: "bottom center",    // End animation when the bottom of "#about" hits the center of the viewport
//             scrub: true,
//             //markers: true
//         }
//     });

//     tl.to(".about-content", { opacity: 0.2, duration: 0.6 });
// }, []);


    return (
        <section id="about"
            className='w-full min-h-screen relative bg-zinc-950 about-content'>    
            <Cursor isActive={isActive}/>

            <div className="text-zinc-50">
                <SectionBar section={"About me"}/>
            </div>
            
            
            <div className=" flex justify-center relative pt-32 mx-24">
                <div className="flex flex-col">
                    
                    <span className='text-about w-[60%]' >
                        I'm a Colombian graphic designer who turned my enthusiasm for all things digital 
                        into a love affair with web development.
                    </span>

                    <div className="flex justify-between gap-10 mt-10">

                        <div className="w-[45%] flex">
                            <img src="/me-bn.png" alt="" width={'400px'}/>
                        </div>

                        <div className="w-[48%] flex flex-col gap-6 justify-end relative">
                            <div className='w-3 h-3 bg-violet-500 absolute top-[5.3rem] left-0'></div>
                            <p className='w-full flex text-small  text-zinc-400  indent-8'>
                                I'm a Colombian graphic designer who turned my enthusiasm for all things digital 
                                into a love affair with web development.
                                <br /><br />
                                {/* In my journey as a self-taught frontend developer especializing in the React ecosystem, my
                                approach involves a careful balance between code functionality and visual aesthetics,
                                striving to respect the vision behind each design. */}
                                {/* <br /><br />
                                My commitment? to preserve the integrity of the original design while embracing the inherent 
                                technical challenges that come with web development. */}

                                {/* I'm a Colombian graphic designer who turned my enthusiasm for all things digital 
                                into a love affair with web development.
                                <br /><br />
                                In my role as a self-taught frontend developer specializing in the React ecosystem, my approach is
                                to ensure that every line of code not only supports but enhances the visual story being told.
                                <br /><br />
                                My work revolves around a commitment to preserving the integrity of the original design
                                while embracing the inherent technical challenges that come with web development. */}
                                
                                
                            </p>

                            <div className="flex justify-end">
                                <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                                    className="group relative  h-12 rounded-full border border-violet-500 bg-transparent px-12">
                                    <a href='#'
                                        className="relative inline-flex overflow-hidden text-buttons text-zinc-50">
                                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                                            group-hover:skew-y-10">
                                            More About Me
                                        </div>
                                        <div className="absolute translate-y-[110%] skew-y-10 transition duration-500 group-hover:translate-y-0 
                                            group-hover:skew-y-0 text-violet-500 ">
                                            More About Me
                                        </div>
                                    </a>
                                </button>  
                            </div>
                        </div>

                    </div>
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
                        <br/><br/>
                        I prioritize using the simplest, most effective language to accomplish each task, aiming for 
                        efficiency and precision in execution. My approach is geared towards creating clean, maintainable, 
                        and scalable code, as I continue to grow and refine my skills in the React ecosystem.
                        I love working on smooth animations, engaging transitions, and complex layouts that transform
                        user experiences from meh to mesmerizing ✨
                        <br /><br />
                        Off duty, my passion for creativity fuels my development work. I explore smartphone photography, 
                        kinetic typography, motion graphics, and generative design, constantly expanding my technical 
                        skills and integrating innovative visual and digital arts solutions into my coding projects.
                        <br /><br />

                        Away from the screen, you might catch me pumping iron at the nearest gym, scribbling doodles
                        on every scrap of paper, or ruling the kitchen as the supreme queen of baking yum yums 🧁.
                        <br /><br />
                        I've been a freelance designer since 2019, now seeking full-time dev roles or project collaborations that
                        challenge my coding and design skills.
                        <br /><br />
                        For inquiries or opportunities, please contact me at 
                        <span className='text-zinc-50 ml-1'>info@trishramos.com</span>. .                     
                    </div>
                </div> */}
            </div>

            
        </section>
    )
}

export default About;
