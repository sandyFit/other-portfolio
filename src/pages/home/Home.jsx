import React from 'react'
import Hero from './Hero'
import Contact from '../contact/Contact';
import About from '../about/About';


const Home = () => {
    return (
        <div>

            <section id='home'>
                <Hero />
            </section>
            {/* <section id='t'>
                <Transition />
            </section> */}
            <section id='about'>
                <About />
            </section>
            <section id='contact' className='relative'>
                <Contact/>   
            </section>
            
        </div>
    )
}

export default Home