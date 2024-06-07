import React, { useState } from 'react';
import Cursor from './Cursor';
import { Link } from 'react-scroll';

const links = [
    { name: 'index' },
    { name: 'work' },
    { name: "info" },
    { name: "cv" },
    
];

const formatLinkName = (name) => name.replace(/-/g, ' ');

const SiteLink = ({ name }) => (
    <Link
        to={name}
        smooth={true}
        duration={500}
        className="group relative overflow-hidden text-xxsmall-white cursor-pointer"
    >
        <span className="relative inline-flex">
            {formatLinkName(name).split('').map((char, index) => (
                <span
                    key={index}
                    className={`duration-700 [transition-delay:${index * 0.02}s] group-hover:[transform:rotateY(360deg)] 
                    group-hover:text-violet-500`}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    </Link>
);

const Sitemap = () => {


    return (
        <div className="flex w-full">
            <ul className="w-full flex uppercase justify-between items-start  gap-2"
            >
                {links.map(({ name }) => (
                    <li key={name} className=''>
                        <SiteLink name={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sitemap;
