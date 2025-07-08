import { Box, Title } from '@mantine/core';

type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <Box pt="2rem">
      <Title order={1}>{title}</Title>
    </Box>
  );
}
