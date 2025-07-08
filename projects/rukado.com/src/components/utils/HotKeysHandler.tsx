'use client';

import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

export function HotKeysHandler() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  useHotkeys(
    [['mod + J', () => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')]],
    []
  );
  return <>{null}</>;
}
