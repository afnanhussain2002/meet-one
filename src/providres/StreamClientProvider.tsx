import {
    StreamVideo,
  } from '@stream-io/video-react-sdk';
import { ReactNode } from 'react';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
 
  
 const StreamVideoProvider = ({children}:{children: ReactNode}) => {
    return (
      <StreamVideo client={client}>
     
      </StreamVideo>
    );
  };

  export default StreamVideoProvider;
  