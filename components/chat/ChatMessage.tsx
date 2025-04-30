import { motion } from 'framer-motion';
import { Message } from '@/types/chat';
import { cn } from '@/lib/utils';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from 'react-syntax-highlighter/dist/cjs/styles/prism/one-dark';

interface ChatMessageProps {
  message: Message;
}

interface MessagePart {
  type: 'text' | 'code';
  content: string;
  language?: string;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  // Function to parse and format code blocks
  const formatMessage = (content: string): MessagePart[] => {
    const codeBlockRegex = /```([\w-]*)\n([\s\S]*?)```/g;
    const parts: MessagePart[] = [];
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      // Add text before code block
      if (match.index > lastIndex) {
        parts.push({
          type: 'text',
          content: content.slice(lastIndex, match.index),
        });
      }

      // Add code block
      parts.push({
        type: 'code',
        language: match[1] || 'plaintext',
        content: match[2].trim(),
      });

      lastIndex = match.index + match[0].length;
    }

    // Add remaining text
    if (lastIndex < content.length) {
      parts.push({
        type: 'text',
        content: content.slice(lastIndex),
      });
    }

    return parts;
  };

  const messageParts = formatMessage(message.content);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'flex w-full',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] sm:max-w-[75%] rounded-lg p-3 sm:p-4',
          isUser ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800'
        )}
      >
        {messageParts.map((part, index) => (
          part.type === 'code' ? (
            <div key={index} className="my-4 first:mt-0 last:mb-0">
              <div className="rounded-md overflow-hidden bg-[#282c34]">
                <div className="px-4 py-2 bg-[#21252b] text-xs text-gray-200">
                  {part.language}
                </div>
                <SyntaxHighlighter
                  language={part.language}
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    padding: '1rem',
                    background: 'transparent',
                  }}
                >
                  {part.content}
                </SyntaxHighlighter>
              </div>
            </div>
          ) : (
            <div key={index} className="whitespace-pre-wrap my-4 first:mt-0 last:mb-0">
              {part.content}
            </div>
          )
        ))}
      </div>
    </motion.div>
  );
} 