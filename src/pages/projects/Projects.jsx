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
        <section id="projects" corner-cut="project-slide"
            className='w-full min-h-screen bg-purple-200 flex relative'>
            
            <Cursor isActive={isActive} />
            <article className="flex justify-center relative pt-12 ">

                <div className="w-full h-[80%] flex flex-col relative">

                    <div 
                        className="flex w-full relative">
                        <div border-cut="top-and-bottom-purple"
                            className="flex w-full relative">
                            <p className='med-title '>1</p>
                            <p className='med-title -rotate-90'>Radiant </p>
                        </div>
                        <svg width="1.2" height="550" xmlns="http://www.w3.org/2000/svg" className='absolute left-40
                            '>
                            <line x1="1" y1="0" x2="1" y2="550" stroke="#8b5cf6" strokeWidth="1.2" />
                        </svg>
                    </div>
                    
                </div>

            
            </article>

            {/* <button 
                style={{ display: showButton ? 'block' : 'none' }}
                className="up-button"
                onClick={() => window.scrollTo(0, 0)}
            >
                up
            </button>    */}
        </section>
    );
}

export default Projects;
