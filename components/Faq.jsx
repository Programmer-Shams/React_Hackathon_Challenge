import React from 'react'
import FaqQuestions from './FaqQuestions'

const Faq = () => {

    const questions = [
        {
            question: 'Can I work on a project I started before the hackathon?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga ipsa perferendis consequuntur sed. Aliquid obcaecati quaerat ullam tempore architecto corporis modi reprehenderit doloribus pariatur commodi illum ab minima, rem eius officiis a ipsam reiciendis illo soluta, in cum, beatae corrupti eligendi quam. Possimus aliquid numquam, iure natus aliquam praesentium! Itaque.'
        },
        {
            question: 'What happens if I need help during the hackathon?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga ipsa perferendis consequuntur sed. Aliquid obcaecati quaerat ullam tempore architecto corporis modi reprehenderit doloribus pariatur commodi illum ab minima, rem eius officiis a ipsam reiciendis illo soluta, in cum, beatae corrupti eligendi quam. Possimus aliquid numquam, iure natus aliquam praesentium! Itaque.'
        },
        {
            question: 'What happens if I don\'t have an idea for a project?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga ipsa perferendis consequuntur sed. Aliquid obcaecati quaerat ullam tempore architecto corporis modi reprehenderit doloribus pariatur commodi illum ab minima, rem eius officiis a ipsam reiciendis illo soluta, in cum, beatae corrupti eligendi quam. Possimus aliquid numquam, iure natus aliquam praesentium! Itaque.'
        },
        {
            question: 'Can I join a team or do I have to come with one?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga ipsa perferendis consequuntur sed. Aliquid obcaecati quaerat ullam tempore architecto corporis modi reprehenderit doloribus pariatur commodi illum ab minima, rem eius officiis a ipsam reiciendis illo soluta, in cum, beatae corrupti eligendi quam. Possimus aliquid numquam, iure natus aliquam praesentium! Itaque.'
        },
        {
            question: 'What happens after the hackathon ends',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga ipsa perferendis consequuntur sed. Aliquid obcaecati quaerat ullam tempore architecto corporis modi reprehenderit doloribus pariatur commodi illum ab minima, rem eius officiis a ipsam reiciendis illo soluta, in cum, beatae corrupti eligendi quam. Possimus aliquid numquam, iure natus aliquam praesentium! Itaque.'
        },
        {
            question: 'Can I work on a project I started before the hackathon?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatem fuga ipsa perferendis consequuntur sed. Aliquid obcaecati quaerat ullam tempore architecto corporis modi reprehenderit doloribus pariatur commodi illum ab minima, rem eius officiis a ipsam reiciendis illo soluta, in cum, beatae corrupti eligendi quam. Possimus aliquid numquam, iure natus aliquam praesentium! Itaque.'
        }
    ]

  return (
    <div className='py-8 relative md:justify-between md:m-auto md:flex'>
        <img src="utils/star pu.png" className='w-[20px] left-4 top-8 absolute'/>
        <div className='md:flex-1'>
            <div className='text-center text-white'>
                <div className=' text-2xl font-bold'>
                    <p>Frequently Ask</p>
                    <p className='text-secondary'>Question</p>
                </div>
                <div className='text-sm py-6'>
                    <p className='pb-2'>We got answers to the questions that you might</p>
                    <p>want to ask about getlinked Hackathon 1.0</p>
                </div>
            </div>
            <div>
                <FaqQuestions faq={questions} />
            </div>
        </div>
        <div className='py-8 md:flex-1'>
            <div className='flex relative m-auto items-center top-20 w-full left-1/4 gap-5'>
                <img className='absolute left-[-60px] md:left-40 top-2' src="utils/_1.png" />
                <img className='w-[15px] absolute left-14' src="utils/star pu.png" />
                <img className='absolute left-3 md:left-20' src="utils/_.png" />
                <img className='absolute top-2 left-20 md:left-6' src="utils/_2.png" />
            </div>
            <img className='pt-20 w-full md:m-auto md:w-[30rem]' src="utils/cwok_casual_21 1.png" />
            <img className='w-[20px] absolute right-14' src="utils/star.png" />
        </div>
    </div>
  )
}

export default Faq