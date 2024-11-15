import StreamClientProvider from "@/providres/StreamClientProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Meet One",
  description: "Video Calling App",
  /* icons: {
    icon:logo
  } */
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>
    <StreamClientProvider>

    {children}
    </StreamClientProvider>
  </main>;
};

export default RootLayout;
