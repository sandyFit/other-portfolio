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
        <section id="say-hey"
            className='w-full font-syne h-screen bg-zinc-950 overflow-hidden relative'>
            <Cursor isActive={isActive} />

            <article border-cut="top-left-angled"
                className='w-[98%] grid grid-cols-1 pt-16'>                
                <div className="relative py-5">

                    <div className="flex flex-col">

                        <div className='flex reg-title ml-16 w-[90%] gap-4'>
                             <h2 className=''>
                                <TextShimmerEffect text={'Thanks'}/>
                            </h2>
                             <span className=''>
                                <TextShimmerEffect text={'for'}/>
                            </span>
                             <span className=''>
                                <TextShimmerEffect text={'dropping'}/>
                            </span>
                             <span className=''>
                                <TextShimmerEffect text={'by!'}/>
                            </span>
                       
                        
                        </div>
                        
                         <div className="w-[30rem] flex flex-col text-xsmall text-zinc-300 ml-[30.5rem]">
                            <div className='w-3 h-3 bg-violet-500 absolute bottom-[4.6rem] left-[30.5rem]'></div>
                            <span className='w-full indent-8 '>
                                
                                Whether you're looking for someone to join your team full-time or just need an extra
                                pair of creative hands for a project, I'm all ears and hands!.

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
                    </div>
                    <div className="flex flex-col text-right morganite-extra-bold text-[22rem] font-[500]
                            leading-[260px] text-zinc-700
                            text-opacity-40 absolute right-8 -top-4">
                            <span className=''>Say <br/> Hey</span>                      
                        </div>

                    
                </div>

                <div className=" w-[40%] grid grid-cols-2 py-3 justify-self-center ml-[20rem] relative">
                   
                    <div className="flex gap-24 ">
                       <div className="w-full flex flex-col justify-start items-start title-xsmall ml-28">
                            <div className="title-xsmall pb-1">copy email</div> 
                            <button onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                className=''
                                onClick={handleCopiedText}>
                                <div id='emailAddress'
                                    className='text-xxsmall  hover:text-violet-400 flex'>                                   
                                    <BsCopy className='mr-2 mt-1' />
                                    info@trishramos.com
                                </div>
                                {showCopiedText && (
                                    <h3 className={`flex font-roboto text-[.7rem] font-[300] absolute left-[8.3rem] 
                                        ${showCopiedText ? 'copiedTextVisible' : 'copiedTextHidden'}`}>
                                        Mail copied <BsCheck className='text-violet-500 ml-1 text-xl'/>
                                    </h3>
                                )}
                            </button>

                            <div className="flex flex-col title-xsmall mt-8">
                                <div className="title-xsmall pb-1">Socials</div> 
                                <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                    className='text-xxsmall space-y-2'>
                                    {['linkedin', 'github', 'instagram', 'behance'].map((item, index) => (
                                        <div onMouseOver={() => { setIsActive(true) }}
                                            onMouseLeave={() => { setIsActive(false) }}                                       
                                            className="group relative ">
                                        
                                            <a href='#'
                                                className="relative inline-flex overflow-hidden text-xxsmall 
                                                    uppercase tracking-wide">
                                                <div className="translate-y-0 skew-y-0 transition duration-500 
                                                group-hover:-translate-y-[110%] group-hover:skew-y-6">
                                                    {item}
                                                </div>
                                                <div className="absolute translate-y-[110%] skew-y-6 transition 
                                                duration-500 group-hover:translate-y-0 
                                                    group-hover:skew-y-0 text-violet-400">
                                                        {item}
                                                </div>
                                            </a>                              
                                        </div>   
                                    ))}
                                </ul>
                            </div>
                        </div>
                                                                  
                        <div className="w-[40%] flex title-xsmall  gap-9">
                            <div className="flex flex-col">
                                <div className="title-xsmall pb-1">links</div> 
                                <div className='flex w-full '>           
                                    <ul className='w-full flex flex-col justify-between items-start bg-transparent gap-1'>
                                        {['index', 'projects', 'about',].map((item, index) => (
                                             <div onMouseOver={() => { setIsActive(true) }}
                                                onMouseLeave={() => { setIsActive(false) }}                                       
                                                className="group relative ">
                                            
                                                <Link to={item}
                                                    className="relative inline-flex overflow-hidden text-xxsmall space-y-1
                                                        uppercase tracking-wide">
                                                    <div className="translate-y-0 skew-y-0 transition duration-500 
                                                    group-hover:-translate-y-[110%] group-hover:skew-y-6">
                                                        
                                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                                    
                                                    </div>
                                                    <div className="absolute translate-y-[110%] skew-y-6 transition 
                                                    duration-500 group-hover:translate-y-0 
                                                        group-hover:skew-y-0 text-violet-400">
                                                            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                                    </div>
                                                </Link>                              
                                            </div>  
                                            
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col  title-xsmall mt-8">
                                    <div className="title-xsmall pb-1">resources</div> 
                                    <ul onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                                        className='text-xxsmall space-y-1'>
                                        {['My resume', 'website-info'].map((item, index) => (
                                        <div onMouseOver={() => { setIsActive(true) }}
                                                onMouseLeave={() => { setIsActive(false) }}                                       
                                                className="group relative ">
                                            
                                                <a href='#'
                                                    className="relative inline-flex overflow-hidden text-xxsmall space-y-1
                                                        uppercase tracking-wide">
                                                    <div className="translate-y-0 skew-y-0 transition duration-500 
                                                        group-hover:-translate-y-[110%] group-hover:skew-y-6">
                                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                                    </div>
                                                    <div className="absolute translate-y-[110%] skew-y-6 transition 
                                                    duration-500 group-hover:translate-y-0 
                                                        group-hover:skew-y-0 text-violet-400">
                                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                                    </div>
                                                </a>                              
                                            </div>  
                                        ))}
                                    </ul>
                                </div>
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
