import React from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { BiLogoLinkedin } from 'react-icons/bi'

const Contact = () => {
  return (
    <div className='bg-primary md:px-40 items-center md:my-auto md:flex relative py-12 px-12'>
        <Link to='..' className='text-white md:hidden font-bold border-2 justify-center flex rounded-full border-secondary w-fit p-2'>
            <MdOutlineArrowBackIos />
        </Link>
        <img src="utils/star pu.png" className='absolute left-1/2 top-20 w-4' />
        <div className='text-white relative mx-auto md:flex-1 hidden md:block md:text-left'>
          <h2 className='text-2xl text-secondary font-bold'>Get in touch</h2>
          <p>Contact Information</p>
          <p>27,Alara Street Yaba 100012 Lagos State</p>
          <p>Call Us : 07067981819</p>
          <p>we are open from Monday-Friday 08:00am - 05:00pm</p>
          <div className='text-white gap-10 m-auto'>
            <p className='text-secondary text-lg py-4'>Follow us </p>
            <div className='flex gap-3 md:text-lg text-2xl my-auto'>
              <Link to='' ><BsInstagram /></Link>
              <Link to='' ><FaXTwitter /></Link>
              <Link to=''><FaFacebookF /></Link>
              <Link to=''><BiLogoLinkedin /></Link>
            </div>
          </div>
        </div>
        <div className='py-12 md:hidden relative'>
            <h2 className='text-2xl max-w-[80%] text-secondary font-bold'>Questions or need assistance? Let us know about it</h2>
            <img src="utils/star (1).png" className='absolute right-5 top-20 w-6' />
            <p className='text-white pt-8'>Email us below to any question related to our event</p>
        </div>
        <ContactForm />
    </div>
  )
}

export default Contact