import React, { useState } from 'react'
import Footer from '../../layout/Footer'
import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Cursor from '../../components/ui/Cursor';
import MotionText from '../../components/ui/MotionText';

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
            className='w-full h-screen bg-skyIce-300 '>
            <Cursor isActive={isActive} />

            <div className="flex flex-col pt-40">
                
                <div className="flex w-[14%] h-[60px] border-2 items-center bg-skyIce-900 border-skyIce-900 
                    ml-24 rounded-t-3xl">
                    <p className='array-text text-pink-50 ml-8'>get to know me</p>
                </div>

                <div className="grid grid-cols-60/40 w-[90%]  ml-auto mr-auto rounded-e-3xl">
                    <div className="grid grid-cols-1 grid-rows-3 border-2 border-skyIce-900 h-[35rem] rounded-bl-3xl">

                        <div className="flex items-center border-b-2 border-zinc-950 col-span-1 row-span-1">
                            <MotionText
                                text1={'who i am'}
                            />
                        </div>

                        <div className="flex items-center border-b-2 border-zinc-950 col-span-1 row-span-1">
                            <p className='array-text py-6 text-skyIce-900 ml-8'>what i do</p>
                        </div>
                        <div className="flex items-center col-span-1 row-span-1">
                            <p className='array-text py-6 text-skyIce-900 ml-8'>my toolkit</p>
                        </div>


                    </div>
                    <div className=" flex bg-skyIce-900 col-start-2 col-end-3 row-span-3 p-20 justify-end items-end
                        rounded-e-3xl border-l-2 border-pink-50">
                        <p className='array-text-light text-pink-50'>
                            I'm a graphic designer and self-taught frontend developer. <br /><br />
                            I went to school for graphic design, and, driven by my passion for all things digital,
                            embarked on a self-taught journey to broaden my expertise into web development, specializing
                            in frontend and motion graphics.
                        </p>
                    </div>
                </div>
           </div>


           

            
            

        </section>
    )
}

export default Test;
