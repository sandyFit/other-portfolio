import React, { useEffect, useState } from 'react';
import Cursor from '../../components/ui/Cursor';

const WhaIDo = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <section data-cursor-color='#8b5cf6' id="about"
            className='w-full min-h-screen relative bg-[#F54449] '>
            <Cursor isActive={isActive} />

            <article 
                className="w-full flex flex-col items-center pt-40 mx-auto px-36">
                <div className="w-[96%] flex justify-between ">
                    <p className='text-[#FFD9EA] fontTitle text-xl font-[500] uppercase tracking-wide pl-20'>
                        [ what i do ]
                    </p>

                    <p onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        className='about-text-mayus text-[#FFD9EA]  pr-12 title'>
                        I thrive 
                    </p>

                </div>

                <div className="w-[96%] h-full flex ml-8 flex-col px-12">
                    <p onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        className='about-text-mayus text-[#FFD9EA]  title'>
                        on crafting pixel-perfect 
                    </p>
                    <p onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        className='about-text-mayus text-[#FFD9EA]  title'>
                        digital products.
                    </p>
                </div>

                <div className="flex flex-col w-[58%] gap-8 mt-16 pb-28 ml-[35rem] ">                   
                    <p className="text-3xl text-[#FFD9EA] font-[100]">
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts. 
                        
                    </p>
                    <div className="text-3xl text-[#FFD9EA] font-[600] relative">
                        My Toolkit:
                        <ul className='text-2xl font-[100] mt-2'>
                            <li>HTML / CSS / JAVASCRIPT / TYPESCRIPT</li>
                            <li>REACT.JS / GSAP / WEBGL / SASS / THREE.JS</li>
                            <li>NODE.JS / EXPRESS / NEXT.JS / MYSQL / SUPABASE</li>
                            <li>PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / FIGMA</li>
                            <li>WEBFLOW / AWS / PRISMIC.IO / DATOCMS / STORYBOOK</li>
                        </ul>
                        
                        

                        {/* <Link to='projects'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200 '>
                            <span className='ml-2 mt-4'>
                                here
                            </span>
                            <BsArrowUpRight className='absolute top-[11.3rem] left-[29.2rem]' />
                        </Link>  */}
                        
                    </div>
                </div>
            </article>
            
        </section>
    )
}

export default WhaIDo