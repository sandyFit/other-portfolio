import React from 'react';


const MotionText2 = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(4).fill(null);

  return (
      <div className="w-full h-full z-10 flex items-center py-1 "
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text2 font-ibm text-[8rem] font-[500] uppercase'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => (
                        <React.Fragment key={index}>
                            <span className='mx-20 text-zinc-300 text-[4rem] mt-16'>
                                {icon}
                            </span>
                            <span className='text-zinc-900' >{text1}</span>
                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText2;

