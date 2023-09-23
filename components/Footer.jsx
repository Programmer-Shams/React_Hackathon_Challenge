import React from 'react'
import { FaXTwitter, FaLocationDot } from 'react-icons/fa6'
import { FaFacebookF } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoLinkedin, BiSolidPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Footer = () => {

  const usefull = [
    {
      text: 'Overview',
      link: 'overview'
    },
    {
      text: 'Timeline',
      link: 'timeline'
    },
    {
      text: 'FAQs',
      link: 'faqs'
    },
    {
      text: 'Register',
      link: 'register'
    },
  ]

  return (
    <div className='bg-primary mb-0 relative py-12 px-12'>
      <img src="utils/star.png" className='absolute left-4 top-40' />
      <img src="utils/star (1).png" className='absolute right-40 top-80 w-3' />
      <div className='md:flex md:gap-40 md:px-28'>
        <div className='md:flex-1'>
          <h1 className='text-white font-extrabold text-2xl'>get<span className='text-secondary'>linked</span></h1>
          <p className='text-white py-6'>Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology</p>
        </div>
        <div className='text-white md:hidden flex'>
          <p>Term of Use</p>
          <div className='w-[2px] mx-4 bg-secondary'></div>
          <p>Privacy Policy</p>
        </div>
        <div className='md:flex-1'>
          <p className='text-secondary font-bold text-2xl py-4'>Useful Links</p>
          <div className='text-white'>
            {
              usefull.map((item, index)=>(
                <Link to={item.lnik} className='' key={index} >
                  <p className='py-1'>{item.text}</p>
                </Link>
              ))
            }
          </div>
        </div>
        <div className='text-white md:hidden gap-10 flex m-auto'>
          <p className='text-secondary text-lg py-4'>Follow us </p>
          <div className='flex gap-3 text-2xl my-auto'>
            <Link to='' ><BsInstagram /></Link>
            <Link to='' ><FaXTwitter /></Link>
            <Link to=''><FaFacebookF /></Link>
            <Link to=''><BiLogoLinkedin /></Link>
          </div>
        </div>
        <div className='md:flex-1'>
          <p className='text-secondary text-xl py-4'>Contact Us </p>
          <div className='text-white flex gap-5 my-auto mb-4'>
            <BiSolidPhoneCall className='text-2xl my-auto' />
            <p className='text-lg my-auto font-bold'>+234 6707653444</p>
          </div>
          <div className='text-white flex gap-5 my-auto'>
            <FaLocationDot className='text-2xl' />
            <p className='text-lg my-auto font-bold'>27,Alara Street Yaba 100012 Lagos State</p>
          </div>
        </div>
      </div>
      <div className='hidden md:flex md:px-28 md:py-4'>
        <div className='text-white md:h-fit flex'>
          <p>Term of Use</p>
          <div className='w-[2px] mx-4 bg-secondary'></div>
          <p>Privacy Policy</p>
        </div>
        <div className='text-white gap-10 flex m-auto'>
          <p className='text-secondary text-lg py-4'>Follow us </p>
          <div className='flex gap-3 md:text-lg text-2xl my-auto'>
            <Link to='' ><BsInstagram /></Link>
            <Link to='' ><FaXTwitter /></Link>
            <Link to=''><FaFacebookF /></Link>
            <Link to=''><BiLogoLinkedin /></Link>
          </div>
        </div>
      </div>
      <p className='text-white text-center py-6'>All rights reserved. © getlinked Ltd.</p>
      <img src="utils/star pu.png" className='absolute left-10 bottom-20 '/>
      <img src="utils/star.png" className='absolute right-20 bottom-48 '/>
    </div>
  )
}

export default Footer