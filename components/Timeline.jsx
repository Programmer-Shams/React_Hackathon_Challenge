import React from 'react'
import TimelineItem from './TimelineItem'

const Timeline = () => {

    const timelines = [
        {
            topic: 'Hackathon Announcement',
            text: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
            date: 'November 18, 2023'
        },
        {
            topic: 'Team Registration begins',
            text: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
            date: 'November 18, 2023'
        },
        {
            topic: 'Team Registration ends',
            text: 'Interested Participants are no longer Allowed to register',
            date: 'November 18, 2023'
        },
        {
            topic: 'Announcement of the accepted team idea',
            text: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
            date: 'November 18, 2023'
        },
        {
            topic: 'Getlinked Hackathon 1.0 Offically Begins',
            text: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
            date: 'November 18, 2023'
        },
        {
            topic: 'Demo Day',
            text: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
            date: 'November 18, 2023'
        }
    ]

  return (
    <div className='py-16'>
        <div className='pb-5 text-center text-white'>
            <div className=' text-2xl font-bold'>
                <p>Timeline</p>
            </div>
            <div className='text-sm py-6'>
                <p className='pb-2'>Here is the breakdown of the time we</p>
                <p>anticipate using for the upcomig event.</p>
            </div>
            <img src="utils/star pu.png" className='w-[15px] ml-24' />
        </div>
        <TimelineItem timeline={timelines} />
    </div>
  )
}

export default Timeline