import React, { useState, useEffect } from 'react';
import Cursor from '../../components/ui/Cursor';
import MotionText from '../../components/ui/MotionText';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import gsap from 'gsap';


const Test = () => {

    const [isActive, setIsActive] = useState(false);
    const [showButton, setShowButton] = useState(false);
    

    const handleScroll = () => {
        const show = window.scrollY > 700;
        setShowButton(show);
    };

    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [slides, setSlides] = useState([1, 2, 1]); // Duplicate the first slide for seamless looping

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1, // Infinite loop
            defaults: { ease: "linear" }
        });

        // Target each slide for transformation
        tl.to('.slide', {
            xPercent: -100 * (slides.length - 1), // Move left by the width of all slides except one
            duration: 10,
            ease: "linear"
        });
    }, [slides.length]);


    return (
        <section id="test" corner-cut="project-slide" border-cut="footer-btm-light"
            className='w-full min-h-screen bg-violet-500 flex justify-center items-center relative '>
            
            <Cursor isActive={isActive} />
            <article 
                className="flex relative justify-center items-center ">

                <div border-cut="footer-btm-white"
                    className="w-[85vw] h-[80%] flex relative p-1">

                    <div className="flex w-full  justify-between relative p-12 border-cut-Test ">
                        <div className="w-[50%] flex flex-col">
                            <div className="flex flex-col w-full relative">       
                                <div className="flex">
                                    <h2 className='med-title mr-2 [word-spacing:0.1em]'>
                                        <TextShimmerEffect text={'Radiant dental studio'}/>
                                    </h2>
                                </div>    
                                
                                <a href='#'
                                    className='text-sm text-violet-600'>
                                    Visit Demo Project  &#129125;
                                </a>
                                                                 
                            </div>
                            <p className='text-xsmall-purple w-[90%] mt-44 '>
                                Designed and developed a clean, responsive website for a dental boutique studio. <br/>
                                Features include an online booking system, real-time appointment updates, and a user-friendly
                                interface, that ensures seamless integration of design and functionality.
                            </p>

                            <div border-cut="bottom-left-bold-purple"
                                className="flex w-[90%] justify-center items-center overflow-hidden slider-container relative py-2 mt-8">
                                <p className='text-xxsmall-purple uppercase flex-shrink-0 whitespace-nowrap'>
                                    JS &nbsp; / &nbsp; React &nbsp; / &nbsp;
                                    AOS JS &nbsp; / &nbsp; Tailwind CSS &nbsp; / &nbsp; Node JS
                                    &nbsp; / &nbsp; Unit  &nbsp; / &nbsp; AWS
                                </p>
            
                            </div>
                        </div>
                        
                        <div corner-cut="top-right"
                            className="flex h-full w-[46%] bg-violet-500 big-title ">
                            pic
                        </div>
                    </div>   
                    
                    <div className="flex"></div>
                </div>            
            </article>

            {/* <button 
                style={{ display: showButton ? 'block' : 'none' }}
                className="up-button"
                onClick={() => window.scrollTo(0, 0)}
            >
                up
            </button>    */}
        </section>
    );
}

export default Test;

