import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Cursor from '../../components/ui/Cursor';


const Contact = () => {

    const [showCopiedText, setShowCopiedText] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleCopiedText = () => {
        const emailAddress = 'sandy07r@gmail.com';

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
            className='w-full h-screen'>
            <Cursor isActive={ isActive }/>
             <article className="w-full flex flex-col relative pt-36 px-36">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20'>
                        [ get in touch ]
                    </p>
                    <p className='pr-8 about-text-mayus'>                       
                           you made it here,
                    </p>
                </div>

                <div className="w-[96%] flex ml-8 flex-col px-12 about-text-mayus">                 
                    <p className=''>
                        good move :) feel free to
                    </p> 

                    <a onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        href='mailto:sandy07r@gmail.com' className="w-[39.055%] relative text-zinc-200 after:absolute 
                    after:bottom-0 after:left-0 after:right-0 after:h-[8px] after:w-full after:origin-bottom 
                    after:scale-x-0 after:bg-zinc-200 after:transition-transform after:duration-300
                    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                        reach out. 
                    </a>
                    
                </div>                             
            </article>

            <article className="w-[98%] flex flex-col relative">
               
                <div className="flex flex-col w-[30%] justify-between items-start ml-[48rem] mb-32 gap-10">
                    <div className="flex text-xl fontTitle justify-between mt-10 gap-[9.7rem]">
                        <p className='uppercase'>
                            [ contact ]
                        </p>
                        <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                             className=''
                            onClick={handleCopiedText}>
                            <p id='emailAddress'
                                className=' hover:text-zinc-200'>
                                hello@trishramos.com
                            </p>
                            {showCopiedText && (
                                <h3 className={`flex font-ibm text-lg font-[400] text-zinc-800 tracking-widest gap-1 
                                    absolute
                                    ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                    Copied <BsCheck style={{fontSize: '2rem', color: '#d4d4d8', marginTop: '-5px'}}/>
                                </h3>
                            )}
                        </button>
                    </div>

                    <div className="flex text-xl fontTitle justify-between gap-[10.4rem]">
                        <p className='uppercase'>
                            [ socials ]
                        </p>
                        <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                            className=''>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>linkedin</a></li>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>github</a></li>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>instagram</a></li>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>behance</a></li>
                        </ul>
                    </div>

                    <div className="flex text-xl fontTitle uppercase justify-between gap-[8.2rem] ">
                        <p className=''>
                           [ crafted by ]
                        </p>
                        <p onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                            >trully yours</p>
                    </div>
                </div>  
                
                <div className="relative text-xl fontTitle uppercase">
                    <Link to='hero'
                        onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        smooth={true}
                        duration={500}
                        className='absolute left-[110.6rem] -top-8 hover:text-zinc-200'>
                        [go top]
                    </Link>
                </div>
            </article>

            <Footer/>
           
        </section>
    )
}

export default Contact;
