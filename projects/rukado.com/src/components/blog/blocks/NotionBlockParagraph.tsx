import { Code, Text } from "@mantine/core";

export function NotionBlockParagraph({ block }: { block: any }) {
  return (
    <Text>
      {block.paragraph.rich_text.map((text: any, index: number) => {
        const content = text.plain_text;

        let node: React.ReactNode = content;

        if (text.annotations.code) {
          node = <Code>{node}</Code>;
        }
        if (text.annotations.bold) {
          node = (
            <Text span fw={700}>
              {node}
            </Text>
          );
        }
        if (text.annotations.italic) {
          node = (
            <Text span fs="italic">
              {node}
            </Text>
          );
        }

        return (
          <Text span key={index}>
            {node}
          </Text>
        );
      })}
    </Text>
  );
}
