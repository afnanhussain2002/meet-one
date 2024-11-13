"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import NewMeeting from "@/public/icons/add-meeting.svg";
import ScheduleMeeting from "@/public/icons/schedule.svg";
import RecordMeeting from "@/public/icons/recordings.svg";
import JoinMeeting from "@/public/icons/join-meeting.svg";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isInstantMeeting" | "isJoiningMeeting" | undefined
    >();
    const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 ">
      <HomeCard
        img={NewMeeting}
        title="New Meeting"
        description="Start an instant meeting"
        handleClink={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        img={ScheduleMeeting}
        title="Schedule Meeting"
        description="Plan your meeting"
        handleClink={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        img={RecordMeeting}
        title="Video Recordings"
        description="Check out your recordings"
        handleClink={() => router.push('/recordings')}
        className="bg-purple-1"
      />
      <HomeCard
        img={JoinMeeting}
        title="Join Meeting"
        description="Via invitation link"
        handleClink={() => setMeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
