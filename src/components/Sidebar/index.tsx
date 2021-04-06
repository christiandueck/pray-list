import { Box, Drawer, DrawerContent, DrawerOverlay, useBreakpointValue, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "../Logo";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.900" p="4">
            <DrawerCloseButton mt="6" />

            <DrawerHeader><Logo size={2} /></DrawerHeader>

            <DrawerBody pt="8">
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav />
    </Box>
  );
}