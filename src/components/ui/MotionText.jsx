
import React from 'react';


const MotionText = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(14).fill(null);

  return (
      <div className="w-full h-[50px] z-10 flex pt-3 "
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text fontTitle text-4xl font-[500] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className=' text-zinc-50 text-xl mt-16'>
                                {icon}
                            </span>
                            <span className='text-zinc-50 mx-10' >{text1}</span>
                            <span className='text-skyIce-300' >{text2}</span>
                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

