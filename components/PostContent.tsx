'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

interface PostContentProps {
  content: string
}

function unescapeContent(text: string) {
  return text
    .replace(/\\([\\`*_{}\[\]()#+\-.!>])/g, '$1') 
    .replace(/\\n/g, '\n') 
}



export default function PostContent({ content }: PostContentProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeHighlight]}
      components={{
        h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-lime-500 mb-4 mt-8" {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-yellow-400 mt-10 mb-3" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-2" {...props} />,
        p: ({ node, ...props }) => <p className="text-zinc-200 mb-4" {...props} />,
        a: ({ node, ...props }) => <a className="text-blue-400 hover:underline" target="_blank" {...props} />,
        ul: ({ node, ...props }) => <ul className="list-disc list-inside pl-4 mb-4" {...props} />,
        ol: ({ node, ...props }) => <ol className="list-decimal list-inside pl-4 mb-4" {...props} />,
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-lime-600 pl-4 italic text-zinc-400 my-4" {...props} />
        ),
        code({ inline, className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match?.[1];

  return inline ? (
    <code className="bg-zinc-800 text-yellow-400 px-1 py-0.5 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ) : (
    <pre className={`bg-zinc-900 p-4 rounded-lg overflow-x-auto text-sm text-yellow-200`}>
      <code className={`language-${language || ''} font-mono`} {...props}>
        {children}
      </code>
    </pre>
  );
}

      }}
    >
      {unescapeContent(content)}
    </ReactMarkdown>
  )
}
