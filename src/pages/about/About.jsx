import React, { useState, useEffect } from 'react'
import Cursor from '../../components/ui/Cursor';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Menu from '../../layout/Menu';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowDownLeft } from 'react-icons/hi2';

const About = () => {

    gsap.registerPlugin(ScrollTrigger);

    const [isActive, setIsActive] = useState(false);


    return (
        <section data-cursor-color='#8b5cf6' id="about"
            className='w-full min-h-screen relative flex flex-col justify-center bg-pink-200'>
            <Cursor isActive={isActive} />
                       
            <article className="w-full h-screen flex flex-col justify-start relative pt-40 mr-56 px-10">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-skyIce-400 fontTitle text-xl font-[500] uppercase tracking-wide pl-44'>
                        [ who i am ]
                    </p>

                    <p className='pr-56 about-text-mayus text-skyIce-400  title'>                       
                           a graphic 
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-400  title">                 
                    designer and self-taught        
                </p>
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-400  mt-[-6.5rem] title">                 
                    frontend developer.        
                </p>

                <div className="w-[52%] flex flex-col  gap-8 pb-40 ml-[43rem]">                   
                    <p className="text-2xl text-skyIce-400 font-[100]">
                        
                        I went to school for graphic design, and, driven by my passion for all things digital,
                        embarked on a self-taught journey to broaden my expertise into web development, specializing
                        in frontend and motion graphics.
                    </p>
                    <div className="text-2xl text-skyIce-400 font-[100] relative">
                        I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                        stoke my passion for design and development. <br/>
                        For questions or opportunities contact me 
                        <Link to='contact'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span>
                            <BsArrowUpRight className='absolute top-[4.2rem] left-[34.2rem]' />
                        </Link>
                    </div>
                </div>
            </article>

            <p className='absolute numbers left-96 top-[26.5rem]'>01</p>
            <div className="">
                <HiArrowDownLeft className='text-[8rem] text-skyIce-400 absolute right-[98rem] top-[48.6rem]'/>
            </div>  

            <hr className='w-[76.5%] border-t-[1px] border-skyIce-400 absolute left-56'/>

            <article className="w-full h-screen flex flex-col justify-start relative pt-40 mr-56 px-10">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-skyIce-400 fontTitle text-xl font-[500] uppercase tracking-wide pl-48'>
                        [ what i do ]
                    </p>

                    <p className='pr-56 about-text-mayus text-skyIce-400  title'>                       
                        i thrive
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-32 flex-col px-12 about-text-mayus text-skyIce-400 pl-16  title">                 
                    on crafting pixel-perfect     
                </p>
                <p className="w-[96%] h-full flex ml-32 flex-col px-12 about-text-mayus text-skyIce-400  mt-[-5rem]
                    pl-16 title">                 
                    digital products.        
                </p>

                <div className="flex flex-col w-[52%] gap-8 pb-40 ml-[46rem]">                   
                    <p className="text-2xl text-skyIce-400 font-[100]">
                        
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts. 
                    </p>
                     <div className="text-3xl text-skyIce-400 font-[600] relative">
                        My Toolkit:
                        <ul className='text-xl font-[100] mt-2'>
                            <li>HTML / CSS / JAVASCRIPT / TYPESCRIPT</li>
                            <li>REACT.JS / GSAP / WEBGL / SASS / THREE.JS</li>
                            <li>NODE.JS / EXPRESS / NEXT.JS / MYSQL / SUPABASE</li>
                            <li>PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / FIGMA</li>
                            <li>WEBFLOW / AWS / PRISMIC.IO / DATOCMS / STORYBOOK</li>
                        </ul>
                                             
                    </div>
                </div>
            </article>

            <p className='absolute numbers left-[23rem] top-[83.8rem]'>02</p>
            <div className="relative">
                <HiArrowDownLeft className='text-[8rem] text-skyIce-400 absolute left-60 bottom-6'/>
            </div>  
            
            
        </section>
    )
}

export default About;
