import { type ImageBlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { Image } from '@mantine/core';

type NotionBlockImageProps = {
  block: ImageBlockObjectResponse;
};

export function NotionBlockImage({ block }: NotionBlockImageProps) {
  const imageUrl =
    block.image.type === 'external' ? block.image.external.url : block.image.file.url;

  return <Image src={imageUrl} alt="Notion Image" radius="md" mt="md" mb="md" />;
}
