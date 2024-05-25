import React, { useState } from 'react';
import Cursor from './Cursor';

const ContactBtn = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex w-full">
            <Cursor isActive={isActive}/>
            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                className='w-full flex flex-col justify-between items-start bg-transparent gap-1'>
                
                <a class="group relative overflow-hidden text-zinc-400">
                    <span class="relative inline-flex">
                        <span class="duration-700 [transition-delay:0.02s] 
                        group-hover:[transform:rotateY(360deg)]">
                            l
                        </span>
                        <span class="duration-700 [transition-delay:0.04s] 
                        group-hover:[transform:rotateY(360deg)]">
                            i
                        </span>
                        <span class="duration-700 [transition-delay:0.06s] 
                        group-hover:[transform:rotateY(360deg)]">
                            n
                        </span>
                        <span class="duration-700 [transition-delay:0.08s] 
                        group-hover:[transform:rotateY(360deg)]">
                            k
                        </span>
                        <span class="duration-700 [transition-delay:0.10s] 
                        group-hover:[transform:rotateY(360deg)]">
                            e
                        </span>
                        <span class="duration-700 [transition-delay:0.12s] 
                        group-hover:[transform:rotateY(360deg)]">
                            d
                        </span>
                        <span class="duration-700 [transition-delay:0.14s] 
                        group-hover:[transform:rotateY(360deg)]">
                            i
                        </span>
                        <span class="duration-700 [transition-delay:0.16s] 
                        group-hover:[transform:rotateY(360deg)]">
                            n
                        </span>
                    </span>
                </a>
            </ul>
        </div>
    )
}

export default ContactBtn;
