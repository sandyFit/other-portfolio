import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import TimeZone from '../components/ui/TimeZone';

const Navbar = () => {

    const location = useLocation();

    useEffect(() => {
        // This logs the current path whenever the location changes
        const path = location.pathname.replace('/', ''); // Remove the leading slash
        console.log("Current path:", path); // Debugging
    }, [location]);

    return (
        <section className='w-full h-[120px] absolute top-0 '>
        <div className="flex w-full h-[60px] bg-hotpink-400 border-b-[3px] border-dotted border-zinc-900">
            <div className="flex justify-center items-center w-full relative mx-8">  
                <div className="flex justify-start items-center w-[30%]">
                    <div className="flex w-2 h-4 bg-zinc-900 mr-2"></div>
                    <span className='text-zinc-200 fontTitle text-xl font-[500] uppercase'>trish ramos</span>
                </div>
                <div className="flex justify-center items-center w-[40%]">
                    <p className='text-zinc-200 fontTitle text-xl font-[500] uppercase'>
                        open to full-time roles & gigs
                    </p>    
                </div>
                <div className="flex justify-end items-center w-[30%]">
                    <TimeZone/>
                </div>
            </div> 
        </div>
        <div className="flex w-full h-[60px] justify-between items-center ">
            <div className="flex w-full">
                <div className='flex w-full mt-32'>           
                    <ul className='w-full flex flex-col justify-between items-end bg-transparent gap-2 pr-6'>
                        {['about', 'projects', 'resume', 'contact'].map((item, index) => (
                            <li className='text-zinc-900 fontTitle text-xl font-[500] 
                                        px-2 uppercase tracking-wide nav-link' key={index}>
                                <Link to={item}>
                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </Link>
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
