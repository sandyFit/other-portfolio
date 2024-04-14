import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-scroll'
import FeatureParagraph from '../../components/featured/FeatureParagraph';


const About = () => {
    return (
        <section id="about"
            className='w-full min-h-screen relative bg-pink-300'>
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
                        
                        After a diploma in graphic design and driven by my passion for all things digital, I embarked on
                        a self-taught journey to broaden my expertise into web development, specializing in frontend
                        and motion.
                    </p>
                    <p className="text-3xl text-zinc-950">
                        I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                        stoke my passion for design and development. 
                        
                    </p>
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

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[35rem]">                   
                    <p className="text-3xl text-zinc-950">
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts using SCSS.
                        
                    </p>
                    <p className="text-3xl text-zinc-950">
                        My toolkit includes JavaScript, React and Webflow, complemented by AWS, DatoCMS,
                        GSAP, After Effects, Framer-Motion, Vite, and Webpack.<br/> <br/>
                        Additionally, I leverage no-code platforms such as Webflow and Framer.
                        
                    </p>
                </div>
            </article>
            
        </section>
    )
}

export default About;
