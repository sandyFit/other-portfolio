import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Transition4 = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none none',

                scrub: true
            }
        });

        // Ensure elements start hidden and then fade in
        gsap.set([textRef.current, imageRef.current], { opacity: 0 });
        tl.fromTo(sectionRef.current, { scale: 0.5 }, { scale: 1, duration: 1.5, ease: 'power3.out' });
        tl.to([textRef.current, imageRef.current], { opacity: 1, duration: 1.5, ease: 'power3.out' }, "<");

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    return (
       <section ref={sectionRef} id="t3" className='w-full min-h-screen flex justify-center items-center relative'>
            <div className="w-[90%] h-[40rem] rounded flex flex-col justify-center items-center transition-transform">
                <div ref={textRef}
                    className='text-[10rem] flex flex-col'>                    
                    <h1 className='flex flex-col text-center bigger-title'>                       
                        my journey
                    </h1>
                    <hr className='w-full border-[1px] border-zinc-500 mt-[-3rem]' />
                    <p className='med-title text-center'>from pixels to code</p>

                </div>
                
            </div>
        </section>
    );
        
}

export default Transition4