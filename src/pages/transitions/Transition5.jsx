import React, { useEffect, useState } from 'react';
import { BsInfinity } from "react-icons/bs";
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
            <div className="slide-container flex items-start mt-28 ml-12">
                {slides.map((slide, index) => (
                    <div key={index} className="slide flex w-full bg-violet-500 h-80 items-center">
                        <p className='big-title2 text-zinc-50 mr-6'>design + technology =</p>
                        <div className="flex text-[8rem] w-60 h-60 bg-zinc-50 rounded-[50px] text-violet-500
                            justify-center items-center">
                            <BsInfinity />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Transition5;
