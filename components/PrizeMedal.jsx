import React from 'react'


const PrizeMedal = ({prize}) => {
  return (
    <div>
        <div className='relative py-10'>
            <img className='absolute items-center flex left-3 top-0' src={prize.medal} />
            <div className='pb-5 pt-16 border-2 px-2 border-secondary rounded-md text-white text-center'>
                <span>{prize.position}</span>
                <p className='text-secondary'>{prize.price}</p>
            </div>
        </div>
    </div>
  )
}

export default PrizeMedal