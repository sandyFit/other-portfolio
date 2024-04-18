import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Cursor from '../../components/ui/Cursor';

const Test = () => {

    const [isActive, setIsActive] = useState(false);
    const [showCopiedText, setShowCopiedText] = useState(false);

    const handleCopiedText = () => {
        const emailAddress = 'hello@trishramos.com';

        navigator.clipboard.writeText(emailAddress).then(() => {
            console.log('Email address copied to clipboard!');
            setShowCopiedText(true); // Show "Copied" text
            setTimeout(() => {
                setShowCopiedText(false); // Hide "Copied" text after 4 seconds to match the fade animation
            }, 1200); // Adjust the timing based on your animation
        }).catch(err => {
            console.error('Failed to copy email address to clipboard:', err);
        });

    }

    return (
        <section data-cursor-color='#f9a8d4' id="contact"
            className='w-full h-screen bg-skyIce-300'>
            <Cursor isActive={isActive} />

            <article className='grid grid-cols-1 pt-12'>                
                <div className=" text-[15.3rem] fontTitle font-[600] text-skyIce-900 uppercase title ">
                    <p className='ml-[-3.5rem]'>Get In Touch</p>
                </div>

                <div className=" w-[90%] grid grid-cols-3 align-content-center gap-24 ml-64 mb-24 relative">
                    <div className="flex text-3xl text-skyIce-900 font-[100] justify-center items-center ">
                        <span className='w-full mb-12'>
                            You made it here :) Good move! <br/> Feel free to 
                            <a onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                href='mailto:sandy07r@gmail.com' className="w-[39.055%] relative text-zinc-200 after:absolute 
                                after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom 
                                after:scale-x-0 after:bg-zinc-200 after:transition-transform after:duration-300 ml-3
                                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                                    reach out. 
                            </a>
                        </span>
                    </div>

                    <svg width="2" height="285" xmlns="http://www.w3.org/2000/svg" className='absolute left-[42rem]'>
                        <line x1="1" y1="0" x2="1" y2="285" stroke="#fdf2f8" stroke-width="2" />
                    </svg>


                    <div className="flex flex-col text-3xl text-skyIce-900 font-[100] ml-40">
                        <div className="flex flex-col justify-start items-start ">
                            <span className=''>
                                EMAIL
                            </span>
                            <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className=''
                                onClick={handleCopiedText}>
                                <p id='emailAddress'
                                    className=' hover:text-zinc-200 text-[1.4rem] mt-[-8px] ml-2'>
                                    hello@trishramos.com
                                </p>
                                {showCopiedText && (
                                    <h3 className={`flex text-lg font-[400] tracking-widest gap-1 
                                        absolute
                                        ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                        Copied <BsCheck style={{fontSize: '2rem', color: '#fff', marginTop: '-5px'}}/>
                                    </h3>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col fontTitle mt-12">
                            <p className='uppercase'>
                                socials 
                            </p>
                            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-xl pl-2 space-y-1 tracking-wide'>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>linkedin</a></li>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>github</a></li>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>instagram</a></li>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>behance</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="flex flex-col text-3xl text-skyIce-900 font-[100] fontTitle">
                        <div className="flex flex-col fontTitle ">
                            <p className='uppercase'>
                                sitemap
                            </p>
                            <div className='flex w-full '>           
                                <ul className='w-full flex flex-col justify-between items-start bg-transparent'>
                                    {['index', 'about', 'projects', 'resume', 'contact'].map((item, index) => (
                                        <li className=' text-xl
                                            pl-2 uppercase tracking-wide nav-link' key={index}
                                            onMouseOver={() => { setIsActive(true) }} onMouseLeave={() => { setIsActive(false) }}>
                                            <Link to={item}>
                                                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-col mt-12 mb-8">                            
                            <p className='uppercase'>
                                crafted by 
                            </p>
                            <p onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-[1.4rem] ml-2 mt-[-8px]'
                                >Trully Yours</p>
                        </div>
                    </div>
                </div>
                
            </article>

            
            <Footer/>

        </section>
    )
}

export default Test;
