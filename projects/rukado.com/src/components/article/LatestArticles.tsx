import { getTranslations } from 'next-intl/server';
import { Container, MantineSize, Stack } from '@mantine/core';
import { getLatestArticles } from '@/lib/notion';
import PageHeader from '../common/page-header/PageHeader';
import { ArticleGrid } from './ArticleGrid';

type LatestArticlesProps = {
  containerSize?: MantineSize;
};

export async function LatestArticles({ containerSize }: LatestArticlesProps) {
  const articles = await getLatestArticles();
  const t = await getTranslations('articles');

  return (
    <Container size={containerSize}>
      <Stack>
        <PageHeader title={t('articles')} />
        <ArticleGrid articles={articles} />
      </Stack>
    </Container>
  );
}
