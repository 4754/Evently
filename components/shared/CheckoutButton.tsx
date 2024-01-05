"use client"

import { IEvent } from '@/lib/mongodb/database/models/event.model';
import { SignedIn, useUser, SignedOut } from '@clerk/nextjs';
import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';
import Checkout from './Checkout';

const CheckoutButton = ({event}:{event: IEvent}) => {
    const hasEventFinished = new Date(event.endDateTime) < new Date();
    const { user } = useUser();
    const userId = user?.publicMetadata.userId as string;
  return (
    <div className='flex items-center gap-3'>
        {/* We canot buy past event */}
        {hasEventFinished ?(
          <p className='p-2 text-red-400'>Sorry, tickets no longer available</p>) :(
          <>
           <SignedOut>
             <Button asChild className='button rounded-full' size="lg">
                <Link href="/sign-in">
                    Get tickets
                </Link>
             </Button>
           </SignedOut>
           <SignedIn>
             <Checkout userId={userId} event={event}/>
           </SignedIn>
          </>)}
    </div>
  )
}

export default CheckoutButton;