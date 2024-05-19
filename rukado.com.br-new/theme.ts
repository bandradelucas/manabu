'use client';

import { createTheme } from '@mantine/core';
import { VT323 } from 'next/font/google';

const fontVT232 = VT323({ weight: '400', subsets: ['latin'] });

export const theme = createTheme({
  // scale: 1.4,
  fontFamily: fontVT232.style.fontFamily,
  fontSizes: {
    xs: '1.05rem', // 0.75rem
    sm: '1.225rem', // 0.875rem
    md: '1.4rem', // 1rem
    lg: '1.575rem', // 1.125rem
    xl: '1.75rem' // 1.25rem
  },
});
