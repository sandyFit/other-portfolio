import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck, BsCopy } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import SectionBar from '../../layout/SectionBar';


const Contact = () => {

    const [isActive, setIsActive] = useState(false);
    const [showCopiedText, setShowCopiedText] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopiedText = () => {
        const emailAddress = 'hello@trishramos.com';

        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('Email address copied to clipboard!');
            setIsCopied(true);
            setShowCopiedText(true); // Show "Copied" text
            setTimeout(() => {
                setIsCopied(false);
                setShowCopiedText(false); // Hide "Copied" text after 4 seconds to match the fade animation
            }, 1500); // Adjust the timing based on your animation
        }).catch(err => {
            console.error('Failed to copy email address to clipboard:', err);
        });

    }

    return (
        <section id="contacts"
            className='w-full font-syne h-screen bg-zinc-950 overflow-hidden'>
            <Cursor isActive={isActive} />
            <div className="text-zinc-50 tracking-tight">
                <SectionBar section={'contact'}/>
            </div>

            <article className='w-[98%] grid grid-cols-1 pt-24'>                
                <div className="reg-title py-5">
                    <div className='flex ml-16 w-[90%] gap-5'>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='you made it here, good move!' />
                        
                        
                    </div>
                </div>

                <div className=" w-[86%] grid grid-cols-3 align-content-center space ml-52 relative">
                    <div className="w-[32rem] flex text-small text-zinc-300 justify-center items-center">
                        <div className='w-3 h-3 bg-violet-500 absolute bottom-[15.4rem] left-0'></div>
                        <span className='w-full mb-16 tracking-wide indent-8'>
                            
                            Whether you're looking for someone to join your team full-time or just need an extra
                            pair of creative hands for a project, I'm all ears — and hands!.

                            <a onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                href='mailto:sandy07r@gmail.com' className="w-[39.055%] relative text-zinc-100 font-[300]
                                after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-[94%] 
                                after:origin-bottom after:scale-x-0 after:bg-zinc-100 after:transition-transform 
                                after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                hover:after:scale-x-100 ml-2">
                                    Let's connect.
                            </a>
                        </span>
                    </div>

                    <svg width="1.2" height="250" xmlns="http://www.w3.org/2000/svg" className='absolute left-[38rem] top-10'>
                        <line x1="1" y1="0" x2="1" y2="250" stroke="#D3A6C5" strokeWidth="1.2" />
                    </svg>


                    <div className="flex flex-col gap-9 ml-56 mt-10">
                        <div className="flex flex-col justify-start items-start title-xsmall">
                            <TextShimmerEffect text='EMAIL'/>
                            <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className=''
                                onClick={handleCopiedText}>
                                <div id='emailAddress'
                                    className='text-small mt-[-2px] hover:text-violet-400 flex'>
                                    info@trishramos.com
                                    { isCopied ? <BsCheck className='text-violet-500 ml-2 text-2xl'/>
                                       : <BsCopy className='ml-3 mt-1' />}
                                </div>
                                {showCopiedText && (
                                    <h3 className={`flex font-ibm text-sm font-[300] gap-1 absolute left-[41rem]
                                        ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                        Mail copied 
                                    </h3>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col title-xsmall">
                            <TextShimmerEffect text='Socials'/>
                            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-xxsmall space-y-1'>
                                {['linkedin', 'github', 'instagram', 'behance'].map((item, index) => (
                                    <li  key={index}>
                                        <a href='#' 
                                            onMouseOver={() => { setIsActive(true) }} onMouseOut={() => { setIsActive(false) }}
                                            className="group relative inline-flex items-center justify-center overflow-hidden 
                                            hover:text-violet-400 ">
                                            <div className="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 
                                            group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                                                <div className="flex w-3 h-3 bg-violet-500"></div>
                                            </div>
                                            <span>
                                                {item}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                    </div>
                    <div className="w-[40%] flex flex-col title-xsmall mt-9 ml-24 gap-9">
                        <div className="flex flex-col boder">
                            <TextShimmerEffect text='LINKS'/>
                            <div className='flex w-full '>           
                                <ul className='w-full flex flex-col justify-between items-start bg-transparent gap-1'>
                                    {['index', 'projects', 'about', ].map((item, index) => (
                                        <li className='text-xxsmall hover:text-violet-400
                                            uppercase tracking-wide' key={index}
                                            onMouseOver={() => { setIsActive(true) }} 
                                            onMouseLeave={() => { setIsActive(false) }}>
                                            <div key={index} href='#'                                            
                                            className="group relative inline-flex items-center justify-center overflow-hidden 
                                            hover:text-violet-400 ">
                                                <div className="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 
                                                group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                                                    <div className="flex w-3 h-3 bg-violet-500"></div>
                                                </div>
                                                <Link to={item}>
                                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                                </Link>
                                            </div>                                          
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col mb-20 title-xsmall">
                            <TextShimmerEffect text='RESOURCES'/>
                            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-xxsmall space-y-1'>
                                {['My resume', 'website-info'].map((item, index) => (
                                    <li key={index}> {/* Move the key prop here for correct usage */}
                                        <a href='#' 
                                            onMouseOver={() => { setIsActive(true) }} onMouseOut={() => { setIsActive(false) }}
                                            className="group relative inline-flex items-center justify-center overflow-hidden 
                                            hover:text-violet-400">
                                            <div className="mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 
                                            group-hover:mr-1 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                                                <div className="flex w-3 h-3 bg-violet-500"></div>
                                            </div>
                                            <span>
                                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                
            </article>           
            <Footer/>
        </section>
    )
}

export default Contact;
