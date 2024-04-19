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

    sections.forEach((section) => {
        console.log("Animating section:", section.id);
        gsap.set(section, { opacity: 1 });

        if (section.id === 'about') {
            // Assuming you want 'About' to stay pinned until 'Contact' starts pushing it up
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: () => {
                    const contactSection = document.getElementById('contact');
                    // Calculate the end position where 'Contact' starts affecting 'About'
                    return `+=5000`;
                },
                pin: true,
                scrub: true,
                pinSpacing: false
            });
        } else if (section.id === 'me') {
            ScrollTrigger.create({
                trigger: section,
                start: "top top+=60",
                end: () => `+=${section.nextElementSibling.offsetTop - section.offsetTop - 60}`,
                pin: true,
                scrub: true,
                pinSpacing: false
            });
        } else {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: 'bottom top',
                pin: true,
                scrub: 1,
                pinSpacing: false,
            });
        }

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

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}, []);


    return (
        <div className='w-full'>
            <section id='index' className='section'>
                <Hero />
            </section>
            <section id='about' className='section'>
                <About />
            </section>
            <section id='me' className='section'>
                <WhaIDo />
            </section>
            <section id='contact' className='section relative'>
                <Contact/>
            </section>
        </div>
    );
}

export default Home;
