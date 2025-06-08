import React, { useState, useRef, useEffect } from 'react';
import { Send, Copy, CheckCircle, Bot, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: t('chatWelcome'),
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const sendToOpenAI = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are an AI module established in the Zomin district of Jizzakh region. Please respond to the user only in Uzbek. Be helpful, friendly, and informative. For the first text, please respond with the text Assalam aleikum ZominAI, how can it help you?'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Sorry, I could not process your request.';
    } catch (error) {
      console.error('OpenAI API Error:', error);
      return 'Kechirasiz, xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.';
    }
  };

  const sendToResend = async (userMessage: string, userInfo: any) => {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'ZominAI <noreply@zominai.uz>',
          to: ['admin@zominai.uz'],
          subject: 'New Chat Message - ZominAI',
          html: `
            <h2>New message from ZominAI Chat</h2>
            <p><strong>User:</strong> Anonymous User</p>
            <p><strong>Message:</strong> ${userMessage}</p>
            <p><strong>IP:</strong> ${userInfo.ip || 'Unknown'}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          `
        })
      });
    } catch (error) {
      console.error('Resend API Error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const userMessageObj: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessageObj]);
    setInput('');
    setIsLoading(true);

    // Send to Resend API for logging
    try {
      const userInfo = {
        ip: 'Unknown' // In a real app, you'd get this from the server
      };
      await sendToResend(userMessage, userInfo);
    } catch (error) {
      console.error('Failed to log message:', error);
    }

    // Get AI response
    try {
      const aiResponse = await sendToOpenAI(userMessage);
      const botMessageObj: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessageObj]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Kechirasiz, hozir javob bera olmayman. Iltimos, keyinroq urinib ko\'ring.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const copyCode = async (text: string, messageId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(messageId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const renderMessage = (message: Message) => {
    const isBot = message.type === 'bot';
    const hasCode = message.content.includes('```') || message.content.includes('<code>');

    return (
      <div
        key={message.id}
        className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
      >
        <div className={`max-w-3xl flex ${isBot ? 'flex-row' : 'flex-row-reverse'} items-start space-x-3`}>
          {/* Avatar */}
          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
            isBot 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500'
          }`}>
            {isBot ? (
              <Bot className="w-5 h-5 text-white" />
            ) : (
              <User className="w-5 h-5 text-white" />
            )}
          </div>

          {/* Message */}
          <div className={`px-6 py-4 rounded-2xl shadow-lg ${
            isBot 
              ? 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700' 
              : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
          }`}>
            <div className="prose prose-sm max-w-none">
              {hasCode ? (
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm">{message.content}</code>
                  </pre>
                  <button
                    onClick={() => copyCode(message.content, message.id)}
                    className="absolute top-2 right-2 px-3 py-1 bg-gray-700 text-white text-xs rounded-md hover:bg-gray-600 transition-colors flex items-center space-x-1"
                  >
                    {copiedId === message.id ? (
                      <>
                        <CheckCircle className="w-3 h-3" />
                        <span>{t('codeCopied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{t('copyCode')}</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <p className={`${isBot ? 'text-gray-800 dark:text-gray-200' : 'text-white'} leading-relaxed`}>
                  {message.content}
                </p>
              )}
            </div>
            <div className={`text-xs mt-2 ${
              isBot ? 'text-gray-500 dark:text-gray-400' : 'text-blue-100'
            }`}>
              {message.timestamp.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 flex flex-col">
      {/* Chat Container */}
      <div className="flex-1 max-w-6xl mx-auto w-full px-4 py-8 flex flex-col">
        {/* Messages */}
        <div className="flex-1 space-y-6 mb-6 overflow-y-auto">
          {messages.map(renderMessage)}
          {isLoading && (
            <div className="flex justify-start animate-fade-in-up">
              <div className="max-w-3xl flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form - Moved to bottom */}
<div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-50">
  <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 p-2 flex items-center space-x-2 transition-all">
    <textarea
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSubmit(e);
        }
      }}
      placeholder={t('typeMessage')}
      className="flex-1 px-4 py-2 bg-transparent text-sm resize-none focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
      rows={1}
      style={{ minHeight: '40px', maxHeight: '100px' }}
    />
    <button
      type="submit"
      disabled={!input.trim() || isLoading}
      className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md"
    >
      <Send className="w-4 h-4" />
    </button>
  </form>
</div>

      </div>
    </div>
  );
};

export default Chat;