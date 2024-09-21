import React from 'react';

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className=' flex flex-col gap-4'>
        <p>GO GET IT!!!!! </p>
        <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Humangaaa <span className='text-blue-400'>Saurus!!</span>
        </h1>
      </div>
      <p className='text-sm md:text-base font-light'>
        I hearby acknowledge that I might become an
        <span className='text-blue-400 font-medium'> awesome aawsome</span> and
        accept all risk of becoming local{' '}
        <span className='text-blue-400 font-medium'>mass monstrosity</span>
        unable to fit through doors!!
      </p>
      <button className='px-8 py-4 rounded border-[2px] bg-slate-950 border-blue-400 border-solid  duration-200 blue-shadow'>
        <p>Accept & Begin!</p>
      </button>
    </div>
  );
}
