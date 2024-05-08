import React from 'react';

function ToolTable() {
  const tools = [
    { name: 'SCSS', description: 'A Powerful CSS extension that helps write clean, efficient, and reusable styles.' },
    { name: 'JavaScript', description: 'A crucial language for adding interactivity, enabling dynamic features in web apps.' },
    { name: 'React.js', description: 'A library for building user interfaces with component-based architecture.' },
    { name: 'TypeScript', description: 'A typed superset of JavaScript that enhances code quality and maintainability.' },
    { name: 'GSAP', description: 'High-performance JavaScript library for complex, flexible web animations.' },
    
  ];

  return (
        <div className='w-full'>
      {tools.map((tool, index) => (
          <div key={index} className='flex border-t-[1px]  border-zinc-500 py-1'>
            <div className='title-xsmall border-r-[1px] border-zinc-500 w-[20%] flex items-center ml-4'>{tool.name}</div>
            <div className='text-xxsmall-min ml-4 flex justify-start items-center   w-[72%]'>{tool.description}</div>
        </div>
      ))}
    </div>
  );
}

export default ToolTable;
