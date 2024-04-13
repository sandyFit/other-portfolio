import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck, BsEmojiWink } from 'react-icons/bs';
import { Link } from 'react-scroll';


const Contact = () => {

    const [showCopiedText, setShowCopiedText] = useState(false);

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
        <section id="contact"
            className='w-full min-h-screen overflow-hidden bg-violet-500'>
            <div className="w-full h-full flex mt-40 ml-8 flex-col justify-between relative">
                <p className='text-[6rem] fontTitle text-zinc-950 font-[600] leading-[90px] uppercase'>
                    you made it here,  good move!<br />
                    feel free to

                    <a href='mailto:sandy07r@gmail.com' className="relative text-zinc-200 after:absolute 
                    after:bottom-0 after:left-0 after:right-0 after:h-[8px] after:w-full after:origin-bottom 
                    after:scale-x-0 after:bg-zinc-200 after:transition-transform after:duration-300
                    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100 ml-5">
                        reach out 
                    </a>
                    <BsEmojiWink className='text-zinc-200 absolute text-[5rem] top-[5.7rem] left-[76rem]'/>
                </p>

                <div className="flex flex-col w-full justify-between items-start ml-[22rem] mt-20 gap-12">
                    <div className="flex text-xl fontTitle justify-between gap-[9.7rem]">
                        <p className='uppercase '>
                            [ contact ]
                        </p>
                        <button  className=''
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
                        <ul>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>linkedin</a></li>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>github</a></li>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>instagram</a></li>
                            <li className="hover:text-zinc-200 uppercase"><a href='#'>behance</a></li>
                        </ul>
                    </div>

                    <div className="flex text-xl fontTitle uppercase justify-between gap-[8.2rem]">
                        <p className=''>
                           [ crafted by ]
                        </p>
                        <p>trully yours</p>
                    </div>
                </div>  
                
                <div className="relative text-xl fontTitle uppercase">
                    <Link to='hero'
                        smooth={true}
                        duration={500}
                        className='absolute left-[111rem] top-20 hover:text-zinc-200'>
                        [top]
                    </Link>
                </div>
            </div>


            <div className="w-full h-full flex flex-col pt-[6rem] mt-8">                        
                <Footer/>
            </div>
            
        </section>
    )
}

export default Contact