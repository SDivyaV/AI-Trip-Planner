import React from 'react'
import { Button } from '../button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-4 sm:mx-16 md:mx-28 lg:mx-56 gap-6 sm:gap-9'>
        <h1
            className='font-bold text-[32px] sm:text-[48px] md:text-[60px] flex items-center text-center mt-8 sm:mt-12 lg:mt-16'
        >
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-700'>
                Your Journey, Perfectly Planned: AI at Your Service
            </span>
        </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-500 text-center px-4 sm:px-8'>
              Effortlessly craft tailored itineraries and uncover hidden gems for a seamless, unforgettable journey.
            </p>
    
        <Link to={'/trip'}>
            <Button>
                Get Started, It's Free
            </Button>
        </Link>
        <img src='https://images.pexels.com/photos/3769146/pexels-photo-3769146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                className='rounded-lg object-cover'/>
    </div>
  )
}

export default Hero
