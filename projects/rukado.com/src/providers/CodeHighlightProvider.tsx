'use client';

import { CodeHighlightAdapterProvider, createShikiAdapter } from '@mantine/code-highlight';

async function loadShiki() {
  const { createHighlighter } = await import('shiki');
  const shiki = await createHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

export function CodeHighlightProvider({ children }: { children: React.ReactNode }) {
  return (
    <CodeHighlightAdapterProvider adapter={shikiAdapter}>{children}</CodeHighlightAdapterProvider>
  );
}
