import { CodeHighlight } from "@mantine/code-highlight";

export function NotionBlockCode({ block }: { block: any }) {
  return (
    <CodeHighlight
      key={block.id}
      code={block.code.rich_text[0].plain_text}
      language="tsx"
      radius="md"
    />
  );
}
