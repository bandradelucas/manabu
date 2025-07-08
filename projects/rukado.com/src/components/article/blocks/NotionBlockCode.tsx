import { type CodeBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { CodeHighlight } from '@mantine/code-highlight';

type NotionBlockCodeProps = {
  block: CodeBlockObjectResponse;
};

export function NotionBlockCode({ block }: NotionBlockCodeProps) {
  return (
    <CodeHighlight
      key={block.id}
      code={block.code.rich_text[0].plain_text}
      language="tsx"
      radius="md"
    />
  );
}
