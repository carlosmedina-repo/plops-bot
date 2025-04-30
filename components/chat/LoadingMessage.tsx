import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LoadingMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full justify-start"
    >
      <div className={cn(
        'max-w-[80%] rounded-lg p-4',
        'bg-gray-200 dark:bg-gray-800'
      )}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
          <div className="h-2 w-2 rounded-full bg-blue-500 animate-bounce" />
        </div>
      </div>
    </motion.div>
  );
} 