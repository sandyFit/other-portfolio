import React from 'react';
import projects from '../data/projects';

const ProjectsList = () => {
    return (
        <section
            id="projects-list"
            data-cursor-color="#d946ef"
            className="w-full mt-20 flex flex-col justify-center items-start bg-zinc-950 relative"
        >
            <ul className="flex flex-col relative w-full">
                {projects.map((project, index) => (

                    <li key={index} className="relative pb-16">
                        <div className="absolute left-0 top-0 w-full h-[1px] bg-violet-500 transition-all duration-[var(--duration)] ease-[var(--ease)]" ></div>
                        
                        <div className="flex w-full cursor-pointer">
                            <div className="flex relative">
                                <svg width="6rem" height="5rem" viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="0,0 60,0 60,50 15,50 0,34" style={{ fill: '#8b5cf6', stroke: 'none', strokeWidth: 1 }} />
                                </svg>

                                <div className="flex xsm-title-w absolute left-[2.4rem] top-2">
                                    {project.id}
                                </div>
                            </div> 
                            <div className="w-full flex justify-between pt-[1.375rem]">
                                <div className="w-[50vw] flex justify-start">
                                    <div className="flex w-full pl-5 pr-[9.5rem] xsm-title">
                                        {project.title}
                                    </div>
                                </div>

                                <div className="flex flex-col justify-end w-full max-w-[42vw]">                                
                                    <p className="w-full text-xsmall" dangerouslySetInnerHTML={{ __html: project.description }} />
                                    <h4 className="text-xsmall-white mt-6">Technologies:</h4>
                                    <p className="text-xsmall" dangerouslySetInnerHTML={{ __html: project.technologies }} />
                                </div>
                                
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsList;
