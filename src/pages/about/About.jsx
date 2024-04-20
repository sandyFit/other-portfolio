import React, { useState, useEffect } from 'react'
import Cursor from '../../components/ui/Cursor';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Menu from '../../layout/Menu';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowDownLeft } from 'react-icons/hi2';
import MotionText from '../../components/ui/MotionText';

const About = () => {

    gsap.registerPlugin(ScrollTrigger);

    const [isActive, setIsActive] = useState(false);


    return (
        <section data-cursor-color='#f9a8d4' id="about-me"
            className='w-full min-h-screen relative bg-zinc-900'>
            
            <hr className='w-[86%] border-t-[1px] border-zinc-700 absolute -top-24 left-28'/>
            <div className="flex justify-center items-end mt-52 mx-32">
                <div className='w-[50%] about-text-mayus text-zinc-50 relative'>
                    graphic designer<br/>
                    <span className='text-skyIce-300 font-playfair italic lowercase absolute bottom-[17.5rem]'>and</span>
                    <span className='ml-48'>self-<br/>taught</span><br/>
                    <span className=''>frontend developer</span> 

                </div>
                <div className="w-[80%] flex flex-col justify-start text-small-min items-end pl-48">
                    <p className=''>
                        Hello, I'm Trish, 
                        I went to school for graphic design, and, driven by my passion for all things digital,
                        embarked on a self-taught journey to broaden my expertise into web development, specializing
                        in frontend and motion graphics.
                    </p>
                    <div className="mt-6 relative">
                        I'm currently on the lookout for full-time roles or project-based collaborations that
                        challenge my skills and stoke my passion for design and development. <br/>
                        For questions or opportunities, please feel free to reach me out at
                        <span className='text-zinc-50 ml-1'>hello@trishramos.com</span>.
                        
                    </div>
                </div>
            </div>
             {/* <div className="relative">
                <HiArrowDownLeft className='text-[8rem] text-pink-50 absolute bottom-6 left-36'/>
            </div>   */}

            
        </section>
    )
}

export default About;
