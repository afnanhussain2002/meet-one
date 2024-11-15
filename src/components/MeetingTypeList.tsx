"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import NewMeeting from "@/public/icons/add-meeting.svg";
import ScheduleMeeting from "@/public/icons/schedule.svg";
import RecordMeeting from "@/public/icons/recordings.svg";
import JoinMeeting from "@/public/icons/join-meeting.svg";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";

const MeetingTypeList = () => {
    const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isInstantMeeting" | "isJoiningMeeting" | undefined
    >();
    const router = useRouter();
    const {user} = useUser();
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
      dateTime: new Date(),
      description: "",
      link: "",
    });
    const [callDetails, setCallDetails] = useState<Call>();

    const {toast} = useToast();
    const createMeeting = async() => {
        if (!client || !user) return;

        try {
          if (!values.dateTime) {
            toast({
              title: "Please select a date and time",
            })
            return;
          }
          const id = crypto.randomUUID();
          const call = client.call('default', id)

          if(!call) throw new Error('Failed to create call'); 

          const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();

          const description = values.description || 'Instant Meeting';

          await call.getOrCreate({
            data:{
              starts_at: startsAt,
              custom:{
                description
              }
            }
          })

          setCallDetails(call);

          if (!values.description) {
            router.push(`/meeting/${call.id}`);
          }

          toast({
            title: "Meeting created successfully",
          })
        } catch (error) {
          console.log(error);
          toast({
            title: "Failed to create meeting",
          })
        }
    }
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
      {!callDetails ? (
        <MeetingModal
        isOpen={meetingState === "isScheduleMeeting"}
        onclose={() => setMeetingState(undefined)}
        title="Create Meeting"
        handleClick={createMeeting}
        >
          <div className="flex flex-col gap-2.5">

            <label className="text-base text-normal leading-[22px] text-sky-2">Add a description</label>
        <Textarea className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0" onChange={(e) => setValues({...values, description: e.target.value})}/>
          </div>
        </MeetingModal>
      ): (
        <MeetingModal
      isOpen={meetingState === "isScheduleMeeting"}
      onclose={() => setMeetingState(undefined)}
      title=" Meeting Created"
      className="text-center"
      buttonText="Copy Meeting Link"
      handleClick={() =>{
        // navigator.clipboard.writeText(meetingLink);
        // toast({
        //   title: "Meeting link copied to clipboard",})
      }}
      image="/src/public/icons/copy.svg"
      />
      )}
      <MeetingModal
      isOpen={meetingState === "isInstantMeeting"}
      onclose={() => setMeetingState(undefined)}
      title="Start an Instant Meeting"
      className="text-center"
      buttonText="Start Meeting"
      handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
