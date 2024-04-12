import React from 'react';
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    const date = new Date;

    return (
        <section id='contact' className='w-full h-[100px] flex flex-col '>
            <hr className='w-full border-t-[3px] border-dotted border-zinc-900 ' />
                <div className="flex text-[5rem] text-zinc-950 font-[400] leading-[110px] uppercase
                 w-full justify-between items-center px-8">
                    <div className="flex fontTitle">
                        <div className="flex w-6 h-[3.35rem] bg-zinc-200 mr-4 mt-6"></div>
                        <h2>Trish Ramos</h2>
                    </div>
                    <div className="flex fontTitle">
                        <AiOutlineCopyright className='text-[5rem] mt-3' />
                        {date.getFullYear()}
                    </div>

                </div>
        </section>
    )
}

export default Footer