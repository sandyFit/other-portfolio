import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';
import { BsHeart } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact'
            className='w-full h-20 flex justify-center items-center px-12 py-4'>        
            <div className="flex w-full h-full justify-between items-end text-zinc-50 text-[4rem] 
                fontTitle uppercase ">
                <div className="flex flex-col">
                    <div className="flex ">
                        <AiOutlineCopyright className='text-[4rem] mt-4'/>
                        {date.getFullYear()} 
                    </div> 
                        <span className='h-20  mt-[-2rem]'>trish ramos</span>
                </div>
                
                <div className="flex flex-col mb-2">                  
                    <div className="flex text-skyIce-300 text-[1rem] ml-auto">
                        <TimeZone/>
                    </div>

                    <p className='text-small-bright w-full inline-flex ml-12'>
                        made with 
                        <BsHeart className='mx-2 mt-1'/>
                        by yours truly
                    </p>                   
                </div>

            </div>
        </section>
    )
}

export default Footer;
