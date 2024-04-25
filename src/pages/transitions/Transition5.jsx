import React from 'react'
import MotionText from '../../components/ui/MotionText';
import { BsInfinity } from "react-icons/bs";

const Transition5 = () => {
    return ( 
        <section id="t5"
            className='w-full min-h-screen flex items-center relative bg-petal-200 pb-32'>   
            <div className="flex w-full items-center">
                <MotionText
                    icon={<BsInfinity/>}
                    text1={'Design + Technology ='}
                    // text2={'About Me'}
                />
            </div>
        </section>
    )
}

export default Transition5