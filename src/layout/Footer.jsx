import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact'
            className='w-full h-20 flex justify-center items-center px-12 py-4'>        
            <div className="flex w-full h-full justify-between text-skyIce-900 items-center">
                <div className="flex text-[5rem] fontTitle uppercase">
                    <AiOutlineCopyright className='text-[4.8rem] mt-4'/>
                    {date.getFullYear()}
                    <span className='h-20 ml-6'>trish ramos</span>
                </div> 
                
                <div className="flex flex-col justify-center items-end">
                    <p className='fontTitle text-xl font-[500] uppercase'>
                        open to full-time roles & gigs
                    </p>
                    <div className="flex ml-auto">
                        <TimeZone/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer;
