import React, { useState } from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const baseUrl = ' https://backend.getlinked.ai'

const ContactForm = () => {
    const [phone_number, setTeam] = useState('')
    const [first_name, setTopic] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState(null)
    const [response, setResponse] = useState(null)

    const inputs = [
        {
            place: 'First Name',
            type: 'text',
            value: first_name,
            change: e => setTopic(e.target.value)
        },
        {
            place: 'Phone Number',
            type: 'number',
            value: phone_number,
            change: e => setTeam(e.target.value)
        },
        {
            place: 'Email',
            type: 'email',
            value: email,
            change: e => setEmail(e.target.value)
        }
    ]

    const icons = [
        {
            location: '',
            icon: <BiLogoLinkedin />
        },
        {
            location: '',
            icon: <BsInstagram />
        },
        {
            location: '',
            icon: <FaFacebookF />
        },
        {
            location: '',
            icon: <FaXTwitter />
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();

        const information = {
            phone_number, first_name, email, message
        }

        const res = await fetch(`${baseUrl}/hackathon/contact-form`, {
            method: 'POST',
            body: JSON.stringify(information),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const response = await res.json()
        if(!res.ok){
            setError('All Fields are Required')
        }

        if(res.ok){
            setEmail('')
            setMessage('')
            setTeam('')
            setTopic('')
            setError(null)
            setResponse('You have Successfully Submit Your Message, It will Be Address Appropriately')
        }
        

    }

  return (
    <div className='md:flex-1 md:max-w-md md:mx-auto'>
        <form>
            {response && alert(response)}
            { error && <div className='py-3 border-2 rounded bg-red-300 text-center border-red-700 text-red-700 font-bold'>{error}</div> }
            {
                inputs.map((item, index) => (
                    <div key={index}>
                        <input
                            type={item.type}
                            value={item.value}
                            onChange={item.change}
                            placeholder={item.place}
                            className='w-full my-3 outline-none text-white bg-transparent px-4 py-4 border-2 rounded'
                        />
                    </div>
                ))
            }
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder='Message' name="Message" className='w-full my-3 outline-none text-white bg-transparent px-4 py-4 border-2 rounded h-40'></textarea>
            <div className='py-6 m-auto items-center flex'>
                <button onClick={handleSubmit} className='py-4 px-20 items-center m-auto bg-gradient-to-r rounded from-secondary to-tertiary text-white'>Submit</button>
            </div>
        </form>
        <img src="utils/star.png" className='w-4 absolute right-5 bottom-80' />
        <img src="utils/star pu.png" className='w-3 absolute' />
        <div className='pt-10 m-auto md:hidden'>
            <p className='text-secondary text-center'>Share on</p>
            <div className='my-4 flex m-auto items-center'>
                {
                    icons.map((obj, index)=> (
                        <Link className='text-center m-auto text-white text-2xl' to={obj.location} key={index}>{obj.icon}</Link>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ContactForm