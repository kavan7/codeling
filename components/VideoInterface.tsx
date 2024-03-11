"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import { Director, View } from '@millicast/sdk';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardHeaderTwo, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { count } from "console";







const VideoInterface: React.FC = () => {
  const yourStreamAccountId = process.env.NEXT_PUBLIC_ACCOUNT_ID as string;
  const yourStreamName = 'Codeling';
  const [isLive, setIsLive] = useState<boolean>(true)
  const [counter, setCounter] = useState(0);
  const tokenGenerator = () => Director.getSubscriber({
    streamName: yourStreamName,
    streamAccountId: yourStreamAccountId
  });
  
  const [millicastView, setMillicastView] = useState<View | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const videoNode = videoRef.current;

    const initializeMillicastView = async () => {
      try {
        const view = new View(yourStreamName, tokenGenerator);
        view.on('track', (event) => {
          console.log('Stream has started.');
          if (videoNode) {
            videoNode.srcObject = event.streams[0];
            videoNode.hidden = false;
            videoNode.autoplay = true;
          }
        });
        await view.connect();
        
        setMillicastView(view);
        setCounter(count => count + 1)
      } catch (error) {
        setIsLive(false);
        console.error('Connection failed:', error);
      }
    };

    initializeMillicastView();
  }, [yourStreamName, yourStreamAccountId, setIsLive]);

 
  // ...
  // In the main() function, after a user joins the conference, we can add the user to the participants list
  // Listen to participant events

  return (
   
    <div>
      
      {isLive ? (<div>
        <video id="streaming-video-placeholder" ref={videoRef} autoPlay />
        {counter} people watching.
        </div>
      ) : (
        <div className=" mt-[20px] flex flex-frow">
        <Image src="/cloud.svg" alt="cloud" className="mb-[10px]" height={20} width={40}/>
        <h1 className="text-slate-500 text-[20px] mt-1 ml-5"> Stream is currently offline.</h1>
        </div>

      )}
      
    </div>
   
     
  );
};

export default VideoInterface;