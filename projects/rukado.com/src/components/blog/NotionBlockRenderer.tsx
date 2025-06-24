import { Code, Image, Text } from "@mantine/core";
import { CodeHighlight } from "@mantine/code-highlight";
import "@mantine/code-highlight/styles.css";

const exampleCode = `
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`;

const blockRenderers: Record<string, (block: any) => React.ReactNode> = {
  paragraph: (block) => (
    <Text key={block.id}>
      {block.paragraph.rich_text.map((text: any, index: number) => {
        let content = text.plain_text;

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
  ),
  image: (block) => {
    const imageUrl =
      block.image.type === "external"
        ? block.image.external.url
        : block.image.file.url;

    return (
      <Image
        key={block.id}
        src={imageUrl}
        alt="Notion Image"
        radius="md"
        mt="md"
        mb="md"
      />
    );
  },
  code: (block) => {
    return (
      <CodeHighlight
        key={block.id}
        code={exampleCode}
        language="tsx"
        radius="md"
      />
    );
  },
};

export function NotionBlockRenderer({ blocks }: any) {
  return (
    <>
      {blocks.map((block: any) => {
        const blockRender = blockRenderers[block.type];

        if (blockRender) {
          return blockRender(block);
        }

        console.warn(`No renderer for block type: ${block.type}`);
        return null;
      })}
    </>
  );
}
