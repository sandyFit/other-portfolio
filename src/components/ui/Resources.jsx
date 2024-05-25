import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Cursor from './Cursor';

const resources = [
    { name: 'my-resume' },
    { name: 'website-info' },
];

const formatLinkName = (name) => name.replace(/-/g, ' ');

const ResourceLink = ({ name }) => (
    <Link
        to={name}
        smooth={true}
        duration={500}
        className="group relative overflow-hidden text-xxsmall cursor-pointer"
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

const Resources = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-col w-full">
            <Cursor isActive={isActive} />
            <div className="title-xsmall pb-1">Resources</div>
            <ul
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                className="w-full flex flex-col text-xxsmall justify-between items-start bg-transparent gap-2"
            >
                {resources.map(({ name }) => (
                    <li key={name}>
                        <ResourceLink name={name} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Resources;
