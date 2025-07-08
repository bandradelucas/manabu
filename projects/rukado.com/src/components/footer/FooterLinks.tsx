'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { useLocale, useTranslations } from 'next-intl';
import { ActionIcon, Anchor, Container, Divider, Flex, Group, Text } from '@mantine/core';
import { getExternalLinkWithUTM } from '@/utils/url';
import LocaleSwitcher from '../utils/LocaleSwitcher';
import classes from './FooterLinks.module.css';

export function FooterLinks() {
  const locale = useLocale();
  const t = useTranslations();

  const data = [
    {
      title: 'Articles',
      links: [{ label: t('articles.latest_articles'), link: 'articles' }],
    },
  ];

  const groups = useMemo(() => {
    return data.map((group) => {
      const links = group.links.map((link, index) => {
        const isExternal = link.link.startsWith('http') || link.link === '#';

        const href = isExternal ? link.link : `/${locale}/${link.link.replace(/^\//, '')}`;

        return (
          <Text
            key={index}
            className={classes.link}
            component={Link}
            href={href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {link.label}
          </Text>
        );
      });

      return (
        <div className={classes.wrapper} key={group.title}>
          <Text className={classes.title}>{group.title}</Text>
          {links}
        </div>
      );
    });
  }, [locale]);

  return (
    <footer className={classes.footer}>
      <Container>
        <Flex justify="flex-end">
          <LocaleSwitcher />
        </Flex>
        <Divider my="md" />
      </Container>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Anchor component={Link} href="/" c="white">
            rukado.com
          </Anchor>
          <Text size="xs" c="dimmed" className={classes.description}>
            {t('footer.description')}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          {t('footer.all_rights_reserved')}
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href={getExternalLinkWithUTM('https://www.instagram.com/bandradelucas/')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href={getExternalLinkWithUTM('https://www.youtube.com/@oscolossais?sub_confirmation=1')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href={getExternalLinkWithUTM('https://www.linkedin.com/in/bandradelucas/')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href={getExternalLinkWithUTM('https://github.com/bandradelucas')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
