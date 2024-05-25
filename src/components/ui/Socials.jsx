import React, { useState } from 'react';
import Cursor from './Cursor';
import PropTypes from 'prop-types';

const socialLinks = [
    { name: 'linkedin', url: 'https://www.linkedin.com/feed/' },
    { name: 'github', url: 'https://github.com/sandyFit' },
    { name: 'instagram', url: 'https://instagram.com' },
    { name: 'behance', url: 'https://behance.com' },
];

const SocialLink = ({ name, url }) => {
    // Check if name is a string and not undefined or null
    const splitName = typeof name === 'string' ? name.split('') : [];
    return (
        <a href={url} className="group relative overflow-hidden text-zinc-400">
            <span className="relative inline-flex">
                {splitName.map((char, index) => (
                    <span
                        key={index}
                        className={`duration-700 [transition-delay:${index * 0.02}s] group-hover:[transform:rotateY(360deg)] 
                        group-hover:text-violet-500`}
                    >
                        {char}
                    </span>
                ))}
            </span>
        </a>
    );
};

SocialLink.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

const Socials = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-col title-xsmall mt-8">
            <Cursor isActive={isActive} />
            <div className="title-xsmall pb-1">Socials</div>
            <ul
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                className="w-full flex flex-col text-xxsmall justify-between items-start bg-transparent gap-2"
            >
                {socialLinks.map(({ name, url }) => (
                    <li key={name}>
                        <SocialLink name={name} url={url} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Socials;
