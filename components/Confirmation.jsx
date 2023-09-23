import React from 'react'

const Confirmation = ({confirm, closeConfirm}) => {

  return (
    <div className={confirm ? 'confirm' : 'hidden'}>
        <div className='border-2 relative border-secondary px-16 py-20 bg-transparent rounded '>
            <div className='w-full relative mb-4 flex'>
                <img className=' top-0 left-[-12px] flex' src="utils/successfully-done-5108472-4288033 1.png" />
                <img className='absolute top-0 right-0' src="utils/successful-man-3025713-2526911 1.png" />
            </div>
            <div className='text-center '>
                <h2 className='font-bold text-2xl py-6'>Congratulations you have successfully Registered!</h2>
                <p>Yes, it was easy and you did it! check your mail box for next step</p>
            </div>
            <button onClick={closeConfirm} className='py-5 px-20 items-center mt-8 w-full m-auto bg-gradient-to-tr rounded from-secondary to-tertiary text-white'>Back</button>
        </div>
    </div>
  )
}

export default Confirmation