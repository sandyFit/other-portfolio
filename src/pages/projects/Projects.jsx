import React, {useState} from 'react'
import Cursor from '../../components/ui/Cursor';
import { HiArrowDownLeft, HiArrowDownRight } from 'react-icons/hi2';

const Projects = () => {

    const [isActive, setIsActive] = useState(false);

    return (
        <section data-cursor-color='#f9a8d4' id="projects"
            className='w-full min-h-screen relative flex justify-center bg-[#FFD6E8]'>
            <Cursor isActive={isActive} />
            <article 
                className="w-full h-screen flex flex-col justify-start relative pt-40 mr-40 px-16">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-[#ED434A] fontTitle text-xl font-[500] uppercase tracking-wide pl-44'>
                        [ selected work ]
                    </p>

                    <p className='pr-8 about-text-mayus text-[#ED434A]  title'>                       
                        a small selection
                    </p>
                </div>

                <div className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus">
                    <p onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}
                        className='about-text-mayus text-[#ED434A]  title'>
                        of recent projects.
                    </p>
                    
                </div>
            </article>

            

            <div className="flex relative">
                <HiArrowDownRight className='text-[8rem] text-[#ED434A] mb-2 absolute -bottom-2 left-[111rem]'/>
            </div>
        </section>
    )
}

export default Projects