
import React from 'react';


const MotionText = ({ icon, text1, text2, text3, className}) => {
  const repetitions = Array(8).fill(null);

  return (
      <div className="w-full  z-10 flex pt-5 pb-2 bg-violet-500"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text bigger-title'>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => ( 
                        <React.Fragment key={index}>
                            <span className=' text-purple-50 text-[9.5rem] mr-60 ml-8 mt-2'>
                                {icon}
                            </span>
                            <span className='text-purple-50 ' >{text1}</span>

                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

