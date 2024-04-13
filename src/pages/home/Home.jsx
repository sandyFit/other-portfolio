import React from 'react'
import Hero from './Hero'
import Contact from '../contact/Contact';
import About from '../about/About';


const Home = () => {
    return (
        <div>

            <section id='hero'>
                <Hero />
            </section>
            <section id='about'>
                <About />
            </section>
            <section id='contact'>
                <Contact/>   
            </section>
        </div>
    )
}

export default Home