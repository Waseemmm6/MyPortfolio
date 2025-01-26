import React from 'react';
import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/waseProfile.webp"; // Corrected import

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-3.5'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
          </div>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
              Waseem Mallah
            </h1>
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...
             bg-clip-text text-4xl tracking-tight text-transparent'>
              Full Stack Developer
            </span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter '>{HERO_CONTENT}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8 '>
          <div className='flex justify-center py-8'>
            <img src={profilePic} alt='' /> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;