import {
  Stack,
  Button,
  Accordion,
  AccordionItem,
  Link,
  Box,
} from "@dotkomonline/yacl";
import React from "react";
import { FaWheelchair } from "react-icons/fa";

interface SidebarItem {
  name: string;
  link: string;
}

interface RootSidebarItem extends SidebarItem {
  items?: SidebarItem[];
  icon: React.ReactNode;
}
const Links: RootSidebarItem[] = [
  {
    name: "Analytics",
    link: "a",
    icon: <FaWheelchair />,
    items: [
      { name: "Finance", link: "a" },
      { name: "Vehicles", link: "a" },
      { name: "trips", link: "a" },
    ],
  },
];

const Sidebar = () => {
  return (
    <Stack h="100vh">
      {Links.map((rootItem) => (
        <Accordion>
          {
            <AccordionItem>
              <Box>
                {rootItem.icon}
                <Link>{rootItem.name}</Link>
              </Box>
            </AccordionItem>
          }
        </Accordion>
      ))}
    </Stack>
  );
};

export default Sidebar;
