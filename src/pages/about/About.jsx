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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showFloatingBtn, setShowFloatingBtn] = useState(false);


    const handleClick = e => {
        e.preventDefault();
        console.log('Toggling menu state from:', isMenuOpen, 'to:', !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 800; // Adjust according to your layout

        if (scrollPosition > scrollThreshold ) {
            setShowFloatingBtn(true);
        } else if (scrollPosition <= scrollThreshold) {
            setShowFloatingBtn(false);
        }
    };


    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },); 


    return (
        <section data-cursor-color='#8b5cf6' id="about"
            className='w-full min-h-screen relative flex flex-col justify-center bg-pink-200'>
            <Cursor isActive={isActive} />
            <button
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onClick={handleClick}
                className={`fixed left-[106rem] top-16 z-10 ${showFloatingBtn ? '' : 'invisible'}`}
            >
                    <span 
                        className='text-skyIce-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20 nav-link'>
                        [ menu ]
                    </span>
            </button>
            {isMenuOpen && (
                <Menu
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
           
            <article className="w-full h-screen flex flex-col justify-start relative pt-40 mr-56 px-10">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-skyIce-400 fontTitle text-xl font-[500] uppercase tracking-wide pl-44'>
                        [ who i am ]
                    </p>

                    <p className='pr-44 about-text-mayus text-skyIce-400  title'>                       
                           a graphic 
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-400  title">                 
                    designer and self-taught        
                </p>
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-400  mt-[-3.5rem] title">                 
                    frontend developer.        
                </p>

                <div className="w-[54%] flex flex-col  gap-8 pb-28 ml-[43rem]">                   
                    <p className="text-3xl text-skyIce-400 font-[100]">
                        
                        I went to school for graphic design, and, driven by my passion for all things digital,
                        embarked on a self-taught journey to broaden my expertise into web development, specializing
                        in frontend and motion graphics.
                    </p>
                    <div className="text-3xl text-skyIce-400 font-[100] relative">
                        I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                        stoke my passion for design and development. <br/>
                        For questions or opportunities contact me 
                        <Link to='contact'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span>
                            <BsArrowUpRight className='absolute top-[6.8rem] left-[42.4rem]' />
                        </Link>
                    </div>
                </div>
            </article>

            <div className="">
                <HiArrowDownLeft className='text-[8rem] text-skyIce-400 absolute right-[98rem] top-[43.6rem]'/>
            </div>  

            <hr className='w-[80%] border-t-[1px] border-skyIce-400 absolute left-56'/>

            <article className="w-full h-screen flex flex-col justify-start relative pt-40 mr-56 px-10">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-skyIce-400 fontTitle text-xl font-[500] uppercase tracking-wide pl-52'>
                        [ what i do ]
                    </p>

                    <p className='pr-16 about-text-mayus text-skyIce-400  title'>                       
                        i thrive
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-400 pl-40  title">                 
                    on crafting pixel-perfect     
                </p>
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-400  mt-[-4rem]
                    pl-40 title">                 
                    digital products.        
                </p>

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[43rem]">                   
                    <p className="text-3xl text-skyIce-500 font-[100]">
                        
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts. 
                    </p>
                     <div className="text-3xl text-skyIce-500 font-[600] relative">
                        My Toolkit:
                        <ul className='text-2xl font-[100] mt-2'>
                            <li>HTML / CSS / JAVASCRIPT / TYPESCRIPT</li>
                            <li>REACT.JS / GSAP / WEBGL / SASS / THREE.JS</li>
                            <li>NODE.JS / EXPRESS / NEXT.JS / MYSQL / SUPABASE</li>
                            <li>PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / FIGMA</li>
                            <li>WEBFLOW / AWS / PRISMIC.IO / DATOCMS / STORYBOOK</li>
                        </ul>
                                             
                    </div>
                </div>
            </article>

            <div className="relative">
                <HiArrowDownLeft className='text-[8rem] text-skyIce-400 absolute left-60 bottom-24'/>
            </div>  
            
            
        </section>
    )
}

export default About;
