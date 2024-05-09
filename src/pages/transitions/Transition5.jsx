import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Transition5 = () => {
    const [slides, setSlides] = useState([1, 2]); // State to handle slides

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1, // Infinite loop
            defaults: { ease: "none" },
        });

        tl.to('.slide-container', {
            xPercent: -50, // Move by 50% of the container width
            duration: 10, // Duration of the loop in seconds
            ease: "linear",
        });
    }, []);

    return (
        <section id="t5" className='flex justify-start w-full min-h-screen overflow-hidden
            relative bg-zinc-950'>
            <div className="flex w-[66%] overflow-hidden slider-container relative pl-1 mt-6">
                {slides.map((_, index) => (
                    <div key={index} border-cut="bottom-left-bold-purple"
                        className="slide flex w-full h-10 items-center ">
                        <p className='flex flex-nowrap text-xxsmall-purple mr-6'>
                            JavaScript &nbsp; / &nbsp; React &nbsp; / &nbsp; AOS JS &nbsp; / &nbsp;
                            Tailwind CSS &nbsp; / &nbsp; Node JS &nbsp; / &nbsp; AWS

                        </p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Transition5;
