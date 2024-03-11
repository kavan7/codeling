"use client";
import React from "react";
import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";


interface UserProps{
  user: String
}



export function ChatWindow({user} : UserProps): JSX.Element {

const pubnub = new PubNub({

  publishKey: process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY as string,
  subscribeKey: process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE as string,
  userId: user as string
});

const currentChannel = "Default";
const theme = "dark";

  
  return (
    <PubNubProvider client={pubnub}>
      {/* PubNubProvider is a part of the PubNub React SDK and allows you to access PubNub instance
      in components down the tree. */}
      <Chat {...{ currentChannel, theme }}>
        {/* Chat is an obligatory state provider. It allows you to configure some common component
        options, like the current channel and the general theme for the app. */}
        <MessageList />
        <MessageInput />
      </Chat>
    </PubNubProvider>
  );
}

export default ChatWindow;