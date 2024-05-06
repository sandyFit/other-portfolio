import React, { useEffect, useState } from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';


const SectionBar = ({section}) => {
    
    
    const date = new Date();



    return (
        <section 
            className='w-full h-[60px] absolute top-16 z-20 flex justify-between pt-4 px-16'>
             <hr className='w-[92%] border-t-[1px] border-violet-500 absolute top-0 ' /> 
            <div className="flex">
                <div className="flex text-2xl uppercase font-roboto ">
                    <span className='h-20 font-[300]'>{ section }</span>
                </div>
            </div>

            
            <div className="flex flex-col text-2xl font-roboto font-[300]">
                <div className="flex">
                    <AiOutlineCopyright className='text-2xl mt-[4px] font-[100]'/>
                    {date.getFullYear()} 
                </div>                   
            </div>

          
        
        </section>
    )
}

export default SectionBar