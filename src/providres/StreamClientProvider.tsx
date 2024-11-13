import {
    StreamVideo,
  } from '@stream-io/video-react-sdk';
  
  const apiKey = process.env.NEXT_PUBLIC_STREAM_KEY;
 
  
 const StreamVideoProvider = () => {
    return (
      <StreamVideo client={client}>
     
      </StreamVideo>
    );
  };

  export default StreamVideoProvider;
  