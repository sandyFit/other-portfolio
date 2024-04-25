import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import SectionBar from '../../layout/SectionBar';




const Projects = () => {
    

    const [isActive, setIsActive] = useState(false);

    return (
        <section id="projects"
            className='w-full min-h-screen bg-petal-200 flex justify-center items-start relative pt-32'>

            <div className="font-[500]">
                <SectionBar section={'works'}/>      
            </div>
            
            {/* <hr className='w-[60%] border-t-[1px] border-zinc-600 absolute top-20 left-80' /> */}
            <Cursor isActive={isActive} />
            <article className="w-[80%] text-left text-title text-zinc-950 pl-16  ">
                    <div>
                        <div className="flex flex-col">
                        <span className='' >
                                <TextShimmerEffect text="here are some of my"/>
                                </span>
                        <span className=' ' >
                                <TextShimmerEffect text='selected demo projects'/>
                                </span>
                        </div>
                        
                </div>
            
            </article>
        </section>
    );
}

export default Projects;
