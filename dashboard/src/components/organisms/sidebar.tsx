import { Stack, Logo, Center, ModernLogo } from "@dotkomonline/yacl";
import React from "react";
import { IconType } from "react-icons";
import { FaBuilding, FaNewspaper, FaWheelchair } from "react-icons/fa";
import { SidebarLink } from "../molecules/sidebar_entry";

interface SidebarEntry {
  label: string;
  icon?: IconType;
  href: string;
}

type LinkType = SidebarEntry;

const Links: LinkType[] = [
  {
    label: "Arrangement",
    icon: FaWheelchair,
    href: "/events",
  },
  {
    label: "Artikler",
    icon: FaNewspaper,
    href: "/docs",
  },
  {
    label: "Bedrifter",
    icon: FaBuilding,
    href: "/",
  },
];

const Sidebar = () => {
  return (
    <Stack h="100vh" w="250px" bg="#172057">
      <Center marginTop="4">
        <ModernLogo primaryColor="white" width="35%" />
      </Center>
      {Links.map((entry) => (
        <SidebarLink key={entry.label} {...entry}>
          {entry.label}
        </SidebarLink>
      ))}
    </Stack>
  );
};

export default Sidebar;
