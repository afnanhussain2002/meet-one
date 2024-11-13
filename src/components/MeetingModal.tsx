import React, { ReactNode } from 'react'

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: string;
  }

const MeetingModal = ({isOpen, onClose, children, handleClink, buttonText, title, image, buttonIcon }: MeetingModalProps) => {
  return (
    <div>MeetingModal</div>
  )
}

export default MeetingModal