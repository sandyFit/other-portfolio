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
                    <div className="flex text-logo">
                        <AiOutlineCopyright className='text-logo mt-4'/>
                        <span className='text-logo'>trish ramos</span>       
                    </div> 

                </div>
                
                <div className="flex flex-col mb-4 relative mr-16">                  
                    <div className="flex text-[1rem] ml-auto">
                        <TimeZone/>
                    </div>

                    <p className='text-small uppercase w-full inline-flex '>
                        made in colombia with 
                        <BsHeart className='ml-4 mt-2 text-base text-violet-400'/>
                        
                    </p>                   
                </div>

            </div>
        </section>
    )
}

export default Footer;
