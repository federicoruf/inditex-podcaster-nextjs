import React from 'react';

export const Spinner = () => {
  return (
    <div className='relative flex h-3 w-3'>
      <span className='sr-only'>Loading...</span>
      <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
      <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
    </div>
  );
};
