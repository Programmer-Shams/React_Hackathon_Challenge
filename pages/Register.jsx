import {useState} from 'react'
import RegisterForm from '../components/RegisterForm'
import Confirmation from '../components/Confirmation'

const Register = () => {
    // const [confirm, setConfirm] = useState(false)

  return (
    <div className='px-12 py-12 md:px-28 md:m-auto bg-primary'>
        <img src="utils/star pu.png" className='w-4 absolute right-10 top-80' />
        <div className='md:hidden'>
            <h2 className='text-2xl font-extrabold text-secondary'>Register</h2>
        </div>
        <div className='py-12 md:flex'>
            <img src="utils/3d-graphic-designer-showing-thumbs-up-png 1.png" className='w-full md:flex-1 md:fit md:h-full' />
            <div>
                <h2 className='text-2xl hidden md:flex font-extrabold text-secondary'>Register</h2>
                <div className='md:flex-1'>
                    <div className='text-white py-4'>
                        <div className='flex'>
                            <p className='text-sm mx-0 my-auto'>Be part of this movement!</p>
                            <div className='mx-auto mb-4'>
                                <div className=' flex my-auto'>
                                    <img className='m-auto w-7' src="utils/1f6b6-2640.png" />
                                    <img className='m-auto w-10' src="utils/image_processing20200511-10310-13mnlsx.png" />
                                </div>
                                <img src="utils/Line 9.png" />
                            </div>
                        </div>
                        <p className='text-2xl'>CREATE YOUR ACCOUNT</p>
                    </div>
                    
                </div>
                <RegisterForm />
            </div>
        </div>
    </div>
  )
}

export default Register