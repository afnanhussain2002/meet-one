import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
// import logo from "@/public/icons/logo.svg";
import 'react-datepicker/dist/react-datepicker.css';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Meet One",
  description: "Video Calling App",
  /* icons: {
    icon:logo
  } */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      layout:{
        logoImageUrl: "../public/icons/logo.svg",
        socialButtonsVariant:'iconButton'
      },
      variables: {
        colorText: "#fff",
        colorPrimary:"#0e78f9",
        colorBackground: "#1c1f2e",
        colorInputBackground: "#252a41",
        colorInputText: "#fff",
        
      }
    }}
    >

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark-2`}
      >
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
