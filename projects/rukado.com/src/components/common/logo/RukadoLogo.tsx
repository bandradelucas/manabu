import Image from "next/image";

import { Flex } from "@mantine/core";

export default function RukadoLogo({ size = 128 }: { size?: number }) {
  return (
    <Flex align="center" justify="center" gap="sm">
      <Image
        src="/assets/images/rukado.png"
        alt="Rukado Logo"
        width={size}
        height={size}
        priority
      />
      Rukado
    </Flex>
  );
}
