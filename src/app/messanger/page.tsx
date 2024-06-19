"use client";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { addMessage, MessageType } from "@/lib/messanger/messageSlice";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "react-feather";
import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "@/components/ui/message";

export default function Page() {
  const dispatch = useAppDispatch();

  const messages = useAppSelector((state) => state.message.message);
  const users = useAppSelector((state) => state.user.user);
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const [messageText, setMessageText] = useState<string>("");

  function handleMessage() {
    const message: MessageType = {
      text: messageText,
      userID: currentUser,
    };
    dispatch(addMessage(message));
    setMessageText("");
  }
  return (
    <div className="h-screen w-full p-4 flex-col">
      <ScrollArea>
        {messages.map((message) => (
          <Message
            key={message.userID}
            text={message.text}
            userName={users[message.userID].name}
            isCurrent={currentUser === message.userID ? true : false}
          />
        ))}
      </ScrollArea>
      <div className="fixed bottom-0 flex justify-between mb-3 w-[40%] lg:w-[50%] xl:w-[60%]">
        <Input
          placeholder="your message"
          value={messageText}
          onChange={(text) => setMessageText(text.target.value)}
        />
        <Button
          className="fixed right-0 px-8 lg:px-16 xl:px-24 py-3 mr-3"
          onClick={() => handleMessage()}
        >
          <Send />
        </Button>
      </div>
    </div>
  );
}
