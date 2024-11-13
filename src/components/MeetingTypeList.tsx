"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import AddMeeting from '@/public/icons/add-meeting.svg'

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<'isScheduleMeeting' | 'isInstantMeeting' | 'isJoiningMeeting' | undefined>();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard img={AddMeeting} title="New Meeting" description="Start an instant meeting" handleClink={() => setMeetingState('isJoiningMeeting')}/>
    </section>
  );
};

export default MeetingTypeList;
