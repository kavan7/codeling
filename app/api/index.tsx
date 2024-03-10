import { pusher } from "@/lib/pusher";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message, username } = req.body;

  // here presence-chat is the chat room, and chat-message is the event called when the chat is to be updated
  await pusher.trigger("presence-chat", "chat-message", {
    message,
    username,
  });
  res.status(200).json({ message: "Message sent" });
}