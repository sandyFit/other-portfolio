import React from 'react'
import TextShimmerHero from '../../components/featured/TextShimmerHero';

const Transition = () => {
    return ( 
        <section
            className='w-full min-h-screen bg-cyan-400 absolute top-0 left-0 overlay-first z-50'>
            
            <article className="w-[80%] flex flex-col items-start text-zinc-950 uppercase pt-[26rem] pl-16
                relative">                
                <div className="w-full flex flex-col  ">                         
                    <h1 className='mr-5 font-syne text-outline-dark'>
                        {/* <TextShimmerHero text='frontend' /> */}
                        frontend
                    </h1>
                                       
                    <span className='text-[10.8rem] font-[800] leading-[60px] mr-5'>
                        {/* <TextShimmerHero text= 'developer' /> */}
                        developer
                    </span>
                </div>
                
            </article> 
        </section>

    )
}

export default Transition;


