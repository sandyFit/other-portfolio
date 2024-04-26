import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import SectionBar from '../../layout/SectionBar';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';




const Projects = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section id="projects"
            className='w-full min-h-screen bg-cyan-400 flex justify-center items-start relative pt-32'>

            <div className="font-[500] text-zinc-900">
                <SectionBar section={'gallery'}/>      
            </div>
            
            {/* <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-20 left-80' /> */}
            <Cursor isActive={isActive} />
            <article className="w-[80%] text-left text-title text-zinc-900 pl-16  ">
                    
                <div className="flex flex-col">
                    <span className='' >
                        <TextShimmerEffect text="Selected demo projects" />

                    </span>
                    <p className='w-[30%] text-xsmall-dark text-zinc-900 ml-[50rem] mt-12'>
                        I strive to ensure each project shines with design fidelity, optimized for peak performance and user
                        engagement, while pushing the boundaries of modern web development.
                    </p>

                </div>
                        
                
            
            </article>
        </section>
    );
}

export default Projects;
