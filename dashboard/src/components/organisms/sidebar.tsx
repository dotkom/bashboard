import { Stack, Center, ModernLogo } from "@dotkomonline/yacl";
import React from "react";
import { IconType } from "react-icons";
import {
  FaBuilding,
  FaNewspaper,
  FaSuitcase,
  FaTwitch,
  FaWheelchair,
} from "react-icons/fa";
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
  {
    label: "Karrieremuligheter",
    icon: FaSuitcase,
    href: "/career",
  },
  {
    label: "Is for me?",
    icon: FaTwitch,
    href: "/twitch",
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
