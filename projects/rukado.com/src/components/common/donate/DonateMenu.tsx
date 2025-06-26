import { Button, Menu, Text } from "@mantine/core";
import {
  IconArrowsLeftRight,
  IconGift,
  IconMessageCircle,
  IconPhoto,
} from "@tabler/icons-react";

export function DonateMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button size="lg" rightSection={<IconGift />}>
          Donate
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>I'm not from Brazil</Menu.Label>
        <Menu.Item
          leftSection={<IconMessageCircle size={14} />}
          component="a"
          href="https://www.paypal.com/donate/?hosted_button_id=T2YEDRJEZ5ULQ"
          target="_blank"
        >
          PayPal
        </Menu.Item>
        <Menu.Item
          leftSection={<IconPhoto size={14} />}
          component="a"
          href="https://coff.ee/rukado"
          target="_blank"
        >
          Buy Me a Coffee
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>I'm from Brazil</Menu.Label>
        <Menu.Item
          leftSection={<IconArrowsLeftRight size={14} />}
          component="a"
          href="@todo"
          target="_blank"
        >
          PicPay
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
