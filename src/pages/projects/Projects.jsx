import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import SectionBar from '../../layout/SectionBar';


const Projects = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section id="projects"
            className='w-full min-h-screen bg-purple-200 flex relative '>

            <div className="font-[500] text-violet-600">
                <SectionBar section={'gallery'}/>      
            </div>
            
            {/* <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-20 left-80' /> */}
            <Cursor isActive={isActive} />
            <article className="w-[80%] pt-32 pl-16 mx-24 ">

                <div className="flex flex-col relative">

                    <span className='text-left med-title ' >
                        <TextShimmerEffect text="A Glimpse into my projects" />
                    </span>
                    <div className='w-3 h-3 bg-violet-500 absolute top-[10.6rem] right-[34rem]'></div>
                    <p className='w-[54%] text-small-purple indent-8 absolute -right-16 top-40'>

                        Each crafted for optimal performance and user engagement using technologies like
                        SCSS, JavaScript, ReactJS, NextJS, and REST APIs, hosted on AWS and Vercel.<br/>
                        My focus on design fidelity and technical precision ensures each project is visually appealing
                        and functionally robust.
                    </p>
                </div>
            
            </article>

            <div className="up-button"
            >
                up
            </div>    
        </section>
    );
}

export default Projects;
