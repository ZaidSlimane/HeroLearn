import React from 'react';

const Hero = () => {
    return (
        <div className='relative min-h-screen flex items-center justify-center'>
            {/* Background image */}
            <div className='absolute inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/ntic.jpg)` }} />

            {/* Blurred overlay */}
            <div className="absolute inset-0 bg-blue-500 bg-opacity-5 backdrop-filter backdrop-blur-md" />

            {/* Content */}
            <div className='max-w-[800px] mx-auto p-8 text-white relative z-10 text-center font-mono'>
                <div>
                    <p className='text-[#00df9a] font-bold'>
                        NTIC FACULTY
                    </p>
                    <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>
                        E-LEARNING PLATFROM NEVER BEEN EASY
                    </h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                            The future of learning is here.
                        </p>
                        <span className=' ml-10 text-[#00df9a] md:text-5xl sm:text-4xl text-3xl font-bold font-bold'>
                        Join Us
                    </span>
                    </div>


                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
