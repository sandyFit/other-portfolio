import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";
import { Link } from 'react-scroll';

const Footer = () => {
    const date = new Date;

    return (
        <section id='contact' className='w-full h-[90px] flex '>        
            <div className="flex w-full h-full justify-between items-center mx-8">

                <div className="flex justify-center items-end  pt-8 ">
                    <p className='text-zinc-950 fontTitle text-xl font-[500] uppercase'>
                        open to full-time roles & gigs
                    </p>
                </div>

                <div className="flex text-[5rem] fontTitle uppercase  ">
                    <AiOutlineCopyright className='text-[5rem] mt-3'/>
                    {date.getFullYear()}
                    <span className='ml-4'>trish ramos</span>
                </div>

                   
                
            </div>
        </section>
    )
}

export default Footer