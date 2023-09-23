import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoCloseSharp } from 'react-icons/io5'

const Header = () => {
  const [isActive, setActive] = useState(false)

  const nav = [
    {
      title: 'Timeline',
      link: 'timeline'
    },
    {
      title: 'Overview',
      link: 'overview'
    },
    {
      title: 'FAQs',
      link: 'faqs'
    },
    {
      title: 'Contact',
      link: 'contact'
    }
  ]

  const show = () => {
    setActive(!isActive)
  }

  const unshow = () => {
    setActive(!isActive)
  }

  return (
    <div className='flex md:px-24 transition-all duration-300 shadow-gray-800 sticky top-0 z-50 shadow-sm justify-between w-full bg-primary p-8 max-w-full '>
        <div>
            <Link to='/'><h1 className='text-white font-extrabold text-2xl'>get<span className='text-secondary'>linked</span></h1></Link>
        </div>
        <div className={`${isActive ? 'fold' : 'unfold'} gap-10 transition-all duration-300 md:relative md:p-0 hidden md:top-0 md:my-auto md:left-0 md:bg-transparent md:flex text-xs relative  `}>
          <div onClick={unshow} className='text-white p-1 absolute right-16 top-4 border-2 border-secondary md:mx-auto rounded-full w-fit md:hidden cursor-pointer'>
            <IoCloseSharp />
          </div>
          <div className='text-white md:flex my-auto text '>
            {
              nav.map((item, index) => (
                <NavLink className='px-4 span text-xs' to={item.link} key={index}>{item.title}</NavLink>
              ))
            }
          </div>
          <Link to='register' ><button className='from-tertiary md:hidden to-secondary bg-gradient-to-l text-white h-fit py-3 px-8'>Register</button></Link>
        </div>
          <Link to='register' ><button className='from-tertiary rounded hidden md:flex to-secondary bg-gradient-to-l text-white h-fit py-3 px-8'>Register</button></Link>
        <div onClick={show} className='my-auto md:hidden cursor-pointer'>
            <img src="utils/Vector.png"/>
        </div>
    </div>
  )
}

export default Header