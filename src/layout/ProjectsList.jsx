import React, { useEffect } from 'react';
import projects from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ProjectsList = () => {

    // gsap.registerPlugin(ScrollTrigger);

    // useEffect(() => {
    //     const projectsContainer = document.querySelector('.projects');
    //     const preview = document.querySelector('.preview');
    //     const previewImg = document.querySelector('.preview-img');

    //     let isInside = false;

    //     const bgPositions = {
    //         p1: '0 0',
    //         p2: '0 25%',
    //         p3: '0 50%'
    //     };

    //     const moveStuff = e => {
    //         const mouseInside = isMouseInsideContainer(e);

    //         if (mouseInside !== isInside) {
    //             isInside = mouseInside;
    //             if (isInside) {
    //                 gsap.to(preview, { scale: 1, duration: 0.3 });
    //             } else {
    //                 gsap.to(preview, { scale: 0, duration: 0.3 });
    //             }
    //         }
    //     };

    //     const moveProject = e => {
    //         const previewRect = preview.getBoundingClientRect();
    //         const offsetX = previewRect.width / 2;
    //         const offsetY = previewRect.height / 2;

    //         preview.style.left = `${e.pageX - offsetX}px`;
    //         preview.style.top = `${e.pageY - offsetY}px`;
    //     };

    //     const moveProjectImg = project => {
    //         const projectId = project.id;
    //         gsap.to(previewImg, { backgroundPosition: bgPositions[projectId] || '0 0', duration: 0.4 });
    //     };

    //     const isMouseInsideContainer = e => {
    //         const containerRect = projectsContainer.getBoundingClientRect();

    //         return (
    //             e.pageX >= containerRect.left &&
    //             e.pageX <= containerRect.right &&
    //             e.pageY >= containerRect.top &&
    //             e.pageY <= containerRect.bottom
    //         );
    //     };

    //     window.addEventListener('mousemove', moveStuff);

    //     Array.from(projectsContainer.children).forEach((project, index) => {
    //         project.id = `p${index + 1}`;
    //         project.addEventListener('mousemove', moveProject);
    //         project.addEventListener('mouseenter', () => moveProjectImg(project));
    //     });

    //     return () => {
    //         window.removeEventListener('mousemove', moveStuff);
    //         Array.from(projectsContainer.children).forEach((project) => {
    //             project.removeEventListener('mousemove', moveProject);
    //             project.removeEventListener('mouseenter', () => moveProjectImg(project));
    //         });
    //     };
    // }, []);

    return (
        <section
            id="projects-list"
            data-cursor-color="#d946ef"
            className="w-full mt-20 flex flex-col justify-center items-start bg-zinc-950 relative"
        >
            
            <ul className="flex flex-col relative w-full projects">
                {projects.map((project, index) => (
                    <li key={index} className="relative pb-16">
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
                            <div className="w-full flex justify-between pt-[1.375rem]">
                                <div className="w-[46vw] flex justify-start">
                                    <div className="flex w-full pl-5 pr-[9.5rem] xsm-title z-[3]">
                                        {project.title}
                                    </div>
                                </div>
                                <img src="/img/radiant.jpg" alt="Radiant Website"
                                    className='w-[20vw] fixed top-20 left-[32%]' />
                                <div className="flex flex-col justify-end w-full max-w-[42vw] ">
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
