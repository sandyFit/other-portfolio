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
        <section id="contact"
            className='w-full font-syne h-screen bg-zinc-950 overflow-hidden'>
            <Cursor isActive={isActive} />
            <div className="text-zinc-50 tracking-tight">
                <SectionBar section={'say hey'}/>
            </div>

            <article className='w-[98%] grid grid-cols-1 pt-20'>                
                <div className="text-[8rem] font-robotoCondensed font-[600] text-purple-300 tracking-tighter uppercase py-5">
                    <div className='flex ml-16 w-[90%] gap-5'>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='caught' />
                        
                        <span className="lowercase font-[300] italic text-[8.5rem] -mt-3">
                            <TextShimmerEffect
                                triggerOnScroll={true}
                                text=' your ' />
                        </span>
                        <TextShimmerEffect
                            triggerOnScroll={true}
                            text='eye?' />
                    </div>
                </div>

                <div className=" w-[86%] grid grid-cols-3 align-content-center space ml-64 relative">
                    <div className="w-[28rem] flex text-xsmall text-zinc-300 justify-center items-center">
                        <span className='w-full mb-28 tracking-wide indent-[6.5rem]'>
                            
                            Whether you're looking for someone to join your team full-time or just need an extra
                            pair of creative hands for a project, I'm all ears—and hands!.

                            <a onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                href='mailto:sandy07r@gmail.com' className="w-[39.055%] relative text-purple-300 font-[300]
                                after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-[94%] 
                                after:origin-bottom after:scale-x-0 after:bg-purple-300 after:transition-transform 
                                after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                hover:after:scale-x-100 ml-2">
                                    Let's connect.
                            </a>
                        </span>
                    </div>

                    <svg width="1.2" height="250" xmlns="http://www.w3.org/2000/svg" className='absolute left-[35rem]'>
                        <line x1="1" y1="0" x2="1" y2="250" stroke="#D3A6C5" strokeWidth="1.2" />
                    </svg>


                    <div className="flex flex-col gap-9 ml-48">
                        <div className="flex flex-col justify-start items-start title-xsmall">
                            <TextShimmerEffect text='EMAIL'/>
                            <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className=''
                                onClick={handleCopiedText}>
                                <div id='emailAddress'
                                    className='text-xsmall mt-[-2px] hover:text-purple-300 flex'>
                                    info@trishramos.com
                                    { isCopied ? <BsCheck className='text-purple-300 ml-2 text-2xl'/>
                                       : <BsCopy className='ml-3 mt-1' />}
                                </div>
                                {showCopiedText && (
                                    <h3 className={`flex font-ibm text-sm font-[300] gap-1 absolute left-[39rem]
                                        ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                        Mail copied 
                                    </h3>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col title-xsmall">
                            <TextShimmerEffect text='Socials'/>
                            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-xsmall space-y-1'>
                                <li className="hover:text-purple-300 text-xsmall"><a href='#'>linkedin</a></li>
                                <li className="hover:text-purple-300 text-xsmall"><a href='#'>github</a></li>
                                <li className="hover:text-purple-300 text-xsmall"><a href='#'>instagram</a></li>
                                <li className="hover:text-purple-300 text-xsmall"><a href='#'>behance</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="w-[40%] flex flex-col title-xsmall  ml-12 gap-9">
                        <div className="flex flex-col boder">
                            <TextShimmerEffect text='LINKS'/>
                            <div className='flex w-full '>           
                                <ul className='w-full flex flex-col justify-between items-start bg-transparent gap-1'>
                                    {['index', 'projects', 'about', ].map((item, index) => (
                                        <li className='text-xsmall hover:text-purple-300
                                            uppercase tracking-wide' key={index}
                                            onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}>
                                            <Link to={item}>
                                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className=" flex flex-col mb-8 title-xsmall">                            
                            <TextShimmerEffect text='RESOURCES'/>
                            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-xsmall space-y-1'>
                                <li className="hover:text-purple-300 uppercase"><a href='#'>My resume</a></li>
                                <li className="hover:text-purple-300 uppercase"><a href='#'>website info</a></li>                               
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
