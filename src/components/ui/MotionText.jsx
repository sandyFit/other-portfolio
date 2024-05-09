
import React from 'react';


const MotionText = ({  text1, text2, text3, text4, text5, text6, text7, text8, text9, text10}) => {
  const repetitions = Array(2).fill(null);

  return (
      <div className="w-full z-10 flex py-2 items-center"
            style={{ overflow: 'hidden'}}>
            <h2 className=' motion-text '>
                <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                    {repetitions.map((_, index) => ( 
                        <React.Fragment key={index}>
                            
                            <span className='text-xsmall-purple mx-' >{text1}</span>
                            
                            <span className='text-xsmall-purple mx-1' >{text2}</span>
                            
                            <span className='text-xsmall-purple mx-1' >{text3}</span>
                            
                            <span className='text-xsmall-purple mx-1' >{text4}</span>
                            
                            <span className='text-xsmall-purple mx-1' >{text5}</span>
                                                       
                            <span className='text-xsmall-purple mx-1' >{text6}</span>
                                                       
                            <span className='text-xsmall-purple mx-1' >{text7}</span>
                                                      
                            <span className='text-xsmall-purple mx-1' >{text8}</span>
                                                      
                            <span className='text-xsmall-purple mx-1' >{text9}</span>
                                                      
                            <span className='text-xsmall-purple mx-1' >{text10}</span>

                            
                        </React.Fragment>
                    ))}
                </div>
            </h2>
    </div>
  )
};

export default MotionText;

