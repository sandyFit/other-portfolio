import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';
import { BsHeart } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact'
            className='w-full flex justify-center items-center '>        
            <div className="flex w-full h-full justify-between items-end text-zinc-50 text-[3.8rem] ml-16 uppercase">
                <div className="flex flex-col">
                    <div className="flex">
                        <AiOutlineCopyright className='text-[3.8rem] mt-4'/>
                        {date.getFullYear()} 
                    </div> 
                    <div className="flex ">
                        <span className='mt-[-2rem] font-[400]'>trish ramos</span>                     
                    </div>
                </div>
                
                <div className="flex flex-col mb-4 relative mr-10">                  
                    <div className="flex text-[1rem] ml-auto">
                        <TimeZone/>
                    </div>

                    <p className='text-small-bright w-full inline-flex '>
                        made in colombia with 
                        <BsHeart className='ml-2 mt-1 text-petal-100'/>
                        
                    </p>                   
                </div>

            </div>
        </section>
    )
}

export default Footer;
