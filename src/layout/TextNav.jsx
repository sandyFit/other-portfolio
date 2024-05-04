import React, { useState } from 'react'
import { Link } from 'react-scroll';
import Cursor from '../components/ui/Cursor';

const TextNav = () => {

    const [isActive, setIsActive] = useState(false);


    return (
        <section 
            className='w-full h-[60px] absolute top-0 z-20 flex justify-end mt-10 pr-12'>
            <Cursor isActive={isActive} />          
            <div className="flex ">
                <div className="flex w-full ">
                    <div className='flex w-[26rem] h-12'>       
                        <ul className='w-full flex justify-between items-center rounded-full border 
                        border-violet-500 px-12'>
                            {['about', 'contacts', 'resume'].map((item, index) => (
                                <li key={index}>               
                                    <button onMouseOver={() => { setIsActive(true) }}
                                        onMouseLeave={() => { setIsActive(false) }}
                                        className="group relative capitalize">
                                    
                                        <Link to={item}
                                            className="relative inline-flex overflow-hidden text-buttons text-zinc-50">
                                            <div className="translate-y-0 skew-y-0 transition duration-500 
                                            group-hover:-translate-y-[110%] 
                                                group-hover:skew-y-12">
                                                {item}
                                            </div>
                                            <div className="absolute translate-y-[110%] skew-y-12 transition 
                                            duration-500 group-hover:translate-y-0 
                                                group-hover:skew-y-0 text-violet-400">
                                                {item}
                                            </div>
                                        </Link>                              
                                    </button>
                                </li>
                            ))}                           
                        </ul>
                    </div>
                </div>  
            </div>      
        </section>
    )
}

export default TextNav;
