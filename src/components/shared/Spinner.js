import React from 'react';

const Spinner = () => {
  return (
    <div className='w-full bg-black flex items-center justify-center'>
      <span className='w-12 h-12 border-4 border-white border-b-[#00A8E1] rounded-full inline-block box-border animate-spin'>
      </span>
    </div>
  );
};

export default Spinner;
