import React from 'react'

const RulesAndGuild = () => {
  return (
    <div className='pt-4 md:flex-row-reverse md:relative md:gap-10 md:p-24 md:flex pb-12'>
        <div className='md:flex-1 md:flex md:relative md:items-end'>
          <img src="utils/Ellipse 1.png" className='hidden md:top-24 md:right-6 md:absolute md:flex' />
          <img src="utils/7450159 1.png" className='w-full z-20 md:flex md:flex-end md:h-fit ' />
        </div>
        <div className='md:flex-1 md:my-auto'>
            <div className='py-3 text-center md:text-left text-white font-bold text-2xl'>
                <p>Rules and</p>
                <p className='text-secondary'>Guidelines</p>
            </div>
            <p className='text-white md:text-md md:text-left text-center text-lg'>Our tech hackathon is a melting pot of 
            visionaries, and its purpose is as clear as day:
            to shape the future. Whether you're a coding
            genius, a design maverick, or a concept 
            wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world 
            problems, pushing the boundaries of 
            technology, and creating solutions that can 
            change the world, that's what we're all about!</p>
        </div>
    </div>
  )
}

export default RulesAndGuild