import {useState} from 'react'

const FaqQuestions = ({faq}) => {
    const [expand, setExpand] = useState(false)

    const view = () => {
        setExpand(!expand)
    }

    // const unview = () => {
    //     setExpand(!expand)
    // }

  return (
    <div>
        {
            faq.map((item, index)=>(
                <div key={index} className='relative'>
                    <div className='text-white py-4 pr-8'>
                        <div>
                            <span onClick={view} className='text-secondary text-4xl absolute right-0 cursor-pointer'>+</span>
                            {/* <span onClick={unview} className='text-secondary text-4xl absolute right-0 cursor-pointer'>-</span> */}
                            <b className=''>{item.question}</b>
                        </div>
                        <p className={expand ? 'py-6' : 'hidden'}>{item.answer}</p>
                    </div>
                    <hr className='bg-secondary border-0 h-[2px]' />
                </div>
            ))
        }
    </div>
  )
}

export default FaqQuestions