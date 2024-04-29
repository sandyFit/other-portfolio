import React, { useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2';
import { Link } from 'react-scroll';
import Cursor from '../components/ui/Cursor';
import { AiOutlineCopyright } from "react-icons/ai";



const TextNav = () => {

    const [isActive, setIsActive] = useState(false);


    return (
        <section 
            className='w-full h-[60px] absolute top-0 z-20 flex justify-end mt-10 pr-12'>
            <Cursor isActive={isActive} />
            
           

            <div className="flex w-[28rem] ">
                <div className="flex w-full ">

                    <div className='flex w-full h-12'>           
                        <ul className='w-full flex justify-between items-center rounded-full border border-zinc-500 px-8'>
                            <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                                className="group relative w-52 text-cyan-400">
                                <Link to='projects'
                                    className="relative inline-flex overflow-hidden font-syne text-xl">
                                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                                        group-hover:skew-y-12">
                                        Projects
                                    </div>
                                    <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 
                                        group-hover:skew-y-0 text-zinc-50 ">
                                        Projects
                                    </div>
                                </Link>                              
                            </button>

                            <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                                className="group relative w-52 text-cyan-400">
                                <Link to='about'
                                    className="relative inline-flex overflow-hidden font-syne text-xl">
                                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                                        group-hover:skew-y-12">
                                        About
                                    </div>
                                    <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 
                                        group-hover:skew-y-0 text-zinc-50 ">
                                        About
                                    </div>
                                </Link>
                            </button>

                            <button onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}
                                className="group relative w-52 text-cyan-400">
                                <Link to='contact'
                                    className="relative inline-flex overflow-hidden font-syne text-xl">
                                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] 
                                        group-hover:skew-y-12">
                                        Say Hello
                                    </div>
                                    <div className="absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 
                                        group-hover:skew-y-0 text-zinc-50 ">
                                        Say Hello
                                    </div>
                                </Link>
                            </button>
                        </ul>
                    </div>

                </div>  
            </div>

            {/* <div className="flex flex-col text-3xl fontTitle text-zinc-500">
                    <div className="flex">
                        <AiOutlineCopyright className='text-3xl mt-[2px]'/>
                        {date.getFullYear()} 
                    </div>                   
                </div> */}
            
           
        </section>
    )
}

export default TextNav