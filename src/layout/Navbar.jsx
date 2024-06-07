import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Cursor from '../components/ui/Cursor';
import '../assets/css/borders.css';
import TimeZone from '../components/ui/TimeZone';


const links = [
    { name: "who's-this" },
    { name: 'say-hey' },
    { name: 'read-cv' },
];

const NavLink = ({ name }) => (
    <Link
        to={name}
        smooth={true}
        duration={500}
        className="group relative overflow-hidden text-zinc-400 cursor-pointer"
    >
        {name.replace(/-/g, ' ')}
    </Link>
);

const TextNav = () => {

    return (
        <section 
            className='w-full h-[30px] absolute top-0 z-20 flex justify-between px-16'>     
            <div className="w-full flex justify-between mt-8">
                <div className="flex w-full relative gap-[44rem] ">
                    <div className="flex w-full ">
                        <TimeZone/>
                    </div>

                    <div className='flex w-full relative justify-center items-center'>       
                        <ul className='w-[18vw] flex justify-between items-start text-xxsmall-white mr-12 mt-4'>               
                            <Link to={"info"} className="group relative overflow-hidden ">
                                <span className="relative inline-flex">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        i
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        n
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        f
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        o
                                    </span>
                                    
                                </span>
                            </Link>
                                        
                            <Link to={"reach-out"} className="group relative overflow-hidden">
                                <span className="relative inline-flex">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        r
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        e
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        a
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        c
                                    </span>
                                    <span className="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        h
                                    </span>
                                    <span className="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        o
                                    </span>                       
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        u
                                    </span>                       
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        t
                                    </span>                       
                                </span>
                            </Link>
                                        
                            <Link to={"cv"} className="group relative overflow-hidden">
                                <span className="relative inline-flex">
                                    <span className="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        R
                                    </span>
                                    <span className="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        e
                                    </span>
                                    <span className="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        a
                                    </span>
                                    <span className="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        d
                                    </span>
                                    <span className="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span className="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        C
                                    </span>
                                    <span className="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        V
                                    </span>                       
                                </span>
                            </Link>
                        </ul>
                    </div>
                </div>  
            </div>      
        </section>
    )
}

export default TextNav;
