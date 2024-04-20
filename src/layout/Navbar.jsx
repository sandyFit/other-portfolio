import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { AiOutlineCopyright } from "react-icons/ai";
import TimeZone from '../components/ui/TimeZone';
import Cursor from '../components/ui/Cursor';

const Navbar = () => {

    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const date = new Date();

    useEffect(() => {
        // This logs the current path whenever the location changes
        const path = location.pathname.replace('/', ''); // Remove the leading slash
        console.log("Current path:", path); // Debugging
    }, [location]);

    return (
        <section data-cursor-color='#f9a8d4'
            className='w-full h-[90px] absolute top-0 z-20 flex justify-between pt-4'>
            <Cursor isActive={ isActive }/>
            <div className="flex w-full h-full ">
                <div className="w-full flex text-zinc-500 text-[4rem] fontTitle uppercase pl-8">
                    <AiOutlineCopyright className='text-[3.8rem] mt-4'/>
                    {date.getFullYear()}
                    <span className='ml-6'>trish ramos</span>
                </div>                              
            </div>

            
            <div className="flex w-full h-[60px] justify-between items-center">
                <div className="flex w-full">
                    <div className='flex w-full mt-16'>           
                        <ul className='w-full flex flex-col justify-between items-end bg-transparent gap-2 pr-8'>
                            {['about-me', 'projects', 'contact'].map((item, index) => (
                                <li className='text-skyIce-300 fontTitle font-[300] 
                                        pr-1 uppercase tracking-wide hover:text-zinc-300 nav-link' key={index}
                                    onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}>
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
