import React from 'react'

const Policy = ({policies}) => {
  return (
    <div>
        {
            policies.map((item, index)=>(
                <div key={index} className='text-white flex gap-5 py-3' >
                    <img src="utils/list terms.png" className='h-full' />
                    <p>{item.note}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Policy