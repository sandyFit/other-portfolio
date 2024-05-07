import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import SectionBar from '../../layout/SectionBar';


const Projects = () => {

    const [isActive, setIsActive] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const show = window.scrollY > 700;
        setShowButton(show);
    };

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section id="projects" corner-cut='all'
            className='w-full min-h-screen bg-purple-200 flex relative rounded-[10px] '>

            <div className="font-[500] text-violet-600 pt-16">
                <SectionBar section={'gallery'}/>      
            </div>
            
            <Cursor isActive={isActive} />
            <article className="flex justify-center relative pt-32 ">

                <div className="flex flex-col relative">

                    <span className='text-left reg-title'>
                        A Glimpse into my projects
                    </span>

                    <div className="flex justify-between gap-10 mt-10">
                        <div className="w-[45%] flex">
                            <div className="flexw-40 w-72 h-96 bg-zinc-900 "></div>
                        </div>
                        <div className="w-[48%] flex flex-col gap-6 justify-start relative">
                            <div className='w-3 h-3 bg-violet-500 absolute top-[.6rem] right-[39.2rem]'></div>
                            <p className='w-full flex text-small-purple  text-zinc-400  indent-8'>
                                Each crafted for optimal performance and user engagement using technologies like
                                SCSS, JavaScript, ReactJS, NextJS, and REST APIs, hosted on AWS and Vercel.<br/>
                                My focus on design fidelity and technical precision ensures each project is visually appealing
                                and functionally robust.
                            </p>
                        </div>
                    </div>
                </div>
            
            </article>

            <button 
                style={{ display: showButton ? 'block' : 'none' }}
                className="up-button"
                onClick={() => window.scrollTo(0, 0)}
            >
                up
            </button>   
        </section>
    );
}

export default Projects;
