import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { AiOutlineCopyright } from "react-icons/ai";

const Navbar = () => {

    const location = useLocation();

    const date = new Date();

    useEffect(() => {
        // This logs the current path whenever the location changes
        const path = location.pathname.replace('/', ''); // Remove the leading slash
        console.log("Current path:", path); // Debugging
    }, [location]);

    return (
        <section className='w-full h-[90px] absolute top-0 bg-hotpink-400 '>
            <div className="flex w-full h-full justify-between  pt-4">
                <div className="w-full flex text-[5rem] fontTitle uppercase pl-8">
                    <AiOutlineCopyright className='text-[5rem] mt-3'/>
                    {date.getFullYear()}
                    <span className='ml-4'>trish ramos</span>
                </div>

                   
                <div className="flex justify-center items-center w-[29%]">
                    <p className='text-zinc-950 fontTitle text-xl font-[500] uppercase'>
                        open to full-time roles & gigs
                    </p>
                </div>
            </div>

            
            <div className="flex w-full h-[60px] justify-between items-center ">
                <div className="flex w-full">
                    <div className='flex w-full mt-20'>           
                        <ul className='w-full flex flex-col justify-between items-end bg-transparent gap-2 pr-8'>
                            {['about', 'projects', 'resume', 'contact'].map((item, index) => (
                                <li className='text-zinc-900 fontTitle text-xl font-[500] 
                                            px-2 uppercase tracking-wide nav-link' key={index}>[
                                    <Link to={item}>
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </Link>]
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>  
            </div>
            
        </section>

    )
}

export default Navbar
