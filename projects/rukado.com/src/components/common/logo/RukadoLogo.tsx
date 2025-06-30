import Image from "next/image";
import Link from "next/link";

import { Anchor, Flex, Text } from "@mantine/core";

export default function RukadoLogo({ size = 128 }: { size?: number }) {
  return (
    <Anchor component={Link} href="/" underline="never">
      {/* <Link href="/" style={{ textDecoration: "none" }}> */}
      <Flex align="center" justify="center" gap="sm">
        <Image
          src="/assets/images/rukado.png"
          alt="Rukado Logo"
          width={size}
          height={size}
          priority
        />
        <Text c="white">Rukado</Text>
      </Flex>
    </Anchor>
  );
}
