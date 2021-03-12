import React, { FC } from "react";
import NextLink from "next/link";
import { Flex, Grid, Icon, Link, Text } from "@dotkomonline/yacl";
import { useRouter } from "next/dist/client/router";
import { IconType } from "react-icons";

export interface SidebarLinkProps {
  icon?: IconType;
  href: string;
}

export const SidebarLink: FC<SidebarLinkProps> = ({ href, icon, children }) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <NextLink href={href}>
      <Link
        color={isActive ? "white" : "#5d6389"}
        borderLeft="4px"
        borderColor={isActive ? "orange.500" : "transparent"}
        bg={isActive && "#111a51"}
        fontSize="lg"
        paddingY="3"
        paddingX="4"
        _hover={{ textDecoration: "none" }}
      >
        <Flex alignItems="center" justifyContent="flex-start">
          {icon && <Icon as={icon} gridArea="icon" marginRight="2rem" />}
          <Text gridArea="text">{children}</Text>
        </Flex>
      </Link>
    </NextLink>
  );
};
