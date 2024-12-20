'use client';

import { Button } from "@/components/ui/button";
import { Card, CardFooter } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { ScrollArea } from '@/components/ui/scroll-area';
import { getResponse } from '@/lib/chat-responses';
import { Send } from 'lucide-react';
import React, { useState } from 'react';

interface Message {
    content: string
    isUser: boolean
    timestamp: string
}

const Chat = () => {

    const [messages, setMessages] = useState<Message[]>([
        {
            content: "Hello! I'm here to assist you with any questions about our products, your orders, or general inquiries. Let me know how I can help!",
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ])
    const [input, setInput] = useState('')

    const handleSend = () => {
        if (!input.trim()) return

        const userMessage: Message = {
            content: input,
            isUser: true,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        const botMessage: Message = {
            content: getResponse(input),
            isUser: false,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }

        setMessages(prev => [...prev, userMessage, botMessage])
        setInput('')
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <Card className="w-full max-w-2xl h-full border-none shadow-md flex flex-col">
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                        >
                            <div
                                className={`rounded-lg px-4 py-2 max-w-[80%] break-words ${message.isUser
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-muted'
                                    }`}
                            >
                                <p>{message.content}</p>
                                <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </ScrollArea>
            <CardFooter className="p-4 pt-2 border-t">
                <div className="flex w-full items-center space-x-2">
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1"
                    />
                    <Button onClick={handleSend} size="icon">
                        <Send className="h-4 w-4" />
                        <span className="sr-only">Send message</span>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Chat
