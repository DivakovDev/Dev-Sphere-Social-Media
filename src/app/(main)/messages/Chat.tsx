"use client";

import { Loader2 } from "lucide-react";
import useInitializeChatClient from "./useInitializeChatClient";
import { Chat as StreamChat } from 'stream-chat-react';

export default function Chat() {
  const chatClient = useInitializeChatClient();

  if (!chatClient) return <Loader2 className="mx-auto my-3 animate-spin" />;

  return <main className='relative w-full overflow-hidden rounded-2xl bg-card shadow-sm'>
    <div className='absolute bottom-0 top-0 flex w-full'>
        <StreamChat client={chatClient}>
            
        </StreamChat>
    </div>
  </main>
}
