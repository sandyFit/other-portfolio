import React from 'react'

const CustomLink = ({href, text, height}) => {
    return (
        <div>
            <a href={href}
                style={{'--after-height': height}}
                className="relative text-zinc-200 after:absolute 
                after:bottom-0 after:left-0 after:right-0 after:h-[8px] after:w-full after:origin-bottom 
                after:scale-x-0 after:bg-zinc-200 after:transition-transform after:duration-300
                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 ml-5">
                    {text}
            </a>
        </div>
    )
}

export default CustomLink;
