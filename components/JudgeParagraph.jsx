import React from 'react'

const JudgeParagraph = ({paragraph}) => {
  return (
    <div>
        {
            paragraph.map((item, index) => (
                <p key={index} className='text-white md:text-left text-center py-3'>
                    <b className='text-secondary'>{item.topic}</b>
                    <span>{item.context}</span>
                </p>
            ))
        }
    </div>
  )
}

export default JudgeParagraph