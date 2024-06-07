import React, { useEffect } from 'react';
import gsap from 'gsap';
import TextShimmerHero from '../../components/featured/TextShimmerHero';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../../assets/css/borders.css';
import HeroBtn from '../../components/buttons/HeroBtn';
import ScrollBtn from '../../components/buttons/ScrollBtn';

const Hero = () => {

    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 2.5, 
                delay: .5,
               
            }
        });

            tl.fromTo('.small-title',
                { opacity: 0 },
                {opacity: 1, stagger: 0.5, delay: 1.5}
            
        )
        tl.fromTo('.turning-text',
            { rotateY: '0deg' },
            {rotateY: '360deg',  ease: "power3.inOut"}
        )

        return () => tl.kill();
    }, []);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();

        tl.to('.overlay-first', { duration: 1, left: '-100%', ease: "power3.inOut" })
          .to('.overlay-second', { duration: 1, left: '-100%', ease: "power3.inOut", immediateRender: false }, "-=0.8");
    }, []);

    


     useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const heroTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#index",
                start: "top top", // Triggering as soon as it enters the top of the viewport
                end: "bottom top", // End when the bottom of the trigger hits the top of the viewport
                scrub: true, // Smooth scrubbing
                toggleActions: 'play none none reverse', // Reverse when scrolling back up
            }
        });

        // Fade out the Hero content
        heroTimeline.to('.hero-content', { opacity: 0, duration: 0.5 });

    }, []);


    return (
        <section id="index" 
            className='w-full min-h-screen flex flex-col bg-zinc-950 relative'>
            {/* <Transition />
            <Transition2 /> */}
            
             <button className="">
                <img src="/square-brackets.svg" alt="" className='absolute top-7 right-16' />
                <span className='w-[.9rem] h-[1rem] rounded bg-violet-500 absolute right-[4.376rem] top-[2rem]'></span>
            </button>   

            <div border-cut="bottom-right-black"
                className="flex flex-col mt-6 justify-center items-center">
                 <div className="w-[47.8vw] flex flex-col justify-center items-center mt-48 ">
                    <h1 className='big-title2 [word-spacing:0.1em] hero-content'>
                        <TextShimmerHero text={'trish ramos'}/>                    
                    </h1>

                    <div className='w-full flex justify-center mt-8 hero-content'>
                        <p className="title-h3 uppercase w-full ml-3">
                            Frontend developer with a designer's eye. Currently seeking job   
                            opportunities where I can innovate & collaborate.  

                                
                                
                            </p>                                            
                        </div>

                    <div className="w-full flex justify-end mt-4 px-2 relative hero-content">
                        <HeroBtn/>                                  
                    </div>                          
                </div>
            </div>
                           


            <article className="w-full flex flex-col justify-center items-center relative mt-36 hero-content">
                <div className="w-full flex flex-col justify-center items-center relative ">                      
                     <div className="w-full flex justify-between text-xxsmall uppercase px-16">
                        <span className='flex'>
                            based in <span className='text-xxsmall-white ml-1.5'> colombia</span>
                        </span>
                        <span className='flex text-xxsmall-white'>
                            [<ScrollBtn/>]
                        </span>
                        <span className='flex  text-xxsmall-white'>
                            folio <span className='text-xxsmall ml-1.5'>2024</span>
                        </span>
                    </div>                 
               </div>
                                   
            </article> 
            
        </section>
    )
}

export default Hero;
