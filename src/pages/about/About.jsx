import React, { useState } from 'react'
import Cursor from '../../components/ui/Cursor';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';


const About = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section data-cursor-color='#7c3aed' id="about"
            className='w-full min-h-screen relative bg-pink-300'>
            <Cursor isActive={ isActive }/>
            <article className="w-full h-screen flex flex-col justify-start items-start relative pt-40 px-36 ">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20'>
                        [ who i am ]
                    </p>

                    <p className='pr-8 about-text-mayus'>                       
                           a graphic 
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus">                 
                    designer and self-taught frontend developer.        
                </p>

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[40rem]">                   
                    <p className="text-3xl text-zinc-950">
                        
                        I went to school for graphic design, and, driven by my passion for all things digital,
                        embarked on a self-taught journey to broaden my expertise into web development, specializing
                        in frontend and motion graphics.
                    </p>
                    <div className="text-3xl text-zinc-950 relative">
                        I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                        stoke my passion for design and development. <br/>
                        For questions or opportunities contact me 
                        <Link to='projects'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span>
                            <BsArrowUpRight className='absolute top-[6.8rem] left-[42.4rem]' />
                        </Link>
                    </div>
                </div>
            </article>

            <article className="w-full h-screen flex flex-col items-center bg-hotpink-400 pt-40 mx-auto px-36">
                <div className="w-[96%] flex justify-between ">
                    <p className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20'>
                        [ what i do ]
                    </p>

                    <p className='about-text-mayus pr-12'>
                        I thrive 
                    </p>

                </div>

                <div className="w-[96%] h-full flex ml-8 flex-col px-12">
                    <p className='about-text-mayus'>
                        on crafting pixel-perfect digital products.
                    </p>
                </div>

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[35rem] ">                   
                    <p className="text-3xl text-zinc-950">
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts using SCSS.
                        
                    </p>
                    <div className="text-3xl text-zinc-950 relative">
                        My toolkit includes JavaScript, React and Webflow, complemented by AWS, DatoCMS,
                        GSAP, After Effects, Framer-Motion, Vite, and Webpack.<br/> <br/>
                        Additionally, I leverage no-code platforms such as Webflow and Framer.
                        Check out my work
                        <Link to='projects'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span> <BsArrowUpRight className='absolute top-[11.3rem] left-[29.2rem]' />
                        </Link>
                        
                    </div>
                </div>
            </article>
            
        </section>
    )
}

export default About;
