import React, {useState, useEffect} from "react";

const Transition = ({ onLoadingComplete }) => {
    const [counter, setCounter] = useState(0);

    const startLoader = () => {
        const updateCounter = () => {
            setCounter(prevCounter => {
                const increment = Math.floor(Math.random() * 10) + 1;
                const newCounter = Math.min(prevCounter + increment, 100);
                if (newCounter === 100) {
                    setTimeout(onLoadingComplete, 500); // Delay to ensure the user sees '100'
                }
                return newCounter;
            });
        };

        setTimeout(updateCounter, 50);
    };

    useEffect(() => {
        startLoader();
    }, []);

    return (
        <section className='w-full min-h-screen flex justify-end bg-zinc-900 absolute top-0 left-0 overlay-first z-50'>
            <span className='counter text-[12rem] font-ibm text-violet-500 pr-12'>{counter}%</span>
        </section>
    );
};
export default Transition;