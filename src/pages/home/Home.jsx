import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Contact from '../contact/Contact';
import About from '../about/About';
import WhaIDo from '../about/WhaIDo';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from '../projects/Projects';


const Home = () => {    

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray(".section");
        console.log("Sections found:", sections.length); // Check how many sections are detected

        sections.forEach((section, i) => {
            console.log("Animating section:", section.id); // Identify which section is being animated

            // Ensure initial visibility for testing
            gsap.set(section.children, { opacity: 1, y: 0 });

            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                onEnter: () => console.log("Entering:", section.id),
                onLeave: () => console.log("Leaving:", section.id),
            });

            gsap.from(section.children, {
                y: 10,
                opacity: 0,
                duration: 0.5,
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "-100px top",
                    toggleActions: "play none none none",
                    onEnterBack: () => console.log("Entering back:", section.id),
                    onLeaveBack: () => console.log("Leaving back:", section.id),
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='w-full'>
            <section id='home' className='section'>
                <Hero />
            </section>
            <section id='about' className='section'>
                <About />
            </section>
            <section id='me' className='section'>
                <WhaIDo />
            </section>
            <section id='projects' className='section'>
                <Projects />
            </section>
            <section id='contact' className='section relative'>
                <Contact/>
            </section>
        </div>
    );
}

export default Home;
