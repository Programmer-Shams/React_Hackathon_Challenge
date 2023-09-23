import React, { useEffect, useState } from 'react'
import Confirmation from './Confirmation'

const baseUrl = 'https://backend.getlinked.ai'

const RegisterForm = () => {
    const [team_name, setTeamName] = useState('')
    const [phone_number, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [project_topic, setTopic] = useState('')
    const [privacy_poclicy_accepted, setTerms] = useState(false)
    const [category, setCategory] = useState(null)
    const [group_size, setGroupsize] = useState(0)

    const [response, setResponse] = useState(null)
    const [confirm, setConfirm] = useState(false)

    // ========= ERROR STATES ========= //
    const [error, setError] = useState(null)
    const [teamError, setTeamError] = useState(null)
    const [emailError, setEmailError] = useState(null)
    const [phoneError, setPhoneError] = useState(null)
    const [projectError, setProjectError] = useState(null)
    const [categoryError, setCategoryError] = useState(null)

    const inputs = [
        {
            label: 'Team’s Name',
            type: 'text',
            value: team_name,
            change: e => setTeamName(e.target.value),
            place: 'Enter the name of your group'
        },
        {
            label: 'Phone',
            type: 'number',
            value: phone_number,
            change: e => setPhone(e.target.value),
            place: 'Enter the name of your group'
        },
        {
            label: 'Email',
            type: 'email',
            value: email,
            change: e => setEmail(e.target.value),
            place: 'Enter the name of your group'
        },
        {
            label: 'Project Topic',
            type: 'text',
            value: project_topic,
            change: e => setTopic(e.target.value),
            place: 'Enter the name of your group'
        }
    ]

    
    useEffect(() => {
        categories()
    }, [])

    const selection = [
        {
            name: 'Category',
            select: response,
            place: 'Select your category',
            value: category,
            change: e => setCategory(e.target.value)
        },
        {
            name: 'Group size',
            select: [
                {
                    name: '1',
                    id: '1'
                },
                {
                    name: '2',
                    id: '2'
                },
                {
                    name: '3',
                    id: '3'
                },
                {
                    name: '4',
                    id: '4'
                },
                {
                    name: '5',
                    id: '5'
                },
                {
                    name: '6',
                    id: '6'
                },
                {
                    name: '7',
                    id: '7'
                },
                {
                    name: '8',
                    id: '8'
                },
                {
                    name: '9',
                    id: '9'
                },
                {
                    name: '10',
                    id: '10'
                },
            ],
            place: 'Select',
            value: group_size,
            change: e => setGroupsize(e.target.value)
        }
    ]

    const categories = async () => {
        const res = await fetch(`${baseUrl}/hackathon/categories-list`)
        const response = await res.json()
        setResponse(response)
    }

    const registerBody = {
        team_name,
        phone_number,
        email,
        project_topic,
        category,
        group_size,
        privacy_poclicy_accepted
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(`${baseUrl}/hackathon/registration`, {
            method: 'POST',
            body: JSON.stringify(registerBody),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(registerBody)
        const response = await res.json()
        if(!res.ok){
            setError('All Fields are Required')
        }
        if(res.ok){
            setEmail('')
            setTopic('')
            setPhone('')
            setTeamName('')
            setError(null)
            setCategory(null)
            setGroupsize(null)
            setConfirm(!confirm)
        }
    }

    const closeConfirm = () => {
        setConfirm(!confirm)
        location.assign('/')
    }

    const checked = () => {
        setTerms(!privacy_poclicy_accepted)
    }
    
  return (
    <div className='relative md:max-w-md'>
        <img src="utils/star (1).png" className='absolute w-4 top-4 left-[-30px]' />
        <img src="utils/star pu.png" className='absolute w-3 bottom-72 right-[-20px]' />
        <form>
            { error && <div className='py-3 border-2 rounded bg-red-300 text-center border-red-700 text-red-700 font-bold'>{error}</div> }
            {
                inputs.map((item, index)=>(
                    <div className='flex-col my-4 text-white w-full' key={index}>
                        <span className='p-2'>{item.label}</span>
                        <input 
                            type={item.type}
                            value={item.value}
                            onChange={item.change}
                            placeholder={item.place}
                            className='w-full outline-none px-4 bg-transparent border-2 rounded py-3'
                        />
                    </div>
                ))
            }
            <div className='flex w-full gap-3 justify-between'>
                {
                    selection.map((item, index)=>(
                        <div  key={index}>
                            <span className='p-2 text-white'>{item.name}</span>
                            <select className='w-full outline-none px-4 bg-transparent border-2 text-white rounded py-3 ' onChange={item.change} name={item.name}>
                            <option value={'select'} className='bg-primary text-white'>{item.place}</option>
                            {
                                item.select?.map((objects, index)=>(
                                    <option 
                                        className='bg-primary text-white' 
                                        value={objects.id}
                                        key={index}>{objects.name}</option>
                                ))
                            }
                            </select>
                        </div>
                    ))
                }
            </div>
            <p className='text-center text-secondary pt-6 text-[10px]'>Please review your registration details before submitting</p>
            <div className='flex m-auto py-5'>
                <input 
                    type="checkbox" 
                    className='m-auto p-2' 
                    name="checker" 
                    id="checker"
                    onChange={checked}
                />
                <label htmlFor="checker" className='m-auto text-white text-center text-xs'>I agreed with the event terms and conditions and privacy policy</label>
            </div>
            <div className='py-6 m-auto items-center flex'>
                <button onClick={handleSubmit} className='py-4 px-20 items-center m-auto bg-gradient-to-r rounded from-secondary to-tertiary text-white'>Submit</button>
            </div>
        </form>
        <Confirmation confirm={confirm} closeConfirm={closeConfirm} />
    </div>
  )
}

export default RegisterForm