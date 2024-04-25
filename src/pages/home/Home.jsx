import React, { useEffect } from 'react';
import Hero from './Hero';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects'
import About from '../about/About';
import WhaIDo from '../about/WhaIDo';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Transition3 from '../transitions/Transition3';

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
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "top top",
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
        <div>
            <section id='home' className=''>
                <Hero />
            </section>
            <section id='t3' className='section'>
                <Transition3 />
            </section>
            <section id='projects' className=''>
                <Projects />
            </section>
            <section id='contact' className='relative'>
                <Contact/>
            </section>
        </div>
    );
}

export default Home;
