import React, { useState, useRef, useEffect } from 'react';
import { Send, Copy, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      type: 'bot',
      content: t('chatWelcome') || 'Assalomu alaykum ZominAI, qanday yordam bera olaman?',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatText = (text: string) => {
    const linkRegex = /\*\*(.*?)\*\*(?:\s*\((https?:\/\/[^\s)]+)\))?/g;
    const formattedParts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      const [fullMatch, boldText, url] = match;
      const matchStart = match.index;

      if (matchStart > lastIndex) {
        formattedParts.push(text.slice(lastIndex, matchStart));
      }

      if (url) {
        formattedParts.push(
          <a
            key={match.index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 hover:underline"
          >
            {boldText}
          </a>
        );
      } else {
        formattedParts.push(
          <strong key={match.index} className="font-bold">
            {boldText}
          </strong>
        );
      }

      lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < text.length) {
      formattedParts.push(text.slice(lastIndex));
    }

    return formattedParts;
  };

  const formatCodeBlocks = (text: string, messageId: string) => {
    const regex = /```([\s\S]*?)```/g;
    const parts = text.split(regex);

    return parts.map((chunk, i) => {
      if (i % 2 === 1) {
        const code = chunk.trim();
        const isCopied = copiedId === `${messageId}-${i}`;
        return (
          <div key={i} className="relative my-4">
            <button
              onClick={() => copyCode(code, `${messageId}-${i}`)}
              className="absolute top-2 right-2 text-xs text-white bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded z-10"
            >
              {isCopied ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto text-sm">
              <code>{code}</code>
            </pre>
          </div>
        );
      } else {
        return <p key={i} className="whitespace-pre-wrap leading-relaxed">{formatText(chunk)}</p>;
      }
    });
  };

  const sendToOpenAI = async (message: string): Promise<string> => {
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content: 'You are an AI assistant from Zomin, respond only in Uzbek.'
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

      const data = await response.json();
      return data.choices[0]?.message?.content || 'Kechirasiz, so‘rovingizni qayta yuboring.';
    } catch {
      return 'Kechirasiz, tizimda xatolik yuz berdi.';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await sendToOpenAI(userMessage);
    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: aiResponse,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  const copyCode = async (text: string, blockId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(blockId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  const renderMessage = (msg: Message) => {
    const isBot = msg.type === 'bot';
    const hasCode = msg.content.includes('```');

    return (
      <div key={msg.id} className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
        <div className="max-w-3xl space-x-3 items-start">
          <div className={`rounded-2xl px-6 py-4 shadow-lg ${isBot ? 'bg-white dark:bg-gray-800' : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'}`}>
            <div className="prose dark:prose-invert max-w-none">
              {hasCode ? formatCodeBlocks(msg.content, msg.id) : <p className="whitespace-pre-wrap">{formatText(msg.content)}</p>}
            </div>
            <div className="text-xs text-right mt-2 text-gray-400">
              {msg.timestamp.toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-slate-50 to-blue-100 dark:from-slate-900 dark:to-blue-900/20">
      <div className="max-w-4xl mx-auto px-4 pb-28 pt-4 space-y-6">
        {messages.map(renderMessage)}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2 px-6 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-75"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-xl px-4">
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 p-2 flex items-center space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder={t('typeMessage') || 'Xabar yozing...'}
            className="flex-1 bg-transparent resize-none focus:outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2"
            rows={1}
            style={{ minHeight: '40px', maxHeight: '100px' }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-md disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
