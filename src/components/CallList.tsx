"use client";
import { useGetCalls } from "@/hooks/useGetCalls";
import { CallRecording } from "@stream-io/node-sdk";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import MeetingCard from "./MeetingCard";
import { Call } from "@stream-io/video-react-sdk";
import Loader from "./Loader";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();

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
        return [];
    }
  };
  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
        return "No ended calls";
      case "recordings":
        return "No recordings";
      case "upcoming":
        return "No upcoming calls";
      default:
        return "";
    }
  };
  const calls = getCalls();
  const noCallsMessage = getNoCallsMessage();

  if(isLoading) return <Loader/>
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        calls.map((meeting: Call | CallRecording) => (
          <MeetingCard
            key={(meeting as Call).id}
            icon={
              type === "ended"
                ? "/src/public/icons/call-ended.svg"
                : type === "recordings"
                ? "/src/public/icons/recordings.svg"
                : "/src/public/icons/upcoming.svg"
            }
            title={
              (meeting as Call).state.custom.description.substring(0, 26) ||
              "No title"
            }
            date={
              (meeting as Call).state.startsAt?.toLocaleString() ||
              (meeting as CallRecording).start_time.toLocaleString()
            }
            isPreviousMeeting={type === "ended"}
            buttonIcon1={
              type === "recordings" ? "/src/public/icons/play.svg" : undefined
            }
            handleClick={
              type === "recordings"
                ? () => router.push(`${(meeting as CallRecording).url}`)
                : () => router.push(`/meeting/${(meeting as Call).id}`)
            }
            link={
              type === "recordings"
                ? (meeting as CallRecording).url
                : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                    (meeting as Call).id
                  }`
            }
            buttonText={type === "recordings" ? "Play" : "Start"}
          />
        ))
      ) : (
        <h1>{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
