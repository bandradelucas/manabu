import { Image } from "@mantine/core";

export function NotionBlockImage({ block }: { block: any }) {
  const imageUrl =
    block.image.type === "external"
      ? block.image.external.url
      : block.image.file.url;

  return (
    <Image src={imageUrl} alt="Notion Image" radius="md" mt="md" mb="md" />
  );
}
