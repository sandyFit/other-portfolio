import React, { useState } from 'react';
import Cursor from './Cursor';

const socialLinks = {
    linkedin: 'https://www.linkedin.com/feed/',
    github: 'https://github.com/sandyFit',
    instagram: 'https://instagram.com',
    behance: 'https://behance.com'
}

const SocialLinks = () => {

    const [isActive, setIsActive] = useState(false);
    
    return (
        <div className="flex flex-col title-xsmall mt-8">
            <Cursor isActive={isActive}/>
            <div className="title-xsmall pb-1">Socials</div> 
            <ul 
                onMouseEnter={() => setIsActive(true)} 
                onMouseLeave={() => setIsActive(false)}
                className='text-xxsmall space-y-2'
            >
                {Object.keys(socialLinks).map((item, index) => (
                    <div key={index}
                        onMouseOver={() => { setIsActive(true) }}
                        onMouseLeave={() => { setIsActive(false) }}                                       
                        className="group relative "
                    >
                        <a 
                            href={socialLinks[item]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative inline-flex overflow-hidden text-xxsmall uppercase tracking-wide"
                        >
                            <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-[9deg]">
                                {item}
                            </div>
                            <div className="absolute translate-y-[110%] skew-y-[9deg] transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 text-violet-400">
                                {item}
                            </div>
                        </a>                              
                </div>   
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;
