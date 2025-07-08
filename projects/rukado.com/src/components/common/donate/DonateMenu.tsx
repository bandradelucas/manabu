import { IconArrowsLeftRight, IconGift, IconMessageCircle, IconPhoto } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Button, Menu } from '@mantine/core';
import { getExternalLinkWithUTM } from '@/utils/url';

export function DonateMenu() {
  const t = useTranslations('DonateMenu');

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button size="lg" rightSection={<IconGift />}>
          {t('donate')}
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{t('not_from_brazil')}</Menu.Label>
        <Menu.Item
          leftSection={<IconMessageCircle size={14} />}
          component="a"
          href={getExternalLinkWithUTM(
            'https://www.paypal.com/donate/?hosted_button_id=T2YEDRJEZ5ULQ'
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal
        </Menu.Item>
        <Menu.Item
          leftSection={<IconPhoto size={14} />}
          component="a"
          href={getExternalLinkWithUTM('https://coff.ee/rukado')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy Me a Coffee
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>{t('im_from_brazil')}</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
          component="a"
          href={getExternalLinkWithUTM('https://link.mercadopago.com.br/rukado')}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mercado Pago
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
