import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { HiArrowDownLeft } from 'react-icons/hi2'
import { Link } from 'react-scroll'
import MotionText from '../../components/ui/MotionText'

const Test2 = () => {
    return (
        <section data-cursor-color='#f9a8d4' id="contact"
            className='w-full h-screen relative'>
            {/* <hr className='w-[84%] border-t-[1px] border-skyIce-900 absolute left-36 top-16'/> */}

                <MotionText
                    text1={'who i am'}
                />
            <div className="flex flex-col gap-7 items-start ml-36 mt-36 pb-12">

                <h2 className='w-[70%] about-text-mayus'>
                    graphic designer & self-taught<br/> frontend developer

                </h2>
                <p className='array-text-light w-[40%] ml-[55rem] mt-4'>
                    Hello, I'm Trish, 
                    I went to school for graphic design, and, driven by my passion for all things digital,
                    embarked on a self-taught journey to broaden my expertise into web development, specializing
                    in frontend and motion graphics.
                </p>
                <div className="array-text-light w-[40%] ml-[55rem] relative">
                        I'm currently on the lookout for full-time roles or project-based collaborations that
                        challenge my skills and stoke my passion for design and development. <br/>
                        For questions or opportunities, please feel free to contact me
                        <Link to='contact'

                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span>
                            <BsArrowUpRight className='absolute top-[4.2rem] left-[47.6rem]' />
                        </Link>
                    </div>
            </div>
             <div className="relative">
                <HiArrowDownLeft className='text-[8rem] text-pink-50 absolute bottom-6 left-36'/>
            </div>  

            <hr className='w-[84%] border-t-[1px] border-skyIce-900 absolute left-36'/>
            
        </section>
    )
}

export default Test2