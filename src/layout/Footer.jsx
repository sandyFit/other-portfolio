import React from 'react';
import TimeZone from '../components/ui/TimeZone';
import { BsHeart } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();

    return (
        <section id='contact' className='w-full flex justify-center items-center'>
            <div className="flex w-full h-full justify-between items-center">
                <div className="flex w-full justify-between ">
                    {/* Left Side */}
                    <div className="w-1/2 relative">
                        <div className='w-full text-logo'>
                        trish ramos
                        
                    </div>
                        
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 text-logo flex justify-end items-center relative">
                        <span className="text-zinc-50 text-6xl">
                            <span className='text-[3.8rem] '>&copy; </span>                           
                            <span className=''>{date.getFullYear()}</span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;
