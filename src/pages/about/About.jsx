import React, { useState, useEffect } from 'react'
import Cursor from '../../components/ui/Cursor';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-scroll';
import Menu from '../../layout/Menu';
import gsap from 'gsap';


const About = () => {

    const [isActive, setIsActive] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [showFloatingBtn, setShowFloatingBtn] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        console.log('Toggling menu state from:', isMenuOpen, 'to:', !isMenuOpen);
        setIsMenuOpen(!isMenuOpen);
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        // Adjust the scroll threshold based on your layout
        const scrollThreshold = 800;

        if (scrollPosition > scrollThreshold) {
        setShowFloatingBtn(true);
        } else {
        setShowFloatingBtn(false);
        }
    };

    useEffect(() => {
        // Define the animation
        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out", // This easing creates a more natural movement
                duration: 1.2
            }
        });

        // Animating title1 and title2 with stagger
        tl.fromTo(".title", 
            { transformOrigin: "bottom", rotateX: 90, opacity: 0 },
            { rotateX: 0, opacity: 1, stagger: 0.3 }
        );
        

        // Return a function to kill the timeline to prevent memory leaks
        return () => tl.kill();
    }, []);


    useEffect(() => {
        // Add event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section data-cursor-color='#8b5cf6' id="about"
            className='w-full min-h-screen relative bg-pink-300'>
            <Cursor isActive={isActive} />
            <button
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
                onClick={handleClick}
                className={`fixed left-[106rem] top-16 z-10 ${showFloatingBtn ? '' : 'invisible'}`}
            >
                    <span 
                        className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20 nav-link'>
                        [ menu ]
                    </span>
            </button>
            {isMenuOpen && (
                <Menu
                    isOpen={isMenuOpen}
                    onClose={() => setIsMenuOpen(false)}
                />
            )}
           
            <article className="w-full h-screen flex flex-col justify-start items-start relative pt-40 px-36 ">
                <div className="w-[96%] flex justify-between relative">
                    <p className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20'>
                        [ who i am ]
                    </p>

                    <p className='pr-8 about-text-mayus title'>                       
                           a graphic 
                    </p>
                </div>
                    
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus title">                 
                    designer and self-taught        
                </p>
                <p className="w-[96%] h-full flex ml-8 flex-col px-12 about-text-mayus mt-[-3rem] title">                 
                    frontend developer.        
                </p>

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[40rem]">                   
                    <p className="text-3xl text-zinc-950">
                        
                        I went to school for graphic design, and, driven by my passion for all things digital,
                        embarked on a self-taught journey to broaden my expertise into web development, specializing
                        in frontend and motion graphics.
                    </p>
                    <div className="text-3xl text-zinc-950 relative">
                        I'm currently on the lookout for full-time roles or freelance gigs that challenge my skills and
                        stoke my passion for design and development. <br/>
                        For questions or opportunities contact me 
                        <Link to='contact'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span>
                            <BsArrowUpRight className='absolute top-[6.8rem] left-[42.4rem]' />
                        </Link>
                    </div>
                </div>
            </article>

            <article 
                className="w-full h-screen flex flex-col items-center bg-hotpink-400 pt-40 mx-auto px-36">
                <div className="w-[96%] flex justify-between ">
                    <p className='text-zinc-900 fontTitle text-xl font-[500] uppercase tracking-wide pl-20'>
                        [ what i do ]
                    </p>

                    <p className='about-text-mayus pr-12 title'>
                        I thrive 
                    </p>

                </div>

                <div className="w-[96%] h-full flex ml-8 flex-col px-12">
                    <p className='about-text-mayus title'>
                        on crafting pixel-perfect 
                    </p>
                    <p className='about-text-mayus title'>
                        digital products.
                    </p>
                </div>

                <div className="flex flex-col w-[58%] gap-8 pb-28 ml-[35rem] ">                   
                    <p className="text-3xl text-zinc-950">
                        I enjoy creating fluid animations, engaging transitions and tackling complex layouts using SCSS.
                        
                    </p>
                    <div className="text-3xl text-zinc-950 relative">
                        My toolkit includes JavaScript, React and Webflow, complemented by AWS, DatoCMS,
                        GSAP, After Effects, Framer-Motion, Vite, and Webpack.<br/> <br/>
                        Additionally, I leverage no-code platforms such as Webflow and Framer.
                        Check out my work
                        <Link to='projects'
                            onMouseEnter={() => setIsActive(true)}
                            onMouseLeave={() => setIsActive(false)}
                            className='hover:text-zinc-200'>
                            <span className='ml-2'>here</span> <BsArrowUpRight className='absolute top-[11.3rem] left-[29.2rem]' />
                        </Link>
                        
                    </div>
                </div>
            </article>
            
        </section>
    )
}

export default About;
