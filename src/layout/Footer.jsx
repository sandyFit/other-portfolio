import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';
import { BsHeart } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact'
            className='w-full flex justify-center items-center '>        
            <div className="flex w-full h-full justify-between items-end ml-16">
                <div className="flex flex-col">
                    <div className="flex flex-col text-logo">
                        <div className="flex">
                            <AiOutlineCopyright className='text-logo mt-4' />
                            {date.getFullYear()}
                        </div>
                        <span className='text-logo mt-[-2rem]'>trish ramos</span>       
                    </div> 

                </div>
                
                <div className="flex flex-col mb-4 relative mr-16">                  
                    <div className="flex text-[1rem] ml-auto">
                        <TimeZone/>
                    </div>

                    <p className='text-xsmall uppercase tracking-wider w-full inline-flex ml-2'>
                        made in colombia with 
                        <BsHeart className='ml-2 mt-1 text-base text-violet-400'/>
                        
                    </p>                   
                </div>

            </div>
        </section>
    )
}

export default Footer;
