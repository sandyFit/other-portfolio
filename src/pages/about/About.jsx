import React from 'react'

const About = () => {
    return (
        <section id="about"
            className='w-full min-h-screen overflow-hidden bg-violet-500'>
            <div className="w-full h-full flex mt-40 ml-8 flex-col px-8">
                <p className='text-[6rem] fontTitle text-zinc-950 font-[600] leading-[90px] uppercase'>
                    Hi, I'm Trish a grapic designer and self-taught frontend developer with a keen focus on the
                    artistry of UI design.
                    
                </p>

                <div className="flex justify-end mt-16 mr-36">                   
                    <p className='text-3xl fontTitle text-zinc-950 font-[200] w-[60%]'>
                        As a passionate designer I'm committed to build digital wonders that are the perfect blend of
                        meaningful aesthetics, performance and function.<br/><br/>
                        I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and stoke
                        my passion for design and development. Fell free to reach out here
                    </p>
                </div>
            </div>
            
        </section>
    )
}

export default About