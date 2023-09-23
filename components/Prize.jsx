import React from 'react'
import PrizeMedal from './PrizeMedal'
import PartnerAndSponsor from './PartnerAndSponsor'

const Prize = () => {

    const prize = [
        {
            medal: 'utils/silver_medal 1.png',
            position: '2nd Runner',
            price: 'N300,000'
        },
        {
            medal: 'utils/gold_medal 1.png',
            position: '1st Runner',
            price: 'N400,000'
        },
        {
            medal: 'utils/bronze_medal 1.png',
            position: '3rd Runner',
            price: 'N150,000'
        }
    ]

  return (
    <div className='py-12 max-w-full md:px-24 overflow-x-hidden'>
        <div className='md:flex justify-end'>
            <div className='text-center text-white py-16 md:text-left'>
                <h2 className='text-2xl font-bold '>
                    <p>Prizes and</p>
                    <p className='text-secondary'>Rewards</p>
                </h2>
                <p className='text-md'>Highlight of the prizes or rewards for winners and for participants.</p>
            </div>
        </div>
        <div className='md:flex md:justify-between md:py-12 md:px-28'>
            <div>
                <img className='w-full md:w-fit' src="utils/9486889 1.png" />
                <img className='w-[15px] left-10 ml-5' src="utils/star.png" />
            </div>
            <div>
                <img src="utils/star.png" />
                <div className='flex justify-between gap-5 py-6'>
                    <PrizeMedal prize={prize[0]} />
                    <div className='relative py-10'>
                        <img className='absolute w-[400px] top-0' src={prize[1].medal} />
                        <div className='text-white font-bold pt-20 pb-5 px-2 text-center border-2 border-tertiary rounded-lg'>
                            <span>{prize[1].position}</span>
                            <p className='text-tertiary'>{prize[1].price}</p>
                        </div>
                    </div>
                    <PrizeMedal prize={prize[2]} />
                </div>
            </div>
        </div>
        <PartnerAndSponsor />
    </div>
  )
}

export default Prize