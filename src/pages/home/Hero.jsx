import React from 'react'
import { BsArrowRight, BsAsterisk } from 'react-icons/bs';
import Logo from '../../components/ui/Logo';


const Hero = () => {
    return (
        <section id="hero"
            className='w-full min-h-screen overflow-hidden bg-hotpink-400'>

            <div className="w-full flex flex-col text-[9.9rem] fontTitle font-[500] text-zinc-950 leading-[120px]
                uppercase justify-center ml-28 pt-72 overflow-hidden tracking-tighter relative">
                <h1 className=' textSlidingLeft'>frontend </h1><br/>
                <span className='ml-[30rem] mt-[-6.5rem] textSlidingLeft text-zinc-200'>developer</span><br/>
                <span className=' ml-[30rem] mt-[-6.5rem] textSlidingRight'>with an </span>
                <span className='absolute bottom-[9rem] text-zinc-200 left-[73rem] font-marckScript lowercase 
                    text-[12rem] font-[100] z-10'>
                    eye</span>
                <span className='ml-[48rem] mt-2 textSlidingRight'>for design_</span> 
                
            </div>

            <div className="w-[40%] flex flex-col justify-start items-start h-full textSlidingLeft relative ">                                              
                <div className="flex w-[500px] h-72 justify-center items-center bg-zinc-900 bg-opacity-30 absolute bottom-20"></div> 
                <div className="flex w-[320px] h-[340px] z-20 absolute bottom-8 left-48">
                    <img src="/me-bn.png" alt="Trish Avatar"/>
                </div>                       
                                      
            </div>  
         
        </section>
    )
}

export default Hero