import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck, BsCopy } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Cursor from '../../components/ui/Cursor';
import TextShimmerEffect from '../../components/featured/TextShimmerEffect';
import Socials from '../../components/ui/Socials';
import Sitemap from '../../components/ui/Sitemap';
import Resources from '../../components/ui/Resources';


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
        <section id="say-hey"
            className='w-full font-syne h-screen bg-zinc-950 overflow-hidden relative'>
            <Cursor isActive={isActive} />

            <article border-cut="top-right-black"
                className='w-[98%] grid grid-cols-1 pt-16'>                
                <div className="relative py-5">

                    <div className="flex flex-col">

                        <div className='flex reg-title ml-16 w-[90%] gap-4'>
                             <h2 className='[word-spacing:0.1em]'>
                                <TextShimmerEffect text={'now that you made it here,'}/>
                            </h2>
                             
                       
                        </div>
                        
                         <div className="w-[38rem] flex flex-col text-xsmall uppercase text-zinc-300 ml-[30.5rem]">
                            <div className='w-3 h-3 bg-violet-500 absolute bottom-[4.6rem] left-[30.5rem]'></div>
                            <span className='w-full indent-8 '>
                                
                                Whether you're looking for someone to join your team full-time or just need an extra
                                pair of creative hands for a project — I'm all ears and hands!.

                                <a onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                    href='mailto:sandy07r@gmail.com' className="w-[39.055%] relative text-zinc-50 font-[300]
                                    after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[1px] after:w-[98%] 
                                    after:origin-bottom after:scale-x-0 after:bg-zinc-50 after:transition-transform 
                                    after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom
                                    hover:after:scale-x-100 ml-2">
                                        Let's connect.
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col text-right morganite-extra-bold text-[22rem] font-[500]
                        leading-[260px] text-zinc-700
                        text-opacity-40 relative ">
                        <span className='absolute right-28 bottom-10'>Say </span>                      
                        <span className='absolute right-8 -top-10'>Hey </span>                      
                    </div>
                    
                </div>

                <div className=" w-[40%] grid grid-cols-2 py-3 justify-self-center mr-[12rem] relative">—
                   
                    <div className="flex gap-24 ">
                       <div className="w-full flex flex-col justify-start items-start title-xsmall ml-16">
                            <div className="title-xsmall pb-1">copy email</div> 
                            <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className=''
                                onClick={handleCopiedText}>
                                <div id='emailAddress'
                                    className='text-xxsmall  hover:text-violet-500 flex'>                                   
                                    <BsCopy className='mr-2 mt-1' />
                                    info@trishramos.com
                                </div>
                                {showCopiedText && (
                                    <h3 className={`flex font-roboto text-[.7rem] font-[300] absolute right-[7.8rem] 
                                        ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                        Mail copied <BsCheck className='text-violet-500 ml-1 text-xl'/>
                                    </h3>
                                )}
                            </button>

                            <Socials/>
                        </div>
                                                                  
                        <div className="w-[40%] flex flex-col title-xsmall">
                            <div className="flex flex-col">
                                <Sitemap/>
                            </div>
                            <div className="flex flex-col  title-xsmall mt-8">
                                <Resources/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </article>           
            <Footer/>
        </section>
    )
}

export default Contact;
