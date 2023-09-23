import React from 'react'

const PartnerAndSponsor = () => {
  return (
    <div className='max-w-full py-12'>
        <div className='text-white md:max-w-md md:m-auto text-center'>
            <h2 className='font-extrabold text-2xl pb-4'>Partners and Sponsors</h2>
            <p>Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors</p>
        </div>
        <div className='m-auto items-center justify-center md:border md:py-28 md:mx-24 rounded-md border-2 border-secondary p-12 my-12'>
          <div>
            <div className='flex w-full justify-between'>
              <div className='w-[30%] m-auto'>
                <img className='h-full m-auto' src="utils/Liberty company logo white colour.png" />
              </div>
              <div className='w-1 bg-secondary'></div>
              <div className='w-[30%] m-auto'>
                <img className='h-full m-auto' src="utils/Liberty company logo white.png" />
              </div>
              <div className='w-1 bg-secondary'></div>
              <div className='w-[30%] m-auto'>
                <img className='h-full m-auto' src="utils/Winwise logo White colour 1.png" />
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-10'>
            <div className='flex h-1 w-full bg-secondary my-2 justify-between'></div>
            <div className='flex h-1 w-full bg-secondary my-2 justify-between'></div>
            <div className='flex h-1 w-full bg-secondary my-2 justify-between'></div>
          </div>
          <div>
            <div className='flex w-full justify-between'>
              <div className='w-[30%] m-auto'>
                <img className='h-full m-auto' src="utils/wisper logo white.png" />
              </div>
              <div className='w-1 bg-secondary'></div>
              <div className='w-[30%] m-auto'>
                <img className='h-full m-auto' src="utils/Paybox.png" />
              </div>
              <div className='w-1 bg-secondary'></div>
              <div className='w-[30%] m-auto'>
                <img className='h-full m-auto' src="utils/Vizual Plus.png" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PartnerAndSponsor