import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Cursor from '../../components/ui/Cursor';


const Contact = () => {

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

            <div className="flex justify-between pt-4 mx-10">
            <span className='array-text-light  '>
                portfolio
            </span>
            <span className='array-text-light '>
                v.1.0
            </span>
            </div>

            <article className='grid grid-cols-1 '>                
                <div className=" text-[12.3rem] fontTitle font-[600] text-skyIce-900 uppercase ">
                    <p className='ml-10'>contact </p>
                </div>

                <div className=" w-[90%] grid grid-cols-3 align-content-center gap-10 ml-64 mb-12 relative">
                    <div className="w-full flex array-text-light justify-center items-center">
                        <span className='w-full mb-36 tracking-wide'>
                            Thank you for dropping by!<br/>
                            If you have any questions or believe I would be a
                            good fit for your team, please don't hesitate to

                            <a onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                href='mailto:sandy07r@gmail.com' className="w-[39.055%] relative text-zinc-200 after:absolute 
                                after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom 
                                after:scale-x-0 after:bg-zinc-200 after:transition-transform after:duration-300 ml-3
                                after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                                    reach out. 
                            </a>
                        </span>
                    </div>

                    <svg width="2" height="245" xmlns="http://www.w3.org/2000/svg" className='absolute left-[35rem]'>
                        <line x1="1" y1="0" x2="1" y2="245" stroke="black" stroke-width="2" />
                    </svg>


                    <div className="flex flex-col gap-9 ml-40">
                        <div className="flex flex-col justify-start items-start  text-skyIce-900 font-[100] 
                            fontTitle text-xl">
                            <span className=''>
                                EMAIL
                            </span>
                            <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className=''
                                onClick={handleCopiedText}>
                                <p id='emailAddress'
                                    className='text-base font-ibm text-skyIce-900 font-[400] hover:text-zinc-200  
                                        mt-[-2px] ml-2'>
                                    hello@trishramos.com
                                </p>
                                {showCopiedText && (
                                    <h3 className={`flex text-lg font-[400] tracking-widest gap-1 absolute left-[48.5rem]
                                        ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                        Copied <BsCheck style={{fontSize: '2rem', color: '#fff', marginTop: '-5px'}}/>
                                    </h3>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col">
                            <p className='uppercase fontTitle text-xl'>
                                socials 
                            </p>
                            <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className='text-xl pl-2 space-y-1 tracking-wide array-text-light'>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>linkedin</a></li>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>github</a></li>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>instagram</a></li>
                                <li className="hover:text-zinc-200 uppercase"><a href='#'>behance</a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="flex flex-col text-xl text-skyIce-900 font-[100] fontTitle">
                        <div className="flex flex-col">
                            <p className='uppercase'>
                                sitemap
                            </p>
                            <div className='flex w-full '>           
                                <ul className='w-full flex flex-col justify-between items-start bg-transparent'>
                                    {['index', 'about', 'projects', 'resume', 'contact'].map((item, index) => (
                                        <li className='array-text-light
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
                                className='text-base font-ibm text-skyIce-900 font-[400] ml-2 mt-[-2px] '
                                >Trully Yours</p>
                        </div>
                    </div>
                </div>
                
            </article>

            
            <Footer/>

        </section>
    )
}

export default Contact;
