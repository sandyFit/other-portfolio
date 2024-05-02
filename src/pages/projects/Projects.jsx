import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import SectionBar from '../../layout/SectionBar';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';




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

                    <span className='text-left text-title text-violet-600' >
                        <TextShimmerEffect text="cool stuff i've done" />
                    </span>
                    <p className='w-[54%] text-small-min-red indent-48 absolute -right-16 top-24'>
                        A selection of my favorite projects  —
                        each is crafted to be responsive and optimized for peak performance and user engagement.
                        Leveraging  technologies like SCSS, JavaScript, ReactJS, NextJS, and REST APIs, all deployed on AWS.
                        These projects showcase my commitment to modern web standards and efficiency. 
                    </p>
                </div>
            
            </article>
        </section>
    );
}

export default Projects;
