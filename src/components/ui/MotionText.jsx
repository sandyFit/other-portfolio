
import React from 'react';


const MotionText = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(20).fill(null);

  return (
      <div className="w-full h-[50px] z-10 flex pt-3 bg-skyIce-900"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text fontTitle text-xl font-[500] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className='mx-16 text-zinc-300 text-xl mt-16'>
                                {icon}
                            </span>
                            <span className='text-pink-50' >{text1}</span>
                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

