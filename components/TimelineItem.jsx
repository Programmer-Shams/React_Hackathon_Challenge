import React from 'react'

const TimelineItem = ({timeline}) => {
  return (
    <div>
        {
            timeline.map((item, index) => (
                <div className='text-white relative overflow-y-hidden mb-10' key={index}>
                    <div className='absolute m-auto bottom-0 flex-col'>
                        <div className='bg-secondary w-[3px] my-2 relative h-[200px] mx-auto '>

                        </div>
                        <div className='from-primary to-secondary bg-gradient-to-tl w-[30px] h-[30px] text-center items-center font-bold rounded-full '>{index+1}</div>
                    </div>
                    <div className='pl-12'>
                        <b className='text-secondary'>{item.topic}</b>
                        <p>{item.text}</p>
                        <b className='text-secondary'>{item.date}</b>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default TimelineItem