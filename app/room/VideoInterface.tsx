"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";

import { Director, View } from '@millicast/sdk';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardHeaderTwo, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";







const VideoInterface: React.FC = () => {
  const yourStreamAccountId = process.env.NEXT_PUBLIC_ACCOUNT_ID as string;
  const yourStreamName = 'Codeling';
  const [isLive, setIsLive] = useState<boolean>(true)

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

      } catch (error) {
        setIsLive(false);
        console.error('Connection failed:', error);
      }
    };

    initializeMillicastView();
  }, [yourStreamName, yourStreamAccountId, setIsLive]);

  return (
   
    <div>
      {isLive ? (
        <video id="streaming-video-placeholder" ref={videoRef} autoPlay />
      ) : (
        <div className="flex-row">
        <Image src="/cloud.svg" alt="cloud" className="mb-[10px]" height={20} width={40}/>
        <h1 className="text-slate-500 text-[20px] "> Stream is currently offline. </h1>
        </div>
      )}
    </div>
   
     
  );
};

export default VideoInterface;