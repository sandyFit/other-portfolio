import React from 'react';
import TimeZone from '../components/ui/TimeZone';
import { BsHeart } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact'
            className='w-full flex justify-center items-center '>        
            <div className="flex w-full h-full justify-between items-end ml-16">
                <div className="'w-1/2 flex flex-col">
                    <div className="w-full flex flex-col">
                        <div className="'w-full text-logo flex">
                            <span className=" text-zinc-50 text-8xl mr-2 rotating-icon">
                                ⁕
                            </span>
                            <span className='mt-1'>{date.getFullYear()}</span>
                            
                        </div>
                        <div className="w-full flex relative">
                            <span className='flex w-full text-logo mt-[-2rem]'>                        
                                trish ramos                        
                            </span>       
                            <span className='flex w-full text-zinc-50 text-4xl absolute left-[24.5rem] bottom-8'>                        
                                &copy;                           
                            </span>       
                        </div>
                    </div> 

                </div>

                <hr className='border-t-[1px] border-zinc-400 w-[78%] absolute bottom-[5.5rem] right-16'/>
                
                <div className="flex flex-col mb-4 relative mr-16">                  
                    <div className="flex text-[1rem] ml-auto">
                        <TimeZone/>
                    </div>

                    <p className='text-xsmall uppercase tracking-wider w-full inline-flex ml-2'>
                        made with 
                        <BsHeart className='mx-2 mt-1 text-base text-violet-400'/>
                        in <span className='text-zinc-50 ml-1.5'> colombia</span>
                    </p>                   
                </div>

            </div>
        </section>
    )
}

export default Footer;
