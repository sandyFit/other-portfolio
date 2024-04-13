import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact' className='w-full h-[90px] flex '>        
            <div className="flex w-full h-full justify-between items-center mx-8">

                <div className="flex flex-col justify-center items-end  pt-8 ">
                    <p className='text-zinc-950 fontTitle text-xl font-[500] uppercase'>
                        open to full-time roles & gigs
                    </p>
                    <div className="flex flex-col items-end">
                        <TimeZone/>
                    </div>
                </div>

                <div className="flex text-[5rem] fontTitle uppercase ">
                    <AiOutlineCopyright className='text-[5rem] mt-3'/>
                    {date.getFullYear()}
                    <span className='ml-6'>trish ramos</span>
                </div>

                   
                
            </div>
        </section>
    )
}

export default Footer