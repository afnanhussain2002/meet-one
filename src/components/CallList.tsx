'use client'
import { useGetCalls } from '@/hooks/useGetCalls'
import { CallRecording } from '@stream-io/node-sdk'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const CallList = ({type}: {type: 'ended' | 'upcoming' | 'recordings'}) => {
  const {endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCalls()

  const router = useRouter(); 
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const getCalls = () => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "recordings":
        
      return callRecordings;
      case "upcoming":
        return upcomingCalls;       
      default:
        return[]
    }
  }
  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return 'No ended calls';
      case "recordings":
        
      return 'No recordings';
      case "upcoming":
        return 'No upcoming calls';       
      default:
        return''
    }
  }
  return (
    <div>CallList</div>
  )
}

export default CallList