
import React from "react";

import VideoInterface from "@/components/VideoInterface";
import ChatWindow from "@/components/ChatWindow";

import { currentUser } from '@clerk/nextjs';
 
export default async function Page() {
  const user = await currentUser();
 
  if (!user) return <div>Not signed in</div>;
 

  
  return (
    <div className="">

      <h1 className="text-slate-500 mb-[10px] font-black text-[50px]">
        Livestream.
        </h1>
      {/* Game Streaming Platform */}
      {/* Video Interface */}
      <VideoInterface />
      <ChatWindow user={user?.firstName || user?.username}/>
      {/* Chat Panel */}
    
    </div>
    
    
  );
};
