import React from 'react'
import JudgeParagraph from './JudgeParagraph'

const Judge = () => {

    const paragraph = [
        {
            topic: 'Innovation and Creativity: ',
            context: 'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
        },
        {
            topic: 'Functionality: ',
            context: 'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
        },
        {
            topic: 'Impact and Relevance: ',
            context: 'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
        },
        {
            topic: 'Technical Complexity: ',
            context: 'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
        },
        {
            topic: 'Adherence to Hackathon Rules: ',
            context: 'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
        },
    ]

  return (
    <div className='pt-12 md:px-26 md:gap-10 md:my-auto py-24 md:flex'>
        <img src="utils/8046554 1.png" className='w-full md:my-auto md:flex-1 md:h-fit' />
        <div className='md:flex-1'>
            <div className='py-3 text-center md:text-left text-white font-bold text-2xl'>
                <p>Judging Criteria</p>
                <p className='text-secondary'>Key attributes</p>
            </div>
            <div>
                <JudgeParagraph paragraph={paragraph} />
                <div className='relative m-auto flex py-3'>
                    <button className='py-4 px-12 md:items-start md:m-0 items-center m-auto bg-gradient-to-r rounded from-secondary to-tertiary text-white'>Read More</button>
                    <img src="utils/star.png" className='absolute right-10 top-6' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Judge