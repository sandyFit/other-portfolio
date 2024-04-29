import React, { useEffect, useState } from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';


const SectionBar = ({section}) => {
    
    
    const date = new Date();



    return (
        <section 
            className='w-full h-[60px] absolute top-6 z-20 flex justify-between pt-4 px-16'>
            
            <div className="flex">
                <div className="flex text-3xl uppercase font-inter ">
                    <span className='h-20 font-[300]'>{ section }</span>
                </div>
            </div>

            
            <div className="flex flex-col text-3xl font-inter font-[300]">
                <div className="flex">
                    <AiOutlineCopyright className='text-3xl mt-[2px] font-[100]'/>
                    {date.getFullYear()} 
                </div>                   
            </div>

           <hr className='w-[92%] border-t-[1px] border-zinc-600 absolute top-16 ' /> 
        
        </section>
    )
}

export default SectionBar