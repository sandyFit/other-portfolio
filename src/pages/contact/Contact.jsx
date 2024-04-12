import React from 'react'
import Footer from '../../layout/Footer'


const Contact = () => {

    
    return (
        <section id="contact"
            className='w-full min-h-screen overflow-hidden bg-hotpink-400'>
            <div className="w-full h-full flex mt-20 ml-20 flex-col justify-between relative">
                <p className='text-[6rem] fontTitle text-zinc-950 font-[600] leading-[90px] uppercase'>
                    you made it here,  good move!<br />
                    feel free to
                    <span className='text-zinc-200 ml-6'>reach out</span>
                </p>

                <div className="flex flex-col w-full items-center">
                    <div className="flex text-xl fontTitle justify-between gap-20">
                        <p className='uppercase'>
                            email
                        </p>
                        <p>hello@trishramos.com</p>
                    </div>

                    <div className="flex text-xl fontTitle justify-between gap-20">
                        <p className='uppercase'>
                            socials
                        </p>
                        <ul>
                            <li className="uppercase">linkedin</li>
                            <li className="uppercase">github</li>
                            <li className="uppercase">instagram</li>
                        </ul>
                    </div>
                </div>

                
            </div>
            <div className="w-full h-full flex flex-col pt-[6rem]">                        
                <Footer/>
            </div>
            
        </section>
    )
}

export default Contact