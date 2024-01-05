import EventForm from '@/components/shared/EventForm';
import { getEventById } from '@/lib/mongodb/actions/event.actions';
import { UpdateEventParams } from '@/types';

import { auth } from '@clerk/nextjs';
import React from 'react'

type UpdateEventProps = {
    params: {
        id: string
    }
}

const UpdateEvent = async ({ params: {id}}: UpdateEventProps) => {

    const {sessionClaims} = auth();
    const userId = sessionClaims?.userId as string;

    // console.log("Event Id: "+ id);
    const event = await getEventById(id);

    console.log("From Update"+event);
    return (
        <>
            <section className='bg-priary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
                <h3 className='wrapper h3-bold text-center sm:text-left'>Update Event</h3>
            </section>

            <div className='wrapper my-8'>
                <EventForm userId= {userId} eventId={event._id} event={event} type="Update"/>
            </div>

        </>

    )
}

export default UpdateEvent;