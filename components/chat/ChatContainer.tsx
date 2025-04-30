'use client';

import { useEffect, useRef } from 'react';

import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { LoadingMessage } from './LoadingMessage';

import { useChat } from '@/hooks/useChat';

export function ChatContainer() {
  const { messages, sendMessage, isLoading } = useChat();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[100dvh] w-full max-w-3xl mx-auto p-2 sm:p-4">
      <div 
        className="flex-1 overflow-y-auto space-y-4 pb-4"
        role="log"
        aria-live="polite"
        aria-label="Chat messages"
      >
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && <LoadingMessage />}
        <div ref={bottomRef} className="h-0" />
      </div>
      <div className="pt-2 sm:pt-4 sticky bottom-0 bg-background">
        <ChatInput onSend={sendMessage} disabled={isLoading} />
      </div>
    </div>
  );
}