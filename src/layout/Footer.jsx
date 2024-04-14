import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact' className='w-[99%] h-[80px] flex absolute bottom-0'>        
            <div className="flex w-full h-full justify-between items-center ml-12 mr-5">

                <div className="flex flex-col justify-center items-end">
                    <p className='text-zinc-950 fontTitle text-xl font-[500] uppercase'>
                        open to full-time roles & gigs
                    </p>
                    <div className="flex mr-[2.75rem]">
                        <TimeZone/>
                    </div>
                </div>

                <div className="flex text-[5rem] fontTitle uppercase">
                    <AiOutlineCopyright className='text-[4.8rem] mt-4'/>
                    {date.getFullYear()}
                    <span className='ml-6'>trish ramos</span>
                </div>

                   
                
            </div>
        </section>
    )
}

export default Footer