import React from 'react'
import Policy from './Policy'

const PrivacyPolicy = () => {

  const policies = [
    {
      note: 'The Standard License grants you a non-exclusive right to navigate and register for our event'
    },
    {
      note: 'You are licensed to use the item available at any free source sites, for your project developement'
    }
  ]

  return (
    <div className=' relative md:gap-10 md:px-24 py-28 md:flex'>
      <img src="utils/star (1).png" className='absolute w-4 top-10 right-16' />
      <div className='md:flex-1'>
        <div>
          <div className='text-2xl text-white font-bold text-center'>
            <p>Privacy Policy and</p>
            <p className='text-secondary'>Terms</p>
          </div>
          <p className='text-slate-300 text-center p-4'>Last updated on September 12, 2023</p>
        </div>
        <p className='text-center text-white py-6'>Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant</p>
        <div className='relative'>
          <img src="utils/star pu.png" className='absolute w-8 bottom-2 right-16' />
        </div>
        <div>
          <div className='rounded-md border-2 border-secondary py-12 px-4'>
            <p className='text-white text-center'>At getlinked tech Hackathon 1.0, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy.</p>
            <div className='pt-6'>
              <b className='text-secondary'>Licensing Policy</b>
              <p className='text-white py-2'>Here are terms of our Standard License:</p>
            </div>
            <div>
              <Policy policies={policies} />
            </div>
            <button className='py-4 px-12 mt-10 cursor-pointer flex items-center m-auto bg-gradient-to-r rounded from-secondary to-tertiary text-white'>Read More</button>
          </div>
        </div>
      </div>
      <div className='pt-20 pb-40 relative md:flex-1'>
        <img className='w-6 absolute top-40' src="utils/star pu.png" />
        <img className='w-full' src="utils/Vector (1).png" />
        <img className='w-full absolute bottom-0' src="utils/08 1.png" />
        <img className='w-3 absolute top-60 right-20' src="utils/star.png" />
        <img className='w-2 absolute bottom-20 left-10' src="utils/star.png" />
      </div>
    </div>
  )
}

export default PrivacyPolicy