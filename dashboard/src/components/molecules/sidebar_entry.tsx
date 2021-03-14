import React, { FC } from "react";
import NextLink from "next/link";
import { Box, Icon, Link } from "@dotkomonline/yacl";
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
      <Box
        color={isActive ? "white" : "#5d6389"}
        borderLeft="4px"
        borderColor={isActive ? "orange.500" : "transparent"}
        bg={isActive && "#121a46"}
        _hover={!isActive && { bg: "#151d4e" }}
        fontSize="lg"
        paddingY="3"
        paddingX="4"
      >
        <Link gridArea="text" _hover={{ textDecoration: "none" }}>
          {icon && <Icon as={icon} gridArea="icon" marginRight="2rem" />}
          {children}
        </Link>
      </Box>
    </NextLink>
  );
};
