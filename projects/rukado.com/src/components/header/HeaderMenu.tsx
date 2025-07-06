"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Burger,
  Container,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import RukadoLogo from "../common/logo/RukadoLogo";

import classes from "./HeaderMenu.module.css";

const items = [
  { url: "/articles", label: "Articles" },
  // {
  //   link: "#1",
  //   label: "Learn",
  //   links: [
  //     { link: "/docs", label: "Documentation" },
  //     { link: "/resources", label: "Resources" },
  //     { link: "/community", label: "Community" },
  //   ],
  // },
];

export function HeaderMenu() {
  const theme = useMantineTheme();
  const pathname = usePathname();
  const locale = useLocale();
  const [opened, { toggle }] = useDisclosure(false);

  const cleanPathname = pathname.replace(`/${locale}`, "") || "/";

  const menuItems = items.map((item) => {
    // const isActive = cleanPathname === item.url;
    const isActive = cleanPathname.startsWith(item.url);

    // const menuItems = link.links?.map((item) => {
    //   const isSubActive = cleanPathname === item.link;

    //   return (
    //     <Menu.Item
    //       key={item.link}
    //       component="a"
    //       href={`/${locale}${item.link}`}
    //       className={classes.link}
    //       style={
    //         isSubActive
    //           ? { color: theme.colors[theme.primaryColor][6], fontWeight: 600 }
    //           : {}
    //       }
    //     >
    //       {item.label}
    //     </Menu.Item>
    //   );
    // });

    // if (menuItems) {
    //   const isAnySubActive = link.links?.some((l) => cleanPathname === l.link);

    //   return (
    //     <Menu
    //       key={link.label}
    //       trigger="hover"
    //       transitionProps={{ exitDuration: 0 }}
    //       withinPortal
    //     >
    //       <Menu.Target>
    //         <a
    //           href={`/${locale}${link.link}`}
    //           className={classes.link}
    //           onClick={(event) => event.preventDefault()}
    //           style={
    //             isAnySubActive
    //               ? {
    //                   color: theme.colors[theme.primaryColor][6],
    //                   fontWeight: 600,
    //                 }
    //               : {}
    //           }
    //         >
    //           <Center>
    //             <span className={classes.linkLabel}>{link.label}</span>
    //             <IconChevronDown size={14} stroke={1.5} />
    //           </Center>
    //         </a>
    //       </Menu.Target>
    //       <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    //     </Menu>
    //   );
    // }

    return (
      <Link
        key={item.label}
        href={item.url}
        locale={locale}
        className={classes.link}
        style={
          isActive
            ? {
                color: theme.colors[theme.primaryColor][6],
                fontWeight: 600,
              }
            : undefined
        }
      >
        {item.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <RukadoLogo size={45} />
          <Group gap={5} visibleFrom="sm">
            {menuItems}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
