import React from 'react'

const BigIdea = () => {
  return (
    <div className='pt-4 pb-16 md:relative shadow-sm md:px-24 md:flex'>
        <div className='w-full md:flex-1 my-auto py-12 '>
            <img src="utils/The big idea.png" className='w-full md:w-fit md:mx-auto md:h-full' />
            <img src="utils/arrow.png" className='m-auto' />
        </div>
                <img className='absolute hidden md:flex  md:w-4 left-40 top-20' src="utils/star pu.png" />
        <div className='md:text-left md:my-auto md:flex-1'>
            <div className=' relative font-bold text-white md:text-left text-2xl text-center py-4'>
                <div>
                    <p>Introduction to getlinked</p>
                    <p className='text-secondary'>tech Hackathon 1.0</p>
                </div>
                <img className='absolute md:w-6 right-4 bottom-8' src="utils/star pu.png" />
            </div>
            <p className='text-white md:text-left text-center text-lg'>Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
            day: to shape the future. Whether you're 
            a coding genius, a design maverick, or a 
            concept wizard, you'll have the chance to transform your ideas into reality. Solving 
            real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world, that's what we're all about!</p>
        </div>
    </div>
  )
}

export default BigIdea