"use client";

import { useState } from "react";

import { Burger, Container, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import RukadoLogo from "../common/logo/RukadoLogo";
import { ColorSchemeControl } from "../utils/ColorSchemeControl";

import classes from "./HeaderSimple.module.css";

const links = [
  { link: "/tools", label: "Tools" },
  { link: "/projects", label: "Projects" },
  { link: "/blog", label: "Blog" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <RukadoLogo size={45} />
        <Group gap={5} visibleFrom="xs">
          {items}
          <ColorSchemeControl />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
