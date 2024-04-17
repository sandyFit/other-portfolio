import React, { useEffect, useState } from 'react';
import Cursor from '../../components/ui/Cursor';
import { HiArrowDownLeft } from 'react-icons/hi2';

const WhaIDo = () => {
    
    const [isActive, setIsActive] = useState(false);

    return (
        <section data-cursor-color='#8b5cf6' id="me"
            className='w-full min-h-screen relative flex justify-center bg-pink-200'>
            <Cursor isActive={isActive} />

            <article className="w-full h-screen flex flex-col justify-start relative pt-40 mr-40 px-16">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-skyIce-500 fontTitle text-xl font-[500] uppercase tracking-wide pl-44'>
                        [ what i do ]
                    </p>

                    <p className='pr-8 about-text-mayus text-skyIce-500  title'>                       
                        i thrive 
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-500  title">                 
                    on crafting pixel-perfect       
                </p>
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus text-skyIce-500  mt-[-3rem] title">                 
                    digital products.        
                </p>

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[43rem]">                   
                    <p className="text-3xl text-skyIce-500 font-[100]">
                        
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts. 
                    </p>
                     <div className="text-3xl text-skyIce-500 font-[600] relative">
                        My Toolkit:
                        <ul className='text-2xl font-[100] mt-2'>
                            <li>HTML / CSS / JAVASCRIPT / TYPESCRIPT</li>
                            <li>REACT.JS / GSAP / WEBGL / SASS / THREE.JS</li>
                            <li>NODE.JS / EXPRESS / NEXT.JS / MYSQL / SUPABASE</li>
                            <li>PHOTOSHOP / ILLUSTRATOR / AFTER EFFECTS / FIGMA</li>
                            <li>WEBFLOW / AWS / PRISMIC.IO / DATOCMS / STORYBOOK</li>
                        </ul>
                                             
                    </div>
                </div>
            </article>

            <div className="">
                <HiArrowDownLeft className='text-[8rem] text-skyIce-500 absolute right-[96rem] top-[43.6rem]'/>
            </div>  


        </section>
    )
}

export default WhaIDo