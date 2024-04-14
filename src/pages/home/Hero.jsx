import React from 'react'
import { HiArrowDownLeft } from "react-icons/hi2";


const Hero = () => {
    return (
        <section id="hero"
            className='w-full min-h-screen'>

            <article className="w-[60%] flex flex-col text-[10rem] fontTitle font-[500] text-zinc-950 leading-[120px]
                uppercase justify-center ml-20 pt-80 tracking-tighter relative">
                <h1 className= ''>frontend </h1><br/>
                <span className='w-[60%] ml-[33rem] mt-[-6.1rem] text-zinc-200 '>developer</span><br/>
                <span className='w-[60%]  ml-[33rem] mt-[-6.1rem] '>with an </span>
                <span className='w-[20%] absolute bottom-[11.1rem] text-zinc-200 left-[76.2rem] font-tangerine lowercase 
                    text-[20rem] font-[100] '>
                    eye</span>
                <span className='w-[86%] ml-[48.08rem] mt-5 '>for design_</span>                
            </article>

            <div className="flex relative">               
                <p className='text-zinc-900 fontTitle text-xl font-[500] pb-6 uppercase tracking-wide
                    absolute left-[38.5rem] -bottom-8 '>
                    [scroll] 
                </p>
                 <HiArrowDownLeft className='text-[8rem] text-zinc-200 mb-2 absolute -bottom-7 left-[44.5rem] '/>
            </div>

            <article className="w-[40%] flex flex-col justify-start items-start h-full  relative ">                                              
                <div className="flex w-[500px] h-72 justify-center items-center bg-zinc-900 bg-opacity-30 absolute 
                    bottom-28"></div> 
                <div className="flex w-[320px] h-[340px] z-20 absolute bottom-16 left-48 ">
                    <img src="/me-bn.png" alt="Trish Avatar"/>
                </div>                       
                                      
            </article>         
        </section>
    )
}

export default Hero;
