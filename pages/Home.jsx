import React from 'react'
import VirtualTouch from '../components/VirtualTouch'
import BigIdea from '../components/BigIdea'
import RulesAndGuild from '../components/RulesAndGuild'
import Judge from '../components/Judge'
import Faq from '../components/Faq'
import Timeline from '../components/Timeline'
import Prize from '../components/Prize'
import PrivacyPolicy from '../components/PrivacyPolicy'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div className='home w-full overflow-x-hidden relative bg-primary md:px-20 py-20 px-8'>
        <div className='w-fit relative m-auto md:absolute md:top-10 md:right-80 justify-center items-center'>
            <h1 className='text-white italic text-center'>Igniting a Revolution in HR Innovation</h1>
            <img className=' absolute right-0 ' src="utils/Vector 4.png"/>
        </div>
        <div className='w-[200px] top-2 left-4 absolute bg-gradient-to-tl to-primary from-secondary '></div>
        <div className='flex justify-between md:absolute md:top-20 md:left-40 max-w-xs my-8 mx-auto'>
            <img src="utils/star.png"/>
            <img className='md:absolute md:left-96' src="utils/star (1).png"/>
        </div>
        <div className='md:flex md:justify-between md:max-h-[85vh] md:mx-auto md:px-20'>
            <div className='md:items-start md:mx-auto md:scale-125 md:my-auto'>
                <div className=' relative text-center md:text-left text-4xl font-extrabold pb-4'>
                    <h2 className='text-white relative'>getlinked Tech<span className='absolute right-[130px] top-[-20px]'><img src="utils/Creative 1.png" /></span></h2>
                    <h2 className='flex text-white md:justify-start justify-center'>Hackathon <span className='text-secondary'>1.0</span><img src='utils/chain-9365116-7621444.png' /><img src='utils/1f4a5.png' /></h2>
                </div>
                <div className='text-center md:text-left text-white'>
                    <p>Participate in getlinked tech Hackathon</p> 
                    <p>2023 stand a chance to win a Big prize</p>
                </div>
                <div className='relative'>
                <Link to='register' ><button className='from-tertiary rounded md:flex to-secondary bg-gradient-to-l text-white md:mx-0 my-4 mx-auto flex h-fit py-3 px-8'>Register</button></Link>
                    <img className='absolute right-[150px] bottom-10' src="utils/star (1).png" />
                </div>
                <div className="countdown py-4 md:items-start items-center md:justify-start justify-center m-auto md:m-0 md:block flex text-5xl text-white">
                    <div className='flex'>
                        <p>00<span>H</span></p>
                        <p>00<span>M</span></p>
                        <p>00<span>S</span></p>
                    </div>
                </div>
            </div>
            <VirtualTouch />
        </div>
        <BigIdea />
        <hr />
        <RulesAndGuild />
        <hr />
        <Judge />
        <hr />
        <Faq />
        <hr />
        <Timeline />
        <hr />
        <Prize />
        <hr />
        <PrivacyPolicy />
    </div>
  )
}

export default Home