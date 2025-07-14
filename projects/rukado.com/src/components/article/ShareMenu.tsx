import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandX,
  IconLink,
  IconShare,
} from '@tabler/icons-react';
import { ActionIcon, CopyButton, Menu, Tooltip } from '@mantine/core';

type ShareMenuProps = {
  url: string;
  title?: string;
};

export default function ShareMenu({ url, title }: ShareMenuProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title ?? '');

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
  };

  const canUseWebShare =
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    typeof navigator.share === 'function';

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title,
        url,
      });
    } catch (error) {
      // console.error('Erro ao compartilhar:', error);
    }
  };

  return (
    <Menu shadow="md" position="bottom-end" withArrow>
      <Menu.Target>
        <Tooltip label="Compartilhar" position="top" withArrow>
          <ActionIcon variant="subtle" color="gray" aria-label="Compartilhar">
            <IconShare size={20} stroke={1.5} />
          </ActionIcon>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item
          component="a"
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandX size={16} />}
        >
          Twitter / X
        </Menu.Item>
        <Menu.Item
          component="a"
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandFacebook size={16} />}
        >
          Facebook
        </Menu.Item>
        <Menu.Item
          component="a"
          href={shareLinks.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandWhatsapp size={16} />}
        >
          WhatsApp
        </Menu.Item>
        <Menu.Item
          component="a"
          href={shareLinks.telegram}
          target="_blank"
          rel="noopener noreferrer"
          leftSection={<IconBrandTelegram size={16} />}
        >
          Telegram
        </Menu.Item>

        <CopyButton value={url} timeout={2000}>
          {({ copied, copy }) => (
            <Menu.Item onClick={copy} leftSection={<IconLink size={16} />}>
              {copied ? 'Link copiado!' : 'Copiar link'}
            </Menu.Item>
          )}
        </CopyButton>

        {canUseWebShare && (
          <Menu.Item onClick={handleNativeShare} leftSection={<IconShare size={16} />}>
            Compartilhar
          </Menu.Item>
        )}
      </Menu.Dropdown>
    </Menu>
  );
}
