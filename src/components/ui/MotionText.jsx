
import React from 'react';


const MotionText = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(8).fill(null);

  return (
      <div className="w-full  z-10 flex pt-3 "
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text text-[8rem] font-[500] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => ( 
                        <React.Fragment key={index}>
                            <span className=' text-zinc-950 text-[10rem] mr-40 ml-8 mt-5'>
                                {icon}
                            </span>
                            <span className='text-zinc-950 ' >{text1}</span>

                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

