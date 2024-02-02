import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Kavan Codes',
  description : 'March Break Coding Bootcamp',
  
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
         <html lang='en'>
        <body className={`${inter.className} `}>
    
          <Topbar />
          
          <main className='flex flex-row bg-hero-pattern'>
          <SignedIn>
            <LeftSidebar />
            </SignedIn>
            <section className='main-container '>
             
              <div className='w-full max-w-4xl'>{children}</div>
            </section>
            {/* @ts-ignore */}
            
          </main>
        
    
        </body>
      </html>
    </ClerkProvider>
  );
}
