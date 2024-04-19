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
        <section data-cursor-color='#f9a8d4' id="contact"
            className='w-full h-screen relative bg-skyIce-300'>
            {/* <hr className='w-[84%] border-t-[1px] border-skyIce-900 absolute left-36 top-16'/> */}

                <MotionText
                    text1={'who i am'}
                />
            <div className="flex flex-col gap-7 items-start ml-36 mt-24 pb-12">

                <div className='w-[70%] about-text-mayus leading-[75px] relative'>
                    graphic designer<br/>
                    <span className='text-pink-50 font-playfair italic lowercase absolute bottom-[5.1rem]'>and</span>
                    <span className='ml-40'>self-taught</span><br />
                    <span className=''>frontend developer</span> 

                </div>
                <p className='array-text-light text-sm w-[50%] ml-[30rem] mt-4'>
                    Hello, I'm Trish, 
                    I went to school for graphic design, and, driven by my passion for all things digital,
                    embarked on a self-taught journey to broaden my expertise into web development, specializing
                    in frontend and motion graphics.
                </p>
                <div className="array-text-light text-sm w-[50%] ml-[30rem] relative">
                        I'm currently on the lookout for full-time roles or project-based collaborations that
                        challenge my skills and stoke my passion for design and development. <br/>
                        For questions or opportunities, please feel free to contact me
                        <Link to='contact'

                            className='hover:text-zinc-200'>
                            <span className='ml-2 custom-link'>here</span>
                            <BsArrowUpRight className='absolute top-[4.75rem] left-[41.8rem]' />
                        </Link>
                    </div>
            </div>
             <div className="relative">
                <HiArrowDownLeft className='text-[8rem] text-pink-50 absolute bottom-6 left-36'/>
            </div>  

            <hr className='w-[80%] border-t-[1px] border-skyIce-900 absolute left-36'/>
            
        </section>
    )
}

export default About;
