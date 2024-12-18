'use client';

import { MarketingFooter } from "./MarketingFooter";
import { MarketingHeader } from "./MarketingHeader";

type Props = {
  children: React.ReactNode
}

export const MarketingLayout = ({ children }: Props) => {
  return (
    <>
      <MarketingHeader />
      {children}
      <MarketingFooter />
    </>
  );
}