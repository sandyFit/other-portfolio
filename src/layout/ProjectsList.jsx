import React, { useState } from 'react';
import projects from '../data/projects';
import '../assets/css/borders.css';
import SeeMore from '../components/buttons/SeeMore';
import BottomLeftOutlineBtn from '../components/buttons/BottomLeftOutlineBtn';
import TopRightOutline from '../components/buttons/TopRightOutline';

const ProjectsList = () => {
    const [openProjectIndex, setOpenProjectIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenProjectIndex(openProjectIndex === index ? null : index);
    };

    return (
        <section
            id="projects-list"
            data-cursor-color="#d946ef"
            className="w-full mt-12 flex bg-zinc-950 relative"
        >
            <div className="w-full flex justify-end gap-52 pb-16">
                <ul className="flex flex-col items-end relative w-[40vw] projects">
                    {projects.map((project, index) => (
                        <li key={index} className={`flex flex-grow relative pb-12 ${openProjectIndex === index ? 'expanded' : ''}`}>
                            <div className="absolute left-0 top-0 w-full h-[1px] bg-violet-500 transition-all duration-[var(--duration)] ease-[var(--ease)]"></div>
                            <div className="flex w-full cursor-pointer">
                                <div className="flex relative">
                                    <svg width="6rem" height="5rem" viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="0,0 60,0 60,50 15,50 0,34" style={{ fill: '#8b5cf6', stroke: 'none', strokeWidth: 1 }} />
                                    </svg>
                                    <div className="flex xsm-title-w absolute left-[2.4rem] top-2">
                                        {`00${index + 1}`}
                                    </div>
                                </div>
                                <div className="w-[44.6vw] flex flex-col items-start pt-[1.375rem]">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="w-full flex pl-6">
                                            <div className="flex w-full pr-[9.5rem] xsm-title z-[3]">
                                                {project.title}
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <SeeMore
                                                isOpen={openProjectIndex === index}
                                                handleToggle={() => handleToggle(index)}
                                            />
                                        </div>
                                    </div>
                                    {openProjectIndex === index && (
                                        <div className="flex flex-col">
                                            <div className="flex">
                                                <img
                                                    src="/img/hero.png"
                                                    alt="Radiant Website"
                                                    className='w-[40.6vw] bg-cover sticky top-16 left-[10%] py-[1.375rem] pl-6 z-[5]'
                                                />
                                            </div>
                                            <div className="flex flex-col justify-end w-full max-w-[45.5vw] mt-auto pl-6">
                                                <p className="w-full text-xsmall" dangerouslySetInnerHTML={{ __html: project.description }} />
                                                <h4 className="text-xsmall-white mt-6">Technologies:</h4>
                                                <p className="text-xsmall" dangerouslySetInnerHTML={{ __html: project.technologies }} />
                                            </div>
                                            <div className="w-full flex justify-end relative gap-1">
                                                <BottomLeftOutlineBtn/>
                                                <TopRightOutline/>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default ProjectsList;
