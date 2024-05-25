import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Cursor from '../components/ui/Cursor';
import '../assets/css/borders.css';


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

    const [isActive, setIsActive] = useState(false);


    return (
        <section 
            className='w-full h-[60px] absolute top-0 z-20 flex justify-end mt-10 pr-16'>
            <Cursor isActive={isActive} />          
            <div className="flex ">
               
                <div className="flex w-full relative">
                    <div border-cut="top-right"
                        className='flex w-[30rem] h-12 relative justify-center items-center px-[4.2rem]'>       
                        <ul 
                            onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                            className='w-full flex justify-between items-start text-xsmall-white gap-1'>
                
                            <Link to={"who's-this"} class="group relative overflow-hidden ">
                                <span class="relative inline-flex">
                                    <span class="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        W
                                    </span>
                                    <span class="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        h
                                    </span>
                                    <span class="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        o
                                    </span>
                                    <span class="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        '
                                    </span>
                                    <span class="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        s
                                    </span>
                                    <span class="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span class="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        t
                                    </span>
                                    <span class="duration-700 [transition-delay:0.16s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        h
                                    </span>
                                    <span class="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        i
                                    </span>
                                    <span class="duration-700 [transition-delay:0.16s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        s
                                    </span>
                                </span>
                            </Link>
                                        
                            <Link to={"say-hey"} class="group relative overflow-hidden">
                                <span class="relative inline-flex">
                                    <span class="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        S
                                    </span>
                                    <span class="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        a
                                    </span>
                                    <span class="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        y
                                    </span>
                                    <span class="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span class="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        H
                                    </span>
                                    <span class="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        e
                                    </span>
                                    <span class="duration-700 [transition-delay:0.14s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        y
                                    </span>                       
                                </span>
                            </Link>
                                        
                            <Link to={"say-hey"} class="group relative overflow-hidden">
                                <span class="relative inline-flex">
                                    <span class="duration-700 [transition-delay:0.02s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        R
                                    </span>
                                    <span class="duration-700 [transition-delay:0.04s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        e
                                    </span>
                                    <span class="duration-700 [transition-delay:0.06s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        a
                                    </span>
                                    <span class="duration-700 [transition-delay:0.08s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        d
                                    </span>
                                    <span class="duration-700 [transition-delay:0.10s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        &nbsp;
                                    </span>
                                    <span class="duration-700 [transition-delay:0.12s] 
                                    group-hover:[transform:rotateY(360deg)] group-hover:text-violet-500">
                                        C
                                    </span>
                                    <span class="duration-700 [transition-delay:0.14s] 
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
