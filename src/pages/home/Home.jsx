import React, { useEffect } from 'react';
import Hero from './Hero';
import Contact from '../contact/Contact';
import About from '../about/About';
import WhaIDo from '../about/WhaIDo';
import Projects from '../projects/Projects';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {    

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const sections = gsap.utils.toArray(".section");
        console.log("Sections found:", sections.length); // Check how many sections are detected

        sections.forEach((section, i) => {
            console.log("Animating section:", section.id); // Identify which section is being animated

            // Ensure initial visibility for testing
            gsap.set(section, { opacity: 1 });

            ScrollTrigger.create({
                trigger: section,
                start: "top top",  
                end: 'bottom top',
                pin: true,
                scrub: 1,
                pinSpacing: false, // This adds space for the pinned section
                
            });

            gsap.fromTo(section.children, {
                y: 50,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "bottom top",
                    toggleActions: "play none none none",
                    
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='w-full'>
            <section id='home' className=''>
                <Hero />
            </section>
            <section id='about' className=''>
                <About />
            </section>
            {/* <section id='me' className='section'>
                <WhaIDo />
            </section> */}
            <section id='projects' className=''>
                <Projects />
            </section>
            <section id='contact' className='section relative'>
                <Contact/>
            </section>
        </div>
    );
}

export default Home;
