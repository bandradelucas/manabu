import { useTranslations } from 'next-intl';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './HttpError.module.css';

type HttpErrorProps = {
  code: number;
};

export function HttpError({ code }: HttpErrorProps) {
  const t = useTranslations('error');

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>{code}</div>
        <Title className={classes.title}>{t(`${code}.title`)}</Title>
        <Text size="lg" ta="center" className={classes.description}>
          {t(`${code}.description`)}
        </Text>
        <Group justify="center">
          <Button size="md">{t('button_refresh')}</Button>
        </Group>
      </Container>
    </div>
  );
}
